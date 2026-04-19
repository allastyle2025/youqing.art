export interface TimelineEvent {
  id: number;
  month: string;
  day: string;
  year: string;
  title: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  location: {
    zh: string;
    en: string;
  } | string;
  date: string;
  link?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    month: "04",
    day: "24",
    year: "2024",
    title: {
      zh: "「有情」发布第一张海报",
      en: "You Qing Released First Poster"
    },
    description: {
      zh: "全球范围内招募舞者，共同为地球跳一支舞。",
      en: "Recruiting dancers globally to dance for the Earth together."
    },
    location: "",
    date: "2024.04.24",
    link: "https://mp.weixin.qq.com/s/yPBzaBAp0a-f7pgmeD9RkQ"
  },
  {
    id: 2,
    month: "05",
    day: "24",
    year: "2024",
    title: {
      zh: "发布「寻找有情人」推文",
      en: "Launched 'Seeking People with Heart' Campaign"
    },
    description: {
      zh: "正式发布「寻找有情人」项目推文，天南海北各行各业约一百名素人报名参与项目。",
      en: "Officially launched the 'Seeking People with Heart' project. About 100 amateurs from all walks of life applied to participate."
    },
    location: "",
    date: "2024.05.24",
    link: "https://mp.weixin.qq.com/s/q5_JAVrIjfBNRGg5btjP0Q"
  },
  {
    id: 3,
    month: "07-09",
    day: "",
    year: "2024",
    title: {
      zh: "线上共创与身体训练",
      en: "Online Co-creation and Body Training"
    },
    description: {
      zh: "十六位伙伴从全国报名者中脱颖而出，成为「有情」项目2024年度共创舞者；同步开启线上共创与身体训练。",
      en: "Sixteen participants stood out from national applicants to become 2024 co-creating dancers. Online co-creation and body training began simultaneously."
    },
    location: {
      zh: "线上",
      en: "Online"
    },
    date: "2024.07-09",
    link: "https://mp.weixin.qq.com/s/x8eVpRzoUaz4cY6XBlRffA"
  },
  {
    id: 4,
    month: "09",
    day: "28",
    year: "2024",
    title: {
      zh: "崇明岛线下训练启动",
      en: "Chongming Island Offline Training Launched"
    },
    description: {
      zh: "十六位共创舞者集聚上海崇明岛，正式开启线下训练，初步形成作品。",
      en: "Sixteen co-creating dancers gathered at Chongming Island, Shanghai to officially begin offline training and preliminary work formation."
    },
    location: {
      zh: "上海 · 崇明岛",
      en: "Shanghai · Chongming Island"
    },
    date: "2024.09.28",
    link: "https://mp.weixin.qq.com/s/g3CAti-4XESTqJNjUeG83Q"
  },
  {
    id: 5,
    month: "10",
    day: "06",
    year: "2024",
    title: {
      zh: "东海堡镇码头公开排演",
      en: "Public Rehearsal at Donghai Bao Town Wharf"
    },
    description: {
      zh: "「有情」素人共创舞作在中国东海堡镇码头公开排演，雏形作品首度亮相。",
      en: "You Qing amateur co-creation dance work had a public rehearsal at Donghai Bao Town Wharf, with the preliminary work debuting for the first time."
    },
    location: {
      zh: "中国 · 东海堡镇码头",
      en: "China · Donghai Bao Town Wharf"
    },
    date: "2024.10.06",
    link: "https://mp.weixin.qq.com/s/AfxMUOiT8D-JCigDBZS0fQ"
  },
  {
    id: 6,
    month: "10",
    day: "26",
    year: "2024",
    title: {
      zh: "CCC全国社群大会特别演出",
      en: "Special Performance at CCC National Community Conference"
    },
    description: {
      zh: "作为开幕式特别演出亮相CCC全国社群大会，联手成都在地舞者，共同谱写一曲关怀地球、关爱众生的生命礼赞。",
      en: "Appeared as the opening special performance at CCC National Community Conference, collaborating with local Chengdu dancers to compose a hymn of life caring for the Earth and all beings."
    },
    location: {
      zh: "CCC 全国社群大会",
      en: "CCC National Community Conference"
    },
    date: "2024.10.26",
    link: "https://mp.weixin.qq.com/s/iiSXm13SURaDznRt_jW4WQ"
  },
  {
    id: 7,
    month: "07",
    day: "31",
    year: "2025",
    title: {
      zh: "发布2025年度舞者招募",
      en: "2025 Dancer Recruitment Announced"
    },
    description: {
      zh: "「寻找有情人」正式发布2025年度舞者招募推文。",
      en: "'Seeking People with Heart' officially announced 2025 dancer recruitment."
    },
    location: "",
    date: "2025.07.31",
    link: "https://mp.weixin.qq.com/s/G5mDleKx249vJWJimV32bw"
  },
  {
    id: 8,
    month: "09",
    day: "13",
    year: "2025",
    title: {
      zh: "2025年度启动仪式",
      en: "2025 Annual Launch Ceremony"
    },
    description: {
      zh: "「有情」素人共创生态艺术项目2025年度启动仪式在成都举行，成都线下共创社区宣布成立。",
      en: "You Qing Amateur Co-creation Eco-Art Project 2025 launch ceremony held in Chengdu, announcing the establishment of Chengdu offline co-creation community."
    },
    location: {
      zh: "成都",
      en: "Chengdu"
    },
    date: "2025.09.13",
    link: "https://mp.weixin.qq.com/s/4vmlN_3cE3mT6hAVq8F5vA"
  },
  {
    id: 9,
    month: "09",
    day: "19",
    year: "2025",
    title: {
      zh: "发布「有情·崇生社区开放日」推文",
      en: "Released 'You Qing · Chongsheng Community Open Day' Post"
    },
    description: {
      zh: "号召天下有情人共同探索什么是建基于爱的社区应有的模样。",
      en: "Calling all people with heart to explore what a love-based community should look like."
    },
    location: "",
    date: "2025.09.19",
    link: "https://mp.weixin.qq.com/s/F8IWOhw8SOAvvY6MH2ZUQA"
  },
  {
    id: 10,
    month: "10",
    day: "07",
    year: "2025",
    title: {
      zh: "有情·崇生社区开放日",
      en: "You Qing · Chongsheng Community Open Day"
    },
    description: {
      zh: "「有情·崇生社区开放日」在上海崇明岛顺利举行；2025年度作品《有情·万物生》于当日傍晚首演亮相。",
      en: "You Qing · Chongsheng Community Open Day successfully held at Chongming Island, Shanghai; 2025 work 'You Qing: All Things Grow' premiered that evening."
    },
    location: {
      zh: "上海 · 崇明岛",
      en: "Shanghai · Chongming Island"
    },
    date: "2025.10.07",
    link: "https://mp.weixin.qq.com/s/Vbu6ImXSZjUwwtkIO9SguQ"
  },
  {
    id: 11,
    month: "10",
    day: "17",
    year: "2025",
    title: {
      zh: "进驻蛇口戏剧节并在地招募",
      en: "Entered Shekou Theatre Festival with Local Recruitment"
    },
    description: {
      zh: "「有情」官宣进驻2025蛇口戏剧节，发布在地招募令，携手深圳伙伴共同为地球跳一支舞。",
      en: "You Qing officially announced participation in 2025 Shekou Theatre Festival, releasing local recruitment to dance for the Earth with Shenzhen partners."
    },
    location: {
      zh: "深圳",
      en: "Shenzhen"
    },
    date: "2025.10.17",
    link: "https://mp.weixin.qq.com/s/EYsLHgmFI56FyhWPZ3M2bA"
  },
  {
    id: 12,
    month: "11",
    day: "08",
    year: "2025",
    title: {
      zh: "《有情·万物生》蛇口戏剧节首演",
      en: "You Qing: All Things Grow Premiere at Shekou Theatre Festival"
    },
    description: {
      zh: "2025年度素人共创舞作《有情·万物生》亮相蛇口戏剧节「生活有戏」板块，现场约300名观众掌声连连。",
      en: "2025 amateur co-creation dance work 'You Qing: All Things Grow' appeared at Shekou Theatre Festival's 'Life is Theatre' section, with about 300 audience members applauding."
    },
    location: {
      zh: "深圳 · 蛇口戏剧节",
      en: "Shenzhen · Shekou Theatre Festival"
    },
    date: "2025.11.08",
    link: "https://mp.weixin.qq.com/s/AAvTNYfpdAjrsupDRIfh-g"
  },
  {
    id: 13,
    month: "",
    day: "",
    year: "∞",
    title: {
      zh: "2026 · 未完待续",
      en: "2026 · To Be Continued"
    },
    description: {
      zh: "丙午马年，我们继续'跨越山海，利乐有情'...",
      en: "In the Year of the Horse, we continue 'Across mountains and seas, benefiting all sentient beings'..."
    },
    location: "",
    date: "",
    link: ""
  }
];
