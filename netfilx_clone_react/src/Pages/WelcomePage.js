import React from "react";

import Footer from "../components/welcome/Footer";
import Header from "../components/welcome/Header";
import Banner from "../components/welcome/Banner";
import CardContainer from "../components/welcome/CardContainer";
import QuestionContainer from "../components/welcome/QuestionContainer";
import Title from "../components/welcome/Title";
import Layout from "../components/welcome/Layout";
import EmailInput from "../components/welcome/EmailInput";
import VideoContainer from "../components/welcome/VideoContainer";

export default function WelcomePage() {
  return (
    <Layout>
      <Header />
      <Banner />
      <Title>지금 뜨는 콘텐츠</Title>
      <VideoContainer />
      <Title>가입해야하는 또 다른 이유</Title>
      <CardContainer />
      <Title>자주 묻는 질문</Title>
      <QuestionContainer />
      <EmailInput />
      <Footer />
    </Layout>
  );
}
