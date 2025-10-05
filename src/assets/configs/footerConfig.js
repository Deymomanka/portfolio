import {AiFillGithub} from "react-icons/ai";
import { MdArticle } from "react-icons/md";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/Deymomanka",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        // {
        //     id: "footer-1",
        //     url: "https://linkedin.com/",
        //     className: "social-icon",
        //     target: "_blank",
        //     icon: <FaLinkedinIn size={50}/>
        // },
        {
            id: "footer-2",
            url: "https://qiita.com/deyma",
            className: "social-icon",
            target: "_blank",
            icon: <MdArticle size={50}/>
        }
    ]
}

export default footerConfig
