import {
  SiPython,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiReact,
  SiScipy,
  SiClaude,
  SiLooker,
  SiPytorch,
  SiStreamlit,
  SiGooglecolab,
  SiTableau,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiOpencv
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt, FaGithub, FaGitlab, FaRProject, FaDatabase, FaKaggle, FaFlask} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TerminalIcon from "@mui/icons-material/Terminal";
import CloudIcon from "@mui/icons-material/Cloud";

const ICON_SIZE = 40;

const skillsConfig = {
  programmingLanguageSkills: [
    { id: "skills-lang-python", className: "skill-icon", icon: <SiPython size={ICON_SIZE} />, text: "Python" },
    { id: "skills-lang-sql", className: "skill-icon", icon: <FaDatabase size={ICON_SIZE} />, text: "SQL" },
    { id: "skills-lang-js", className: "skill-icon", icon: <FaRProject size={ICON_SIZE} />, text: "R" },
  ],
  
  aiSkills: [
    { id: "skills-ai-chatgpt", className: "skill-icon", icon: <SiOpencv size={ICON_SIZE} />, text: "ChatGPT" },
    { id: "skills-ai-claude", className: "skill-icon", icon: <SiClaude size={ICON_SIZE} />, text: "Claude Code" },
    { id: "skills-ai-copilot", className: "skill-icon", icon: <FaGithub size={ICON_SIZE} />, text: "GitHub Copilot" },
  ],

  versionSkills: [
    { id: "skills-version-git", className: "skill-icon", icon: <FaGitAlt size={ICON_SIZE} />, text: "Git" },
    { id: "skills-version-github", className: "skill-icon", icon: <FaGithub size={ICON_SIZE} />, text: "GitHub" },
    { id: "skills-version-gitlab", className: "skill-icon", icon: <FaGitlab size={ICON_SIZE} />, text: "GitLab" },
  ],

  datapreprocessingSkills: [
    { id: "skills-data-pandas", className: "skill-icon", icon: <SiPandas size={ICON_SIZE} />, text: "Pandas" },
    { id: "skills-data-numpy", className: "skill-icon", icon: <SiNumpy size={ICON_SIZE} />, text: "NumPy" },
  ],

   bitoolsSkills: [
    { id: "skills-viz-tableau", className: "skill-icon", icon: <SiTableau size={ICON_SIZE} />, text: "Tableau" },
    { id: "skills-viz-looker", className: "skill-icon", icon: <SiLooker size={ICON_SIZE} />, text: "Looker Studio" },
  ],

  analysisSkills: [
    { id: "skills-analysis-sklearn", className: "skill-icon", icon: <SiScikitlearn size={ICON_SIZE} />, text: "Scikit-learn" },
    { id: "skills-analysis-scipy", className: "skill-icon", icon: <SiScipy size={ICON_SIZE} />, text: "SciPy" },
  ],

  machinelearningSkills: [
    { id: "skills-ml-sklearn", className: "skill-icon", icon: <SiScikitlearn size={ICON_SIZE} />, text: "Scikit-learn" },
    { id: "skills-ml-tensorflow", className: "skill-icon", icon: <SiTensorflow size={ICON_SIZE} />, text: "TensorFlow" },
    { id: "skills-ml-pytorch", className: "skill-icon", icon: <SiPytorch size={ICON_SIZE} />, text: "PyTorch" },
  ],

  frameworksSkills: [
    { id: "skills-fw-streamlit", className: "skill-icon", icon: <SiStreamlit size={ICON_SIZE} />, text: "Streamlit" },
    { id: "skills-fw-flask", className: "skill-icon", icon: <FaFlask size={ICON_SIZE} />, text: "Flask" },

  ],

  databasesSkills: [
    { id: "skills-db-postgres", className: "skill-icon", icon: <SiPostgresql size={ICON_SIZE} />, text: "PostgreSQL" },
    { id: "skills-db-mysql", className: "skill-icon", icon: <GrMysql size={ICON_SIZE} />, text: "MySQL" },
  ],

  devenvSkills: [
    { id: "skills-dev-gcloud", className: "skill-icon", icon: <VscVscode size={ICON_SIZE} />, text: "VSCode" },
    { id: "skills-dev-gcloud", className: "skill-icon", icon: <SiGooglecolab size={ICON_SIZE} />, text: "Google Colab" },
    { id: "skills-dev-jupyter", className: "skill-icon", icon: <SiJupyter size={ICON_SIZE} />, text: "Jupyter" },
    { id: "skills-dev-docker", className: "skill-icon", icon: <SiDocker size={ICON_SIZE} />, text: "Docker" },

  ],

  competitionsSkills: [
    { id: "skills-comp-kaggle", className: "skill-icon", icon: <FaKaggle size={ICON_SIZE} />, text: "Kaggle" },
  ],
};

export default skillsConfig;





