import { Config } from "./type";

export const resumeConfig: Config = {
  resumeTitle: "牟长睿的简历",
  base: {
    name: "牟长睿",
    eng: "ChangRui Mou",
    gender: "man",
    age: 22,
  },
  desc: "一名热爱前端开发的码农，主要技术栈为Vue + Typescript，熟悉Less预处理器的使用，擅长使用uniapp框架进行小程序开发；后端开发业余爱好者，对Golang语言略有了解。",
  connection: {
    github: "https://github.com/taoyanya",
    blog: "",
    email: "2020636899@qq.com",
  },
  educations: [
    {
      school: "四川轻化工大学",
      start: "2019",
      end: "2023",
      major: "软件工程",
      degree: "工学学士",
    },
  ],
  projects: [
    {
      name: "my-resume",
      desc: "生成自定义的线上简历，项目使用<strong>Vite + Vue + Typescript + Unocss</strong>，只需要定义配置文件，就可以生成DIY Resume",
      link: "",
    },
  ],
  experiences: [
    {
      name: "web前端实习生",
      start: "2022.6",
      end: "2022.12",
      company: "成都深云智能科技有限公司",
      content:
        "负责自研产品的开发与维护，公司开发技术栈：<strong>Vue + uniapp</strong>，开发平台：<strong>网页开发 + H5混入开发 + 小程序开发</strong>",
    },
  ],
  awards: [
    {
      name: "二等奖学金",
      time: "2020.10",
    },
    {
      name: "三等奖学金",
      time: "2021.10",
    },
    {
      name: "全国大学生心理情景剧剧本一等奖",
      time: "2021.04",
    },
  ],
};
