import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { SiStreamlit } from "react-icons/si";

import linegoogleocrt from "../images/linegoogleocrt.png";
import pythonxopencv from "../images/pythonxopencv.png";
import bigqueryml from "../images/bigqueryml.png";
import pythonrelateanalysis from "../images/pythonrelateanalysis.png";

import React from 'react';

const projectConfig = [
  {
    id: "project-5",
    title: "LineBot × Google OCR",
    category: { en: "Library", jp: "ツール開発" },
    description_i18n: {
      en: "Business Card Information Registration Tool using LineBot × Google OCR × Python",
      jp: "LineBot × Google OCR × Pythonを用いた名刺情報登録ツール"
    },
    links: [
      { name: "repo", url: "https://github.com/Deymomanka/business-card-bot", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/Deymomanka/business-card-bot/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/Deymomanka/business-card-bot/subscription", icon: <AiFillEye/> },
     // { name: "docs", url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/", icon: <ImBook/> }
    ],
    image: linegoogleocrt,
    target: "_blank"
  },
  {
    id: "project-3",
    title: "Face Recognition",
    category: { en: "System", jp: "業務管理" },
    description_i18n: {
      en: "Face Recognition Attendance System using Python",
      jp: "Pythonを用いた顔認証による出退勤の打刻ツール"
    },
    links: [
      { name: "repo", url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription", icon: <AiFillEye/> }
    ],
    image: pythonxopencv,
    target: "_blank"
  },
  {
    id: "project-2",
    title: "BigQuery × ML",
    category: { en: "Machine Learning", jp: "機械学習" },
    description_i18n: {
      en: "Comparative Analysis of ML Models using BigQuery ML",
      jp: "BigQuery × ML モデル比較プロジェクト"
    },
    links: [
      { name: "repo", url: "https://github.com/Deymomanka/iowa-sales-project", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/Deymomanka/iowa-sales-project/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/Deymomanka/iowa-sales-project/subscription", icon: <AiFillEye/> },
      { name: "streamlit", url: "https://iowa-sales-project.streamlit.app/", icon: <SiStreamlit/> }
    ],
    image: bigqueryml,
    target: "_blank"
  },
  {
    id: "project-1",
    title: "Data Analysis",
    category: {   en: "Data Analysis & Web Scraping", jp: "データ分析 & スクレイピング" },
    description_i18n: {
      en: "Analysis of Demand Trends for Python-Related Technologies in Japan",
      jp: "Python関連技術の需要動向分析"
    },
    links: [
      { name: "repo", url: "https://github.com/Deymomanka/python-relate-analysis", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/Deymomanka/python-relate-analysis/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/Deymomanka/python-relate-analysis/subscription", icon: <AiFillEye/> }
    ],
    image: pythonrelateanalysis,
    target: "_blank"
  }
];

export default projectConfig;

