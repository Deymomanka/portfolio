import React from "react";
import { FaUniversity } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { TbReportAnalytics } from "react-icons/tb";
import { FaComputer } from "react-icons/fa6";
import { BiRocket } from "react-icons/bi";

const homeConfig = {
  greeting_i18n: {
    en: (
      <h1 className="heading">
        Hi! I'm <strong className="main-name"> Yuliya</strong>
      </h1>
    ),
    jp: (
      <h1 className="heading">
        こんにちは！<strong className="main-name"> ユリアのポートフォリオ</strong> へようこそ！
      </h1>
    ),
  },

  titles_i18n: {
    en: [
      "Python Engineer",
      "Aspiring Data Scientist",
      "Data Enthusiast",
      "Data Engineer",
      "ML Prediction Model Builder",
      "Belarusian",
    ],
    jp: [
      "Python エンジニア",
      "データサイエンティストの卵",
      "データ好き",
      "データエンジニア",
      "機械学習の予測モデル開発者",
      "ベラルーシ出身",
    ],
  },

  about_i18n: {
    en: {
      start:
        "With a strong passion for the world of data, I am pursuing a career as a Data Scientist while working as a Data Analyst at a Japanese IT company.",
      exit:
        "I am engaged in data analysis projects leveraging the Modern Data Stack, building analytical infrastructures, and developing tools using Python.",
    },
    jp: {
      start:
        "データの世界に情熱を注ぎ、データサイエンティストを目指しながら、日本のIT企業でデータアナリストとして活動しています。",
      exit:
        "Modern Data Stackを活用したデータ分析プロジェクトや分析基盤の構築、さらにPythonを用いたツール開発に取り組んでいます。",
    },
  },


  workTimeline: [
    {
      id: "work-4",
      title: "Data Analyst / Data Engineer",
      title_i18n: { en: "Data Analyst / Data Engineer", jp: "データアナリスト／データエンジニア" },
      company: "Japan, Tokyo",
      description_i18n: {
        en: "Working on portfolio projects using Python, SQL, BigQuery, and Modern Data Stack (dbt, Looker Studio). Focused on building pipelines, ML models, and dashboards.",
        jp: "Python、SQL、BigQuery、Modern Data Stack（dbt、Looker Studio）を用いたポートフォリオ開発に取り組み、データ分析基盤構築、機械学習モデル、ダッシュボードを構築。",
      },
      date: "2025-Present",
      icon: <BiRocket />,
      tags: ["python", "sql", "google cloud", "dbt", "tableau", "looker", "docker"],
    },
    {
      id: "work-3",
      title: "Kaggle & SIGNATE Competitions",
      title_i18n: { en: "Kaggle & SIGNATE Competitions", jp: "Kaggle & SIGNATE コンペティション" },
      company: "Japan, Osaka/Shiga",
      description_i18n: {
        en: "Developed predictive models with Python for various competitions, earning a bronze medals. Focused on improving speed and accuracy of ML models.",
        jp: "Pythonで予測モデルを構築し、複数のコンペに参加して銅メダルを獲得。高速かつ精度の高いモデル構築に注力。",
      },
      date: "2023-2024",
      icon: <FaComputer />,
      tags: ["ml", "automl", "python", "statistics", "anaconda", "pandas", "numpy"],
    },
    {
      id: "work-2",
      title: "Social Enterprise",
      title_i18n: { en: "Social Enterprise", jp: "ソーシャルエンタープライズ" },
      company: "Japan, Osaka/Shiga",
      description_i18n: {
        en: "Planned and led a social enterprise project to support Ukraine. Conducted customer surveys, performed data preprocessing and visualization in Python, and applied findings to product planning and sales strategies. Managed OEM production and sales operations, promoting data-driven decision making.",
        jp: "ウクライナ支援を目的としたソーシャルエンタープライズを企画・主導。顧客アンケート調査を実施し、Pythonでデータ前処理と可視化を行い、その結果を商品企画や販売施策に活用。OEM発注や販売管理まで担当し、データに基づく意思決定を推進。",
      },
      date: "2022-2023",
      icon: <TbReportAnalytics />,
      tags: ["teamwork", "problem-solving", "adaptability to change", "analytical skills", "self-management skills", "presentation skills"],
    },
    {
      id: "work-1",
      title: "MEXT Scholarship Student",
      title_i18n: { en: "MEXT Scholarship Student", jp: "文部科学省国費外国人留学生" },
      company: "Japan, Osaka/Shiga",
      description_i18n: {
        en: "Completed one year at a Japanese language school, two years at a vocational school of international business, and transferred into the third year of the Faculty of Economics (Finance) at a national university.",
        jp: "１年間日本語学校、２年間国際ビジネス専門学校で学び、国立大学経済学部ファイナンス学科に３年次編入。",
      },
      date: "2020-2025",
      icon: <GiCommercialAirplane />,
      tags: ["japanese skills", "international communication", "self-management skills", "time management"],
    },
    {
      id: "work-0",
      title: "Belarusian State Economic University",
      title_i18n: { en: "Belarusian State Economic University", jp: "ベラルーシ国立経済大学" },
      company: "Belarus, Minsk",
      description_i18n: {
        en: "Graduated with a bachelor's degree in Hospitality and Restaurant Management.",
        jp: "ホテル&レストラン経営学科で学士号を取得。",
      },
      date: "2013-2017",
      icon: <FaUniversity />,
      tags: ["hotel management", "reporting", "writing", "presentation skills"],
    },
  ],
};

export default homeConfig;
