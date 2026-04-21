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
      zh: "作为素人舞作，「有情」不会、也不能呈现完美的肢体，以高超的视觉引得观者的耳目之愉。我们希望的，只是一个触动，一个探寻，一个可能的思考：如果这个星球正处在多重意义上的危急关头，身如微尘的我们，能够以怎样的行动，赋予它新的生机？",
      en: "As an amateur dance work, \"You Qing\" cannot and does not aim to present perfect body movements to please the audience's eyes and ears with superb visuals. What we hope for is just a touch, an exploration, a possible thought: if this planet is at a critical juncture in multiple senses, what actions can we, as tiny as dust, take to give it new vitality?"
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
      zh: "「有情」这个项目，相信会给这个世界，给这个充满争斗和无奈的地方，带去很多的安稳、平静与安宁。我本人有幸参与到项目里，就是最大的受益者。希望我在这个项目中感受到的平静与平和，也能够分享出去，给予整个社会。",
      en: "I believe the \"You Qing\" project will bring much stability, peace, and tranquility to this world, to this place full of strife and helplessness. I am fortunate to participate in this project and am its biggest beneficiary. I hope the peace and serenity I feel in this project can also be shared with the entire society."
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
      zh: "我就是个'有情人'呐！从小对万事万物有情，我是属于大自然的。每天都会看天空，喜欢每一棵树，收养过很多被遗弃的小动物。简简单单，内心自洽，我感觉我自己就是这个作品的一部分。生活中很多简单的东西，好多人视而不见，但如果有一双善于发现美的眼睛，其实每一天都很美好。",
      en: "I am a 'person with heart'! Since childhood, I have had affection for all things; I belong to nature. I look at the sky every day, love every tree, and have adopted many abandoned small animals. Simple and at peace with myself, I feel I am part of this work. Many simple things in life are overlooked by many, but if you have eyes that can discover beauty, every day is actually beautiful."
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
      zh: "因为天地有情，生命便兀自有了道路，却不是踽踽独行，乃是幸有同道，真心相现。故得无忧，以此真心，无有恐怖。当一个人真正踏进生命的场域，他的移动就不再被局限在世界的洪流中。那股生机，系于心间，无边无际。",
      en: "Because heaven and earth have heart, life naturally finds its path, not walking alone, but fortunately having like-minded companions with true hearts revealed. Thus, there is no worry, with this true heart, there is no fear. When a person truly steps into the field of life, their movement is no longer confined to the torrents of the world. That vitality resides in the heart, boundless and infinite."
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
      en: "Global Travel Backpacker, Manager of \"Shuyi Xiaozhu\", You Qing Dancer"
    },
    quote: {
      zh: "「有情」对素人的身体给予了非常大的信任空间，这种信任让我的身体在整个舞蹈中都能真实地流动。对于我是一种感动，一种唤醒。真的很感谢这次共创的机会。'有情'就是一种万物的底色，希望'有情'可以继续跳下去。有情如水，万物归一。",
      en: "\"You Qing\" gives amateur bodies a great deal of trust space, and this trust allows my body to flow authentically throughout the dance. For me, it is a touch, an awakening. I am truly grateful for this co-creation opportunity. \"You Qing\" is the underlying color of all things; I hope \"You Qing\" can continue to dance. You Qing is like water, all things return to one."
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
      zh: "当我们想支持地球母亲时，身体的舞蹈也许是一个超越各种分别、隔阂、没有太多门槛、通用有力的方式。感受生命带给我们的一切，感受我们与自然的连接，在经历了种种苦难的冲刷之后，还能够嘴角微微含笑，双目深深含情。",
      en: "When we want to support Mother Earth, bodily dance may be a way that transcends various distinctions and barriers, with few thresholds, universal and powerful. Feel everything life brings us, feel our connection with nature, and after experiencing the冲刷 of various hardships, still be able to smile slightly at the corners of the mouth, with deep affection in the eyes."
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
      zh: "在身体这块泥土里，只要用心地在呼吸中去耕耘、去扎根、去感受，就能打开空间。花朵一点点打开，进到花心里面，就能拥抱更细微的东西。有些东西可以通过身体的方式被记忆或唤醒。当那个真实的分量足够厚重，芽儿就会穿过黑暗，破土而出。",
      en: "In the soil of the body, as long as you cultivate, root, and feel with heart in breathing, space can be opened. Flowers open bit by bit, entering the heart of the flower, you can embrace more subtle things. Some things can be remembered or awakened through the body. When the weight of that truth is heavy enough, the sprout will break through the darkness and emerge from the soil."
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
      zh: "作为素人舞者，我的舞蹈没有剧本。我的身体即兴，是与自己的一场即兴对话：用脊椎写一句诗，用手臂问一个问题，用旋转来一次叹息。我不在乎它是否标准，我只在乎它是否真实。当头脑的评判平息，身体的智慧便浮出水面，那是最原始、也最动人的故事。",
      en: "As an amateur dancer, my dance has no script. My body improvisation is an improvised dialogue with myself: writing a poem with the spine, asking a question with the arm, sighing with a spin. I don't care if it's standard; I only care if it's authentic. When the judgment of the mind subsides, the wisdom of the body surfaces—that is the most primitive and touching story."
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
      zh: "一直想做一个环保实践者，用自己的行动去影响周围的人，但这么简单的事，多年来都很难做到。加入「有情」，是想探索一个可能：当我们以绝对的诚心投入，用身体的质朴去表达的时候，也许我们这一群伙伴，能够找到一种方式、一种语言、一种力量，去影响这个世界，让它变得更美好。",
      en: "I have always wanted to be an environmental practitioner, influencing people around me with my actions, but such a simple thing has been difficult to achieve for many years. Joining \"You Qing\" is to explore a possibility: when we invest with absolute sincerity and express with the simplicity of the body, perhaps our group of partners can find a way, a language, a power to influence this world and make it better."
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
      zh: "一直希望为生态，为这个供养我们的地球做点什么，感恩遇见「有情」，让我们有机会以身体为语言，用舞蹈唤醒感知。于即兴的共振里，探索内在宇宙的浩瀚，重建与万物相连的完整。",
      en: "I have always hoped to do something for ecology, for this Earth that nourishes us. Grateful to meet \"You Qing\", which gives us the opportunity to use the body as language and awaken perception through dance. In the resonance of improvisation, explore the vastness of the inner universe and rebuild the wholeness of connection with all things."
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
      zh: "曾觉得自己热爱自然，直到某一天发觉，我爱的是大自然给予我的馈赠，对于如何与大自然相处，我是无觉知的。加入「有情」，是想探索身为地球母亲的孩子，应如何生活、如何行动，也希望藉由我们的表达，邀请更多人去感受有情天地，感受那张给予生命承托与滋养的由无数生命交织而成的生命之网。",
      en: "I once thought I loved nature, until one day I realized that what I loved was the gifts nature gave me; I was unaware of how to coexist with nature. Joining \"You Qing\" is to explore how to live and act as a child of Mother Earth, and also hopes that through our expression, more people can be invited to feel the world with heart, to feel the web of life woven by countless lives that supports and nourishes life."
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
      zh: "被'有情'的发心和初衷吸引，对与身体动作有关的活动感兴趣，在项目共创活动中，打开了身体，同时也打开了一部分心灵，进一步认识了自己。希望在不断与身体的互动中，身心互相滋养，实现自我成长。同时希望创造一些与身体相关的活动，与大家一起走在身心合一的路上。",
      en: "Attracted by the intention and original aspiration of \"You Qing\", interested in activities related to body movement. In the project co-creation activities, I opened my body and also part of my soul, further recognizing myself. I hope that through continuous interaction with the body, body and mind can nourish each other and achieve self-growth. At the same time, I hope to create some body-related activities and walk the path of body-mind unity with everyone."
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
      zh: "当初建立艺术家园，有一个发心：凡是能够利益有情众生的事情，我就去做。这次成为「有情」的落地承接方并作为舞者加入，觉得很荣幸。人生没有彩排，舞作也没有，但我们的每一步都很真实，很落地。",
      en: "When establishing the art home, there was an intention: whatever can benefit sentient beings, I will do it. This time, becoming the local host of \"You Qing\" and joining as a dancer, I feel honored. Life has no rehearsals, and dance works neither, but every step we take is very real and grounded."
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
      zh: "我热爱这个星球，它一直在那里等着，等每一个有情人，等着生命与生命联手、舞动，跳出大自然的韵律与节拍，跳出生命一体的和谐。作为有自由意志的人类一份子，我祈愿自己，无论在物质与精神层面，都能成为蓝星上的一名'清洁工'，守护与净化我们共同的家园。",
      en: "I love this planet; it has always been there waiting, waiting for every person with heart, waiting for life to join hands and dance with life, dancing out the rhythm and beat of nature, dancing out the harmony of life as one. As a human being with free will, I pray that I can become a 'cleaner' on the Blue Star, both materially and spiritually, guarding and purifying our common home."
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
      zh: "自然如此丰饶，而我亦是如此。我想守护这片丰饶。所以除了在日常生活中践行环保，也渴望通过一份共创艺术作品，向更多人传达我们对地球的爱和责任。生命爱我，我爱生命。施与受从来合一。我享受在天地之下的舞动。如果你在自然间可以敞开，不必言语，就只是让周身的细胞去徜徉吧。",
      en: "Nature is so abundant, and so am I. I want to protect this abundance. So besides practicing environmental protection in daily life, I also long to convey our love and responsibility for the Earth to more people through a co-created art work. Life loves me, I love life. Giving and receiving have always been one. I enjoy dancing under heaven and earth. If you can open up in nature, no need for words, just let the cells of your body wander."
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
      zh: "通过体验，通过觉察'情'，回到我们本质的存在。那是有情众生、万物相通的根本。现代人太过用脑，往往会与身体失联。在呼吸中，通过舞蹈而体会身心合一。带着觉知，去看见、流经和转化，能够承载和回应我们面对的苦难，回到最初的爱与圆满。",
      en: "Through experience, through awareness of 'heart', return to our essential existence. That is the root of sentient beings and the connection of all things. Modern people use their brains too much and often lose connection with their bodies. In breathing, through dance, experience the unity of body and mind. With awareness, to see, flow through, and transform, able to bear and respond to the suffering we face, returning to the original love and completeness."
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
      zh: "情，是天地万物得以形成、交互、循环往复、此起彼伏的存在基础。有情，是万物存在的状态，也是万物存在的动力。因为有情，生命得以延续，文明得以传承。因为有情，我们彼此连接，共同编织着这个世界的美丽图景。",
      en: "Heart is the foundation of existence for all things in heaven and earth to form, interact, cycle, and rise and fall. You Qing is the state of existence of all things, and also the driving force of existence of all things. Because of heart, life continues and civilization is passed on. Because of heart, we are connected to each other, weaving together the beautiful picture of this world."
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
      zh: "深感现代社会大部分人与人之间的连接困难，对许多东西的不珍视。希望通过「有情」这个项目，能够唤醒更多人对于身体、对于自然、对于生命的感知与热爱。当我们真正与自己的身体连接，与这片土地连接，我们会发现，生命本身就是一场美丽的舞蹈。",
      en: "I deeply feel the difficulty of connection between most people in modern society and the lack of appreciation for many things. I hope that through the \"You Qing\" project, more people can be awakened to perceive and love their bodies, nature, and life. When we truly connect with our own bodies and with this land, we will discover that life itself is a beautiful dance."
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
      zh: "常常一个人到大自然里，聆听风的声音，感受每一朵花，每一棵树在给我传递怎样的信息。我相信，音乐是连接天地万物的桥梁，而颂钵的声音能够唤醒人们内心深处的宁静与和谐。在「有情」的舞台上，我希望用声音为舞者们营造一个神圣的空间，让每一个音符都成为对地球的礼赞。",
      en: "Often alone in nature, listening to the sound of the wind, feeling what message every flower and every tree is conveying to me. I believe that music is a bridge connecting all things in heaven and earth, and the sound of singing bowls can awaken the tranquility and harmony deep within people's hearts. On the stage of \"You Qing\", I hope to create a sacred space for the dancers with sound, making every note a tribute to the Earth."
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
      zh: "音乐是无形的舞蹈，舞蹈是有形的音乐。作为乐师，我希望用旋律与舞者们对话，让每一个音符都成为身体的延伸。在「有情」的创作中，我深深感受到，当我们放下技巧的执着，真诚地与自然共振时，音乐就会流淌而出，如同山间的清泉，自然而纯粹。",
      en: "Music is invisible dance, and dance is visible music. As a musician, I hope to dialogue with the dancers through melody, making every note an extension of the body. In the creation of \"You Qing\", I deeply feel that when we let go of the obsession with technique and sincerely resonate with nature, music will flow out like a clear spring in the mountains, natural and pure."
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
      zh: "身体的智慧无处不在，每一个细胞都在诉说着生命的故事。作为乐师，我尝试用声音去触碰这些故事，让音乐成为唤醒身体记忆的钥匙。在「有情」的共创中，我学会了倾听——倾听风声、水声，也倾听自己内心最真实的声音。",
      en: "The wisdom of the body is everywhere; every cell is telling the story of life. As a musician, I try to touch these stories with sound, making music the key to awakening body memory. In the co-creation of \"You Qing\", I learned to listen—to the sound of wind and water, and also to the truest voice within my own heart."
    }
  }
];
