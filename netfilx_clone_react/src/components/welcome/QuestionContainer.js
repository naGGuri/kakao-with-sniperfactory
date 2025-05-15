import React from "react";
import styled from "styled-components";
import Question from "./Question";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  padding: 20px;
`;

const questionList = [
  {
    id: 1,
    title: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: "넷플릭스란 무엇인가요?",
    subtitle:
      "Fusce dignissim consectetur maximus. Praesent bibendum leo quis sapien convallis lacinia. Mauris placerat felis sapien. Ut dui dolor, finibus in nunc nec, ornare dictum diam. Nulla lobortis, mauris eget gravida tempor, mi diam commodo justo, in maximus tortor nisi vel elit. Curabitur vulputate mauris eu dui tincidunt, non ultricies magna lobortis. Integer sollicitudin, magna nec interdum dapibus, diam mi hendrerit dui, vehicula malesuada odio urna finibus enim. Nam massa neque, efficitur a gravida non, ullamcorper et orci. Quisque sed varius massa. Duis id purus at erat blandit accumsan vel id enim. Nunc cursus, turpis a tincidunt finibus, felis ex mollis sapien, eget fringilla sem diam et lacus. Suspendisse faucibus ut lectus consectetur interdum. Ut neque magna, dictum at ornare vitae, suscipit vitae sapien.",
  },
  {
    id: 3,
    title: "넷플릭스 요금은 얼마인가요?",
    subtitle:
      "Morbi in elit at turpis vehicula bibendum sit amet sit amet velit. Nulla varius euismod eros, in pulvinar lorem lacinia eu. Suspendisse vitae blandit lectus. Nulla sit amet blandit lorem. Ut accumsan risus vel ultricies tincidunt. Morbi condimentum metus ex, ac mattis ante volutpat a. Donec et ultrices magna, vel laoreet mi. In eget ligula eget neque luctus ullamcorper eget mattis quam. Donec vel condimentum odio. Vivamus fermentum urna eros, ac tincidunt justo consequat at. Proin tincidunt quam urna, et efficitur arcu viverra nec. Cras malesuada tempus ex id tempor.",
  },
  {
    id: 4,
    title: "어디에서 시청할 수 있나요?",
    subtitle:
      "tempus turpis. In eu lacus nec mi viverra ultricies. Curabitur sed iaculis risus. Donec bibendum ac odio non porttitor. Nam convallis lorem in placerat fermentum. Nulla tempus pellentesque tristique. Nam viverra rhoncus nunc, a congue arcu posuere at.",
  },
  {
    id: 5,
    title: "멤버십을 해지하려면 어떻게 하나요?",
    subtitle:
      "Aenean nec vehicula ipsum, ac congue felis. Aliquam id ultrices nulla. Quisque at orci ac diam dictum accumsan. Morbi imperdiet at lectus eget mattis. Cras pulvinar a nisi nec auctor. Sed mattis auctor efficitur. Aliquam erat volutpat. Nulla turpis erat, dapibus vel dignissim eu, blandit ut mauris. Proin imperdiet condimentum tincidunt. Donec vulputate efficitur pulvinar. Morbi sed turpis et eros eleifend pellentesque. Curabitur consectetur aliquam lacus eget malesuada. Sed porttitor aliquet luctus. Mauris non ipsum in est tristique iaculis.",
  },
  {
    id: 6,
    title: "아이들이 넷플릭스를 봐도 좋을까요?",
    subtitle:
      "Maecenas commodo odio at tincidunt consectetur. Fusce eu dignissim quam. Pellentesque vitae feugiat sapien. Curabitur orci ex, volutpat ut molestie a, congue sed leo. Duis vehicula tincidunt semper. Vestibulum elementum euismod odio, ac pharetra odio ultrices id. Cras vel rhoncus urna. Morbi dictum mattis libero, a efficitur turpis elementum at. Praesent fermentum, dui non viverra luctus, lectus velit auctor quam, in porta lorem nunc id odio. Sed sed urna at lacus mollis consequat. Vivamus et purus viverra, facilisis turpis ut, ornare dui. Quisque sagittis augue non facilisis iaculis. Quisque sed facilisis velit.",
  },
];

export default function QuestionContainer() {
  return (
    <Container>
      {questionList.map((item) => (
        <Question key={item.id} title={item.title} subtitle={item.subtitle} />
      ))}
    </Container>
  );
}
