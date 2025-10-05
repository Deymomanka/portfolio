import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { SiMedium } from "react-icons/si";
import { PiArticleNyTimesLight } from "react-icons/pi";
import fastapiSklearn from "../images/fastapi_sklearn.png";
import dataenlogo from "../images/dataenlogo.png";

const blogConfig = [
  // {
  //   id: "blog-8",
  //   title: "How to Solve Scheduling Problems in Python",
  //   category: { en: "Operations Research", jp: "オペレーションズリサーチ" },
  //   description_i18n: {
  //     en: "Use linear programming to minimize the gap between required and scheduled resources.",
  //     jp: "リソースの要求とスケジュールのギャップを最小化するために線形計画法を使用します。"
  //   },
  //   links: [{ name: "article", url: "https://towardsdatascience.com/how-to-solve-scheduling-problems-in-python-36a9af8de451", icon: <SiMedium/> }],
  //   image: "https://miro.medium.com/max/700/1*VKIGzmJrYBzcPlB6USx8OA.jpeg",
  //   target: "_blank",
  //   date: "2020-07-01"
  // },
  // {
  //   id: "blog-7",
  //   title: "Adaptive Parameters Methods for Machine Learning",
  //   category: { en: "Machine Learning", jp: "機械学習" },
  //   description_i18n: {
  //     en: "Explore practical ways to adapt model parameters over time.",
  //     jp: "時間の経過とともにモデルパラメータを適応させる実用的な方法を探求します。"
  //   },
  //   links: [{ name: "article", url: "https://towardsdatascience.com/adaptive-parameters-methods-for-machine-learning-6f7101a9a71", icon: <SiMedium/> }],
  //   image: "https://miro.medium.com/max/700/1*DeZYSLcMdF58BeqemGhUhg.jpeg",
  //   target: "_blank",
  //   date: "2020-05-15"
  // },
  // {
  //   id: "blog-6",
  //   title: "Evolutionary Feature Selection for Machine Learning",
  //   category: { en: "Machine Learning", jp: "機械学習" },
  //   description_i18n: {
  //     en: "Feature selection for ML algorithms using evolutionary methods.",
  //     jp: "進化的手法を用いた機械学習アルゴリズムの特徴選択。"
  //   },
  //   links: [{ name: "article", url: "https://towardsdatascience.com/evolutionary-feature-selection-for-machine-learning-7f61af2a8c12", icon: <SiMedium/> }],
  //   image: "https://miro.medium.com/max/1400/1*hgFe2YFnwzt_K2TfE7aSrQ.jpeg",
  //   target: "_blank",
  //   date: "2020-03-10"
  // },
  // {
  //   id: "blog-5",
  //   title: "Real-time anomaly detection with Apache Kafka and Python",
  //   category: { en: "Data Systems", jp: "データシステム" },
  //   description_i18n: {
  //     en: "Detect anomalies on Kafka streams with Python.",
  //     jp: "PythonでKafkaストリームの異常を検出。"
  //   },
  //   links: [
  //     { name: "article", url: "https://towardsdatascience.com/real-time-anomaly-detection-with-apache-kafka-and-python-3a40281c01c9", icon: <SiMedium/> },
  //     { name: "repo", url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection", icon: <AiFillGithub/> }
  //   ],
  //   image: "https://miro.medium.com/max/1400/1*Xem1rbG0Fa8DAhtez7mvsA.jpeg",
  //   target: "_blank",
  //   date: "2019-12-05"
  // },
  // {
  //   id: "blog-4",
  //   title: "Serve a machine learning model using Sklearn, FastAPI, and Docker",
  //   category: { en: "MLOps", jp: "MLOps" },
  //   description_i18n: {
  //     en: "Containerize and serve scikit‑learn models with FastAPI and Docker.",
  //     jp: "FastAPIとDockerでscikit‑learnモデルをコンテナ化してサービス提供。"
  //   },
  //   links: [
  //     { name: "article", url: "https://medium.com/analytics-vidhya/serve-a-machine-learning-model-using-sklearn-fastapi-and-docker-85aabf96729b", icon: <SiMedium/> },
  //     { name: "repo", url: "https://github.com/rodrigo-arenas/fast-ml-deploy", icon: <AiFillGithub/> }
  //   ],
  //   image: fastapiSklearn,
  //   target: "_blank",
  //   date: "2019-10-22"
  // },
  // {
  //   id: "blog-3",
  //   title: "Are You Still Using Grid Search for Hyperparameters Optimization?",
  //   category: { en: "Machine Learning", jp: "機械学習" },
  //   description_i18n: {
  //     en: "Smarter hyperparameter search beyond grid search.",
  //     jp: "グリッドサーチを超えたよりスマートなハイパーパラメータ探索。"
  //   },
  //   links: [{ name: "article", url: "https://towardsdatascience.com/hyperparameters-tuning-from-Grid2-search-to-optimization-a09853e4e9b8", icon: <SiMedium/> }],
  //   image: "https://miro.medium.com/max/1400/0*ZYC4nQw8g2dv7GCp",
  //   target: "_blank",
  //   date: "2019-08-30"
  // },
  {
    id: "blog-2",
    title: "The third article is coming soon",
    category: { en: "No category yet", jp: "No category yet" },
    description_i18n: {
      en: "Coming soon",
      jp: "近日公開"
    },
    links: [{ name: "article", url: "", icon: <PiArticleNyTimesLight /> }],
    image: dataenlogo,
    target: "_blank",
    date: "2025-10-01"
  },
  {
    id: "blog-1",
    title: "The second article is coming soon",
    category: { en: "No category yet", jp: "No category yet" },
    description_i18n: {
      en: "Coming soon",
      jp: "近日公開"
    },
    links: [
      { name: "article", url: "", icon: <PiArticleNyTimesLight /> },
      { name: "repo", url: "", icon: <AiFillGithub/> }
    ],
    image: dataenlogo,
    target: "_blank",
    date: "2025-10-01"
  },
  {
    id: "blog-0",
    title: "The first article is coming soon",
    category: { en: "No category yet", jp: "No category yet" },
    description_i18n: {
      en: "Coming soon",
      jp: "近日公開"
    },
    links: [{ name: "article", url: "", icon: <PiArticleNyTimesLight />
 }],
    image: dataenlogo,
    target: "_blank",
    date: "2025-10-01"
  }
];

export default blogConfig;

