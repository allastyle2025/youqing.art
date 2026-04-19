import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  zh: {
    translation: {
      nav: {
        home: '首页',
        about: '关于',
        gallery: '画廊',
        dancers: '舞者',
        schedule: '历程',
        testimonials: '舞者心语',
        contact: '联系',
      },
      hero: {
        title: '有情',
        subtitle: '素人共创生态舞作',
        mainTitle: '众生\n有情',
        tagline: '一场献给地球的舞作',
        description: '这是一出以「美好新地球」为蓝图的生态舞作，也是由天南海北的素人舞者自发汇集的持续性艺术行动',
        scrollDown: '向下探索',
        stats: {
          dancers: '位素人舞者',
          year: '年度演出',
          possibilities: '无限可能',
        },
      },
      about: {
        title: '关于有情',
        description: '「有情」素人共创生态艺术项目是一个"以舞载道"、"修身治世"、"扎根生活"、以关爱地球为蓝图的社会创新行动。',
        dance: {
          title: '以舞载道',
          content: '舞蹈艺术是「有情」项目的核心表达形式。「有情」追求的不是舞蹈表演技艺的专业与高超，而是人类"真善美"天性的解放、培育与完善。「有情」舞作所载之道既为传承华夏文明生生不息的精神，亦为与当代同行者参天地自然造化、共筑生态文明新地球。',
        },
        cultivation: {
          title: '修身治世',
          content: '「有情」希望通过素人舞蹈的训练和自然环境演出连结舞者和观众，交流并传播对身体、生命、自然和地球万物的热爱珍惜之情。以健康体魄、恢复生机、传递温情、治愈土地、守护生态为脉络，将中国传统文化中修身治世的理想境界落实到具体入微的身体艺术实践之中。',
        },
        life: {
          title: '扎根生活',
          content: '「有情」探索的不是将艺术摆放于高级专业的艺术殿堂，而是如何将它带回平凡生活与真实生命本身，成为人类庄严自身存在、表达恣意生机的载具。「有情」希望探索营造一个舞者与观众、艺术与生活没有隔阂的社区生态，共同实现在地球家园上的"诗意栖居"、活出"身在桃源"的生命真谛。',
        },
        conclusion: '「有情」生态艺术项目邀请\n天下"有情人"共建共享团结友爱的美好新地球！',
      },
      video: {
        2024: '「有情」2024共创作品舞台呈现',
        2025: '「有情」2025在地社区共建回顾',
      },
      gallery: {
        title: '演出画廊',
        subtitle: '「有情」生态舞作汇集素人之美，以身体艺术绽放自然舞台',
        viewAll: '查看全部相册',
      },
      dancers: {
        title: '共创舞者',
        subtitle: '来自天南海北的素人舞者，用身体讲述地球之爱的故事',
        viewAll: '查看全部舞者',
      },
      schedule: {
        title: '有情历程',
        subtitle: '点滴有情，汇聚成海（2024—2026）',
      },
      media: {
        title: '媒体报道',
      },
      contact: {
        title: '联系我们',
        subtitle: '欢迎以任何身份加入「有情」',
      },
      footer: {
        copyright: '保留所有权利。',
      },
      lang: {
        zh: '中文',
        en: 'EN',
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        gallery: 'Gallery',
        dancers: 'Dancers',
        schedule: 'Timeline',
        testimonials: 'Testimonials',
        contact: 'Contact',
      },
      hero: {
        title: 'You Qing',
        subtitle: 'Co-created Ecological Dance',
        mainTitle: 'All Beings\nof Heart',
        tagline: 'A Dance Offering for the Earth',
        description: 'This is an ecological dance blueprinted on a "Beautiful New Earth," and a sustained artistic movement spontaneously gathered by amateur dancers from all corners of the world',
        scrollDown: 'Scroll Down',
        stats: {
          dancers: 'Amateur Dancers',
          year: 'Annual Performance',
          possibilities: 'Infinite Possibilities',
        },
      },
      about: {
        title: 'About You Qing',
        description: 'Youqing (All Beings of Heart) is a people-powered ecological art project that "conveys Dao through dance", "cultivates self and society", "cares for ecology and earth", and blueprints a beautiful new Earth.',
        dance: {
          title: 'Convey "Dao" through Dance',
          content: 'Dance is the core expressive form of "Youqing". We pursue not professional virtuosity or technical brilliance in performance, but the liberation, cultivation, and perfection of humanity\'s innate "truth, goodness, and beauty." The Dao conveyed through "Youqing" inherits the enduring spirits of Chinese ancient wisdom. We would like to join hands with contemporary companions to together build an ecological and beautiful civilization for a new Earth.',
        },
        cultivation: {
          title: 'Cultivate Self and Society',
          content: 'Through amateur dance training and natural environment performances, we connect dancers and audiences, fostering and sharing a deep love and care for the body, life, nature, and all beings on Earth. By healing the land, protecting the ecosystem and caring for the people, we ground the ideal realm of a harmonious new world into concrete, meticulous practices of the art of the body.',
        },
        life: {
          title: 'Care for Ecology and Earth',
          content: 'We aim not to place art in the lofty halls of professional excellence, but to bring it back to ordinary life and authentic existence——making it a vehicle for humanity to dignify its own being and express unbounded vitality. "Youqing" aspires to cultivate a community ecology where there is no separation between dancer and audience, art and life, together achieving "poetic dwelling" on our planetary home.',
        },
        conclusion: 'Youqing Eco-Art Project invites\nall "beings of heart" to co-create and share\na beautiful new Earth of solidarity and love!',
      },
      video: {
        2024: 'You Qing 2024 Co-creation Performance',
        2025: 'You Qing 2025 Community Building Review',
      },
      gallery: {
        title: 'Performance Gallery',
        subtitle: 'You Qing ecological dance gathers the beauty of amateurs, blooming on the natural stage',
        viewAll: 'View All Albums',
      },
      dancers: {
        title: 'Co-creating Dancers',
        subtitle: 'Amateur dancers from all over, telling stories of love for the Earth through their bodies',
        viewAll: 'View All Dancers',
      },
      schedule: {
        title: 'You Qing Journey',
        subtitle: 'Drops of You Qing, gathering into an ocean (2024-2026)',
      },
      media: {
        title: 'Media Coverage',
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Welcome to join You Qing in any capacity',
      },
      footer: {
        copyright: 'All rights reserved.',
      },
      lang: {
        zh: '中文',
        en: 'EN',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
