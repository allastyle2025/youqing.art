export interface Dancer {
  id: number;
  name: string;
  nameEn: string;
  age: string;
  location: {
    zh: string;
    en: string;
  };
  image: string;
  profession: {
    zh: string;
    en: string;
  };
  quote: {
    zh: string;
    en: string;
  };
}

const CDN_BASE_URL = 'https://cdn.djybrs.cn/uploads/youqing/dance-portrait/';

export const dancers: Dancer[] = [
  {
    id: 0,
    name: "Myra",
    nameEn: "Myra",
    age: "30+",
    location: { zh: "海外", en: "Overseas" },
    image: `${CDN_BASE_URL}dancer-portrait.0.myra.jpg`,
    profession: {
      zh: "Wing Dance Theatre 永·舞团艺术总监，「有情」素人共创舞作发起者、身体训练导师",
      en: "Artistic Director of Wing Dance Theatre, Initiator of You Qing"
    },
    quote: {
      zh: "作为素人舞作，「有情」不会、也不能呈现完美的肢体，以高超的视觉引得观者的耳目之愉。",
      en: "As an amateur dance work, 'You Qing' cannot and does not aim to present perfect body movements."
    }
  },
  {
    id: 1,
    name: "四点零先生",
    nameEn: "Mr. 4.0",
    age: "60+",
    location: { zh: "北京", en: "Beijing" },
    image: `${CDN_BASE_URL}dancer-portrait.1.sdl.jpg`,
    profession: {
      zh: "跨国企业咨询管理顾问，「有情」项目共创舞者",
      en: "Multinational Enterprise Consulting Advisor, You Qing Dancer"
    },
    quote: {
      zh: "「有情」这个项目，相信会给这个世界带去很多的安稳、平静与安宁。",
      en: "I believe the 'You Qing' project will bring much stability and peace to this world."
    }
  },
  {
    id: 2,
    name: "小雨儿",
    nameEn: "Little Rain",
    age: "30+",
    location: { zh: "郑州", en: "Zhengzhou" },
    image: `${CDN_BASE_URL}dancer-portrait.2.xy.jpg`,
    profession: {
      zh: "儿童教育戏剧老师，自由环保人士，「有情」项目共创舞者",
      en: "Children's Drama Teacher, Environmentalist, You Qing Dancer"
    },
    quote: {
      zh: "我就是个'有情人'呐！从小对万事万物有情，我是属于大自然的。",
      en: "I am a 'person with heart'! Since childhood, I have had affection for all things."
    }
  },
  {
    id: 3,
    name: "遇见柏拉图",
    nameEn: "Meeting Plato",
    age: "30+",
    location: { zh: "北京", en: "Beijing" },
    image: `${CDN_BASE_URL}dancer-portrait.3.yjblt.jpg`,
    profession: {
      zh: "曾任职自然环保公益组织，疗愈探索者，「有情」项目共创舞者",
      en: "Former Nature Conservation NGO, Healing Explorer, You Qing Dancer"
    },
    quote: {
      zh: "因为天地有情，生命便兀自有了道路，却不是踽踽独行。",
      en: "Because heaven and earth have heart, life naturally finds its path."
    }
  },
  {
    id: 4,
    name: "何一",
    nameEn: "He Yi",
    age: "30+",
    location: { zh: "成都", en: "Chengdu" },
    image: `${CDN_BASE_URL}dancer-portrait.4.hy.jpg`,
    profession: {
      zh: "环球旅行背包客，'书益小筑'主理人。「有情」项目共创舞者",
      en: "Global Travel Backpacker, Manager of 'Shuyi Xiaozhu', You Qing Dancer"
    },
    quote: {
      zh: "「有情」对素人的身体给予了非常大的信任空间，这种信任让我的身体在整个舞蹈中都能真实地流动。",
      en: "'You Qing' gives amateur bodies a great deal of trust space."
    }
  },
  {
    id: 5,
    name: "米鹿",
    nameEn: "Milo",
    age: "30+",
    location: { zh: "大理", en: "Dali" },
    image: `${CDN_BASE_URL}dancer-portrait.5.ml.jpg`,
    profession: {
      zh: "心理咨询师、身心探索者，全国旅居中，「有情」项目共创舞者",
      en: "Psychological Counselor, Body-Mind Explorer, You Qing Dancer"
    },
    quote: {
      zh: "当我们想支持地球母亲时，身体的舞蹈也许是一个超越各种分别、隔阂、没有太多门槛、通用有力的方式。",
      en: "When we want to support Mother Earth, bodily dance may be a universal and powerful way."
    }
  },
  {
    id: 6,
    name: "双木",
    nameEn: "Shuang Mu",
    age: "30+",
    location: { zh: "北京", en: "Beijing" },
    image: `${CDN_BASE_URL}dancer-portrait.6.sm.jpg`,
    profession: {
      zh: "汽车行业售后，正探索转型中，「有情」项目共创舞者",
      en: "Automotive Industry After-sales, Exploring Career Transition, You Qing Dancer"
    },
    quote: {
      zh: "在身体这块泥土里，只要用心地在呼吸中去耕耘、去扎根、去感受，就能打开空间。",
      en: "In the soil of the body, as long as you cultivate with heart in breathing, space can be opened."
    }
  },
  {
    id: 7,
    name: "张舒越",
    nameEn: "Zhang Shuyue",
    age: "50+",
    location: { zh: "成都", en: "Chengdu" },
    image: `${CDN_BASE_URL}dancer-portrait.7.zsy.jpg`,
    profession: {
      zh: "中华传统修身功法传播者、能量舞动疗愈师，「有情」项目共创舞者",
      en: "Chinese Traditional Self-cultivation Promoter, Energy Dance Healing Therapist, You Qing Dancer"
    },
    quote: {
      zh: "作为素人舞者，我的舞蹈没有剧本。我的身体即兴，是与自己的一场即兴对话。",
      en: "As an amateur dancer, my dance has no script. My body improvisation is an improvised dialogue with myself."
    }
  },
  {
    id: 8,
    name: "陈亚彤 陈然",
    nameEn: "Chen Yatong & Chen Ran",
    age: "40+",
    location: { zh: "郑州", en: "Zhengzhou" },
    image: `${CDN_BASE_URL}dancer-portrait.8.cytcr.jpg`,
    profession: {
      zh: "生活整理收纳师，前海归公益人，三岁女孩的妈妈。「有情」项目共创舞者",
      en: "Life Organization Consultant, Former Returnee Philanthropist, You Qing Dancer"
    },
    quote: {
      zh: "一直想做一个环保实践者，用自己的行动去影响周围的人。",
      en: "I have always wanted to be an environmental practitioner, influencing people around me."
    }
  },
  {
    id: 9,
    name: "宣屹 王伊宸",
    nameEn: "Xuan Yi & Wang Yichen",
    age: "40+",
    location: { zh: "成都", en: "Chengdu" },
    image: `${CDN_BASE_URL}dancer-portrait.9.xywyc.jpg`,
    profession: {
      zh: "身心健康品牌主理人、前科技公司高管，「有情」项目共创舞者",
      en: "Body-Mind Health Brand Manager, Former Tech Executive, You Qing Dancer"
    },
    quote: {
      zh: "一直希望为生态，为这个供养我们的地球做点什么，感恩遇见「有情」。",
      en: "I have always hoped to do something for ecology, for this Earth that nourishes us."
    }
  },
  {
    id: 10,
    name: "龚翊",
    nameEn: "Gong Yi",
    age: "30+",
    location: { zh: "北京", en: "Beijing" },
    image: `${CDN_BASE_URL}dancer-portrait.10.gy.jpg`,
    profession: {
      zh: "大自然的孩子，可持续生活探索者，「有情」项目共创舞者",
      en: "Child of Nature, Sustainable Living Explorer, You Qing Dancer"
    },
    quote: {
      zh: "曾觉得自己热爱自然，直到某一天发觉，我爱的是大自然给予我的馈赠。",
      en: "I once thought I loved nature, until one day I realized that what I loved was the gifts nature gave me."
    }
  },
  {
    id: 11,
    name: "朵云",
    nameEn: "Duo Yun",
    age: "40+",
    location: { zh: "贵阳", en: "Guiyang" },
    image: `${CDN_BASE_URL}dancer-portrait.11.dy.jpg`,
    profession: {
      zh: "体制内工作，心理学爱好者，「有情」项目共创舞者",
      en: "Public Sector Worker, Psychology Enthusiast, You Qing Dancer"
    },
    quote: {
      zh: "被'有情'的发心和初衷吸引，对与身体动作有关的活动感兴趣。",
      en: "Attracted by the intention of 'You Qing', interested in body movement activities."
    }
  },
  {
    id: 12,
    name: "乐毅",
    nameEn: "Le Yi",
    age: "50+",
    location: { zh: "上海", en: "Shanghai" },
    image: `${CDN_BASE_URL}dancer-portrait.12.ly.jpg`,
    profession: {
      zh: "崇生生活艺术家园主理人，朴门农法实践者。「有情」项目共创舞者兼导师",
      en: "Manager of Chongsheng Life Art Home, Permaculture Practitioner, You Qing Dancer and Mentor"
    },
    quote: {
      zh: "当初建立艺术家园，有一个发心：凡是能够利益有情众生的事情，我就去做。",
      en: "When establishing the art home, there was an intention: whatever can benefit sentient beings, I will do it."
    }
  },
  {
    id: 13,
    name: "文红",
    nameEn: "Wen Hong",
    age: "50+",
    location: { zh: "北京", en: "Beijing" },
    image: `${CDN_BASE_URL}dancer-portrait.13.wh.jpg`,
    profession: {
      zh: "退休银行职员，「有情」项目共创舞者",
      en: "Retired Bank Employee, You Qing Dancer"
    },
    quote: {
      zh: "我热爱这个星球，它一直在那里等着，等每一个有情人。",
      en: "I love this planet; it has always been there waiting, waiting for every person with heart."
    }
  },
  {
    id: 14,
    name: "阿凡",
    nameEn: "A Fan",
    age: "30+",
    location: { zh: "广州", en: "Guangzhou" },
    image: `${CDN_BASE_URL}dancer-portrait.14.af.jpg`,
    profession: {
      zh: "新闻学毕业，公益组织资源发展主管，「有情」项目共创舞者",
      en: "Journalism Graduate, NGO Resource Development Manager, You Qing Dancer"
    },
    quote: {
      zh: "自然如此丰饶，而我亦是如此。我想守护这片丰饶。",
      en: "Nature is so abundant, and so am I. I want to protect this abundance."
    }
  },
  {
    id: 15,
    name: "逸琳",
    nameEn: "Yi Lin",
    age: "30+",
    location: { zh: "上海", en: "Shanghai" },
    image: `${CDN_BASE_URL}dancer-portrait.15.yl.jpg`,
    profession: {
      zh: "可持续发展项目教育工作者，「有情」项目共创舞者",
      en: "Sustainable Development Project Educator, You Qing Dancer"
    },
    quote: {
      zh: "通过体验，通过觉察'情'，回到我们本质的存在。那是有情众生、万物相通的根本。",
      en: "Through experience, through awareness of 'heart', return to our essential existence."
    }
  },
  {
    id: 16,
    name: "婉晴",
    nameEn: "Wan Qing",
    age: "30+",
    location: { zh: "北京", en: "Beijing" },
    image: `${CDN_BASE_URL}dancer-portrait.16.wq.jpg`,
    profession: {
      zh: "心理咨询师、瑜伽修习者，「有情」项目共创舞者",
      en: "Psychological Counselor, Yoga Practitioner, You Qing Dancer"
    },
    quote: {
      zh: "情，是天地万物得以形成、交互、循环往复、此起彼伏的存在基础。",
      en: "Heart is the foundation of existence for all things in heaven and earth."
    }
  },
  {
    id: 17,
    name: "绿娜",
    nameEn: "Lv Na",
    age: "30+",
    location: { zh: "绍兴", en: "Shaoxing" },
    image: `${CDN_BASE_URL}dancer-portrait.17.ln.jpg`,
    profession: {
      zh: "外贸行业从业者，民众戏剧实践者，「有情」项目共创舞者",
      en: "Foreign Trade Industry Practitioner, Community Theatre Practitioner, You Qing Dancer"
    },
    quote: {
      zh: "深感现代社会大部分人与人之间的连接困难，对许多东西的不珍视。",
      en: "I deeply feel the difficulty of connection between most people in modern society."
    }
  }
];

