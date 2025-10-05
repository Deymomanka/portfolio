import React from "react";
import { AiFillCode, AiFillHome, AiOutlineGithub } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      title_i18n: { en: "Home", jp: "ホーム" },
      path: "/",
      icon: <AiFillHome size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Projects",
      title_i18n: { en: "Projects", jp: "プロジェクト" },
      path: "/projects",
      icon: <AiOutlineGithub size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-2",
      title: "Blogs",
      title_i18n: { en: "Blogs", jp: "ブログ" },
      path: "/blogs",
      icon: <BsMedium size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Skills",
      title_i18n: { en: "Skills", jp: "スキル" },
      path: "/skills",
      icon: <AiFillCode size={35} />,
      className: "nav-text",
    },
      {
      id: "menu-4",
      title: "Contact",
      title_i18n: { en: "Contact", jp: "連絡" },
      path: "/contact",
      icon: <AiFillCode size={35} />,
      className: "nav-text",
    },
  ],
};

export default menuConfig;
