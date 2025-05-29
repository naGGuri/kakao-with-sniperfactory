from typing import List
from fastapi import FastAPI, Query, HTTPException
from fastapi import FastAPI, HTTPException, status, File, UploadFile, Query
from fastapi.responses import FileResponse
from typing import Optional, List
import uvicorn
import os
import shutil
import tempfile

app = FastAPI()

UPLOAD_DIR = "uploads"  # 업로드된 파일을 저장할 디렉토리

# 단일 파일 업로드 API


@app.post("/upload-file")
async def upload_file(file: UploadFile = File(...)):
    print(f"Received file: {file.filename}")
    # 1단계: 파일 형식 검증
    allowed_types = ["image/jpeg", "image/png", "image/gif"]

    # 2단계: 파일 크기 검증(보안 및 서버 용량 관리)
    file_size = 0
    # await file.read(): 비동기적으로 파일 내용을 읽어옴
    # 파일이 클 경우 메모리 사용량 주의가 필요하다
    content = await file.read()
    file_size = len(content)

    if file_size > 5 * 1024 * 1024:  # 5MB 제한
        raise HTTPException(
            status_code=400,
            detail="파일 크기가 5MB를 초과합니다."
        )

    # 3단계: 파일 저장
    os.makedirs(UPLOAD_DIR, exist_ok=True)
    # exist_ok=True: 디렉토리가 이미 있어도 에러발생 안함

    # 파일 경로 생성: uploads/파일명.확장자
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    # "wb" 모드: 바이너리 쓰기 모드 (이미지, 동영상 등 바이너리 파일용)
    with open(file_path, "wb") as buffer:
        buffer.write(content)

    # 4단계: 업로드 결과 반환
    return {
        "filename": file.filename,
        "content_type": file.content_type,
        "size": file_size,
        "message": "파일이 성공적으로 업로드되었습니다."
    }

# 다중파일 업로드 API


@app.post("/uploads-multiple-file")
async def upload_multiple_files(files: List[UploadFile] = File(...)):
    allowed_types = ["image/jpeg", "image/png", "image/gif"]

    UPLOAD_DIR = "uploads"
    os.makedirs(UPLOAD_DIR, exist_ok=True)

    results = []

    for file in files:
        print(f"Received file: {file.filename}")

        # 파일 타입 검증
        if file.content_type not in allowed_types:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"{file.filename}: 허용되지 않는 파일 형식입니다."
            )
        # 파일 크기 검증
        content = await file.read()
        file_size = len(content)

        if file_size > 5 * 1024 * 1024:  # 5MB 제한
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="파일 크기가 5MB를 초과합니다."
            )
        # 파일 저장
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as buffer:
            buffer.write(content)

        results.append({
            "filename": file.filename,
            "content_type": file.content_type,
            "size": file_size,
            "message": "파일이 성공적으로 업로드되었습니다."
        })

    return {"files": results}

# 파일 목록 조회(페이징, 필터링) API


@app.get("/files")
async def file_list(
    name: Optional[str] = Query(None, description="파일 이름에 포함된 문자열"),
    page: int = Query(1, ge=1, description="페이지 번호"),
    size: int = Query(10, ge=1, le=100, description="페이지당 항목 수")
):
    try:
        # 업로드된 디렉토리 안의 파일 리스트를 가져오기
        all_files = os.listdir(UPLOAD_DIR)
        # os.listdir(path): 지정된 디렉토리 내 모든 파일 및 디렉토리 목록 반환
    except FileNotFoundError:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="업로드 폴더가 존재하지 않습니다."
        )

    filtered_files = []

    for f in all_files:
        file_path = os.path.join(UPLOAD_DIR, f)
        if not os.path.isfile(file_path):
            # os.path.isfile(path): 경로가 일반 파일인지 여부를 반환
            continue
        # 필터링
        if name and name not in f:  # name값이 존재하고 이 문자열이 'f'에 포함되어 있지 않으면
            continue  # 필터를 하지 않고 건너뜀
        filtered_files.append({
            "filename": f,
            "size": os.path.getsize(file_path),
            "last_modified": os.path.getmtime(file_path)
        })

    total = len(filtered_files)
    start = (page - 1) * size
    end = start + size
    files = filtered_files[start:end]

    return {
        "total": total,
        "page": page,
        "size": size,
        "files": files
    }


# 단일 파일 다운로드 API


@app.get("/download/{filename}")
def download_file(filename: str):
    file_path = os.path.join(UPLOAD_DIR, filename)
    if not os.path.exists(file_path):
        # os.path.exists(path): 파일 존재 여부 확인
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="파일이 존재하지 않습니다."
        )
    return FileResponse(
        file_path,
        filename=filename,
        media_type="application/octet-stream"
    )


# 다중 파일 다운로드(zip) API


@app.get("/download-zip")
def download_zip_get(file_names: List[str] = Query(...)):
    # 임시 폴더 및 압축파일 경로 설정
    temp_dir = tempfile.mkdtemp()
    zip_base = os.path.join(temp_dir, "bundle")

    for fname in file_names:
        src = os.path.join(UPLOAD_DIR, fname)
        if not os.path.isfile(src):
            raise HTTPException(
                status_code=404, detail=f"{fname} 파일이 존재하지 않습니다.")
        shutil.copy(src, temp_dir)

    # ZIP 파일 생성
    zip_path = shutil.make_archive(zip_base, 'zip', temp_dir)

    return FileResponse(
        path=zip_path,
        filename="files.zip",
        media_type="application/zip"
    )

# 단일 파일 삭제 API


@app.delete("/delete/{filename}")
def delete_file(filename: str):
    file_path = os.path.join(UPLOAD_DIR, filename)
    if not os.path.isfile(file_path):
        raise HTTPException(
            status_code=404,
            detail="파일이 존재하지 않습니다."
        )
    os.remove(file_path)
    return {"message": f"{filename} 파일이 삭제되었습니다."}

# 다중 파일 삭제 API


@app.delete("/delete-multiple")
def delete_multiple_files(file_names: List[str] = Query(...)):
    deleted = []

    for fname in file_names:
        file_path = os.path.join(UPLOAD_DIR, fname)
        if not os.path.isfile(file_path):
            raise HTTPException(
                status_code=404,
                detail="파일이 존재하지 않습니다."
            )
        os.remove(file_path)
    return {"message": f"{file_names} 파일들이 삭제되었습니다."}


if __name__ == "__main__":
    uvicorn.run(app)