// 乐师数据
export interface Musician {
  id: number;
  name: string;
  nameEn: string;
  age: string;
  location: {
    zh: string;
    en: string;
  };
  image: string;
  profession: {
    zh: string;
    en: string;
  };
  quote: {
    zh: string;
    en: string;
  };
}

export const musicians: Musician[] = [
  {
    id: 18,
    name: "梁小燕",
    nameEn: "Liang Xiaoyan",
    age: "40+",
    location: { zh: "大理", en: "Dali" },
    image: `${CDN_BASE_URL}dancer-portrait.18.lxy.jpg`,
    profession: {
      zh: "颂钵音疗师，「有情」项目共创乐师",
      en: "Singing Bowl Sound Healing Therapist, You Qing Musician"
    },
    quote: {
      zh: "常常一个人到大自然里，聆听风的声音，感受每一朵花，每一棵树在给我传递怎样的信息。",
      en: "Often alone in nature, listening to the sound of the wind."
    }
  },
  {
    id: 19,
    name: "杨丽平",
    nameEn: "Yang Liping",
    age: "40+",
    location: { zh: "成都", en: "Chengdu" },
    image: `${CDN_BASE_URL}dancer-portrait.19.ylp.jpg`,
    profession: {
      zh: "「有情」项目共创乐师",
      en: "You Qing Project Co-creating Musician"
    },
    quote: {
      zh: "用舞蹈表达内心",
      en: "Expressing the heart through dance"
    }
  },
  {
    id: 20,
    name: "陶古月",
    nameEn: "Tao Guyue",
    age: "30+",
    location: { zh: "成都", en: "Chengdu" },
    image: `${CDN_BASE_URL}dancer-portrait.20.tgy.jpg`,
    profession: {
      zh: "「有情」项目共创乐师",
      en: "You Qing Project Co-creating Musician"
    },
    quote: {
      zh: "身体的智慧无处不在",
      en: "The wisdom of the body is everywhere"
    }
  }
];
