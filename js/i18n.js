// 国际化配置
const i18n = {
    // 当前语言
    currentLang: localStorage.getItem('language') || 'zh',
    
    // 语言数据
    translations: {
        zh: {
            // 导航
            'nav.about': '关于',
            'nav.gallery': '画廊',
            'nav.dancers': '舞者',
            'nav.schedule': '历程',
            'nav.testimonials': '舞者心语',
            'nav.contact': '联系',
            
            // 首页标题
            'hero.title': '有情',
            'hero.subtitle': '素人共创生态舞作',
            'hero.mainTitle': '众生<br/>有情',
            'hero.tagline': '一场献给地球的舞作',
            'hero.description': '这是一出以「美好新地球」为蓝图的生态舞作，也是由天南海北的素人舞者自发汇集的持续性艺术行动',
            'hero.scrollDown': '向下探索',
            'hero.stats.dancers': '位素人舞者',
            'hero.stats.year': '年度演出',
            'hero.stats.possibilities': '无限可能',
            
            // 关于部分
            'about.title': '关于有情',
            'about.description': '「有情」素人共创生态艺术项目是一个"以舞载道"、"修身治世"、"扎根生活"、以关爱地球为蓝图的社会创新行动。',
            'about.vision.title': '有情 — 愿景与使命',
            'about.dance.title': '以舞载道',
            'about.dance.content': '舞蹈艺术是「有情」项目的核心表达形式。「有情」追求的不是舞蹈表演技艺的专业与高超，而是人类"真善美"天性的解放、培育与完善。「有情」舞作所载之道既为传承华夏文明生生不息的精神，亦为与当代同行者参天地自然造化、共筑生态文明新地球。',
            'about.cultivation.title': '修身治世',
            'about.cultivation.content': '「有情」希望通过素人舞蹈的训练和自然环境演出连结舞者和观众，交流并传播对身体、生命、自然和地球万物的热爱珍惜之情。以健康体魄、恢复生机、传递温情、治愈土地、守护生态为脉络，将中国传统文化中修身治世的理想境界落实到具体入微的身体艺术实践之中。',
            'about.life.title': '扎根生活',
            'about.life.content': '「有情」探索的不是将艺术摆放于高级专业的艺术殿堂，而是如何将它带回平凡生活与真实生命本身，成为人类庄严自身存在、表达恣意生机的载具。「有情」希望探索营造一个舞者与观众、艺术与生活没有隔阂的社区生态，共同实现在地球家园上的"诗意栖居"、活出"身在桃源"的生命真谛。',
            'about.conclusion': '「有情」生态艺术项目邀请<br/>天下"有情人"共建共享团结友爱的美好新地球！',
            
            // 特色
            'feature.local.title': '在地性',
            'feature.local.desc': '关注身边的生态议题，与当地环境、文化实现深度联结',
            'feature.co-create.title': '共创性',
            'feature.co-create.desc': '二十位来自不同职业背景的素人舞者，同行于艺术创作',
            'feature.pure.title': '纯粹性',
            'feature.pure.desc': '自然舞台，真实身心，呈现纯粹而诚挚的艺术表达',
            
            // 画廊
            'gallery.title': '演出画廊',
            'gallery.subtitle': '「有情」生态舞作汇集素人之美，以身体艺术绽放自然舞台',
            'gallery.viewAll': '查看全部相册',
            
            // 媒体报道
            'media.title': '媒体报道',
            
            // 舞者
            'dancers.title': '共创舞者',
            'dancers.subtitle': '来自天南海北的素人舞者，用身体讲述地球之爱的故事',
            'dancers.viewAll': '查看全部舞者 →',
            
            // 历程
            'schedule.title': '有情历程',
            'schedule.subtitle': '点滴有情，汇聚成海（2024—2026）',
            
            // 联系
            'contact.title': '联系我们',
            'contact.subtitle': '欢迎以任何身份加入「有情」',
            'contact.join.title': '参与共创',
            'contact.join.desc': '作为共创艺术，「有情」是一个不会终止的舞作。我们希望继续身体的旅程，去到世界各地，为世界带去慈悲与爱的讯息。如果你希望加入我们，无论以何种身份：摄影师、舞者、场地提供者、演出主办方...<br>欢迎与我们联络。',
            'contact.email': '邮箱',
            'contact.wechat': '微信',
            'contact.scan.join': '参与共创',
            'contact.scan.follow': '关注官方微信号',
            'contact.scan.tip1': '微信扫码添加小助理<br/>WingDanceTheatre永·舞团',
            'contact.scan.tip2': '永·舞团<br/>Wing Dance Theatre',
            
            // 支持方
            'supporters.title': '支持方与合作伙伴',
            'supporters.subtitle': '跨越山海，利乐有情',
            
            // 页脚
            'footer.brand': '有情',
            'footer.brand.desc': '素人共创生态舞作，用身体传递爱与关切',
            'footer.pages': '页面',
            'footer.join': '参与',
            'footer.beDancer': '成为舞者',
            'footer.social': '社交',
            'footer.copyright': '保留所有权利。',
            
            // 视频标题
            'video.2024': '「有情」2024共创作品舞台呈现',
            'video.2025': '「有情」2025在地社区共建回顾',
            
            // 画廊页面
            'gallery.page.subtitle': '探索我们的舞蹈作品与创作过程',
            'gallery.back': '返回相册',
            
            // 舞者页面
            'dancers.page.title': '共创舞者',
            'dancers.page.subtitle': '来自天南海北的素人舞者，用身体讲述地球之爱的故事',
            'dancers.musicians.title': '共创乐师',
            'dancers.musicians.subtitle': '用音乐为舞蹈增添灵魂，共同传递地球之爱的音乐家',
            'dancers.contact.tip': '参与共创请联系',
            
            // 舞者心语页面
            'testimonials.page.title': '舞者心语',
            'testimonials.page.subtitle': '来自素人舞者的真实感悟与心路历程，记录每一次身体与灵魂的对话',
            'testimonials.filter.label': '按年份/分类过滤：',
            'testimonials.filter.all': '全部',
            'testimonials.filter.2024': '2024年',
            'testimonials.filter.2025': '2025年',
            'testimonials.loading': '正在加载中...',
            
            // 语言切换
            'lang.zh': '中文',
            'lang.en': 'English',
        },
        en: {
            // Navigation
            'nav.about': 'About',
            'nav.gallery': 'Gallery',
            'nav.dancers': 'Dancers',
            'nav.schedule': 'Timeline',
            'nav.testimonials': 'Testimonials',
            'nav.contact': 'Contact',
            
            // Hero
            'hero.title': 'You Qing',
            'hero.subtitle': 'Amateur Co-creation Eco-Dance',
            'hero.mainTitle': 'All Beings<br/>With Heart',
            'hero.tagline': 'A Dance Dedicated to the Earth',
            'hero.description': 'This is an ecological dance work blueprinted for a "Beautiful New Earth," and an ongoing artistic initiative spontaneously gathered by amateur dancers from all corners of the world',
            'hero.scrollDown': 'Scroll Down',
            'hero.stats.dancers': 'Amateur Dancers',
            'hero.stats.year': 'Annual Performance',
            'hero.stats.possibilities': 'Infinite Possibilities',
            
            // About
            'about.title': 'About You Qing',
            'about.description': 'You Qing is a social innovation project that "conveys truth through dance," "cultivates self and society," "roots in life," and cares for the Earth.',
            'about.vision.title': 'You Qing — Vision & Mission',
            'about.dance.title': 'Conveying Truth Through Dance',
            'about.dance.content': 'Dance is the core expression of You Qing. We pursue not professional excellence, but the liberation and cultivation of human nature\'s "truth, goodness, and beauty." The way conveyed through dance inherits the spirit of Chinese civilization and builds an ecological civilization for a new Earth.',
            'about.cultivation.title': 'Cultivating Self and Society',
            'about.cultivation.content': 'Through amateur dance training and natural environment performances, we connect dancers and audiences, spreading love and care for the body, life, nature, and all things on Earth. We translate the ideal of self-cultivation and world-governance into embodied artistic practice.',
            'about.life.title': 'Rooted in Life',
            'about.life.content': 'You Qing explores not placing art in high-end professional halls, but bringing it back to ordinary life and authentic existence. We aim to create a community ecology without barriers between dancers and audiences, art and life, achieving "poetic dwelling" on our home planet.',
            'about.conclusion': 'You Qing Eco-Art Project invites<br/>all "people with heart" to build and share a beautiful new Earth of unity and love!',
            
            // Features
            'feature.local.title': 'Locality',
            'feature.local.desc': 'Focusing on local ecological issues, deeply connecting with the environment and culture',
            'feature.co-create.title': 'Co-creation',
            'feature.co-create.desc': 'Twenty amateur dancers from diverse professional backgrounds journey together in artistic creation',
            'feature.pure.title': 'Purity',
            'feature.pure.desc': 'Natural stage, authentic body and mind, presenting pure and sincere artistic expression',
            
            // Gallery
            'gallery.title': 'Performance Gallery',
            'gallery.subtitle': 'You Qing eco-dance gathers the beauty of amateurs, blooming on the natural stage through body art',
            'gallery.viewAll': 'View All Albums',
            
            // Media
            'media.title': 'Media Coverage',
            
            // Dancers
            'dancers.title': 'Co-creating Dancers',
            'dancers.subtitle': 'Amateur dancers from all corners, telling stories of love for the Earth through their bodies',
            'dancers.viewAll': 'View All Dancers →',
            
            // Schedule
            'schedule.title': 'You Qing Timeline',
            'schedule.subtitle': 'Every drop of love gathers into the ocean (2024-2026)',
            
            // Contact
            'contact.title': 'Contact Us',
            'contact.subtitle': 'Welcome to join You Qing in any capacity',
            'contact.join.title': 'Join the Creation',
            'contact.join.desc': 'As a co-creation art project, You Qing is an ongoing dance work. We hope to continue the journey of the body to all parts of the world, bringing messages of compassion and love. If you wish to join us, whether as a photographer, dancer, venue provider, or performance organizer...<br>Please contact us.',
            'contact.email': 'Email',
            'contact.wechat': 'WeChat',
            'contact.scan.join': 'Join Creation',
            'contact.scan.follow': 'Follow Official Account',
            'contact.scan.tip1': 'Scan to add assistant<br/>WingDanceTheatre',
            'contact.scan.tip2': 'Wing Dance Theatre<br/>Official Account',
            
            // Supporters
            'supporters.title': 'Supporters & Partners',
            'supporters.subtitle': 'Across mountains and seas, benefiting all sentient beings',
            
            // Footer
            'footer.brand': 'You Qing',
            'footer.brand.desc': 'Amateur co-creation eco-dance, conveying love and care through the body',
            'footer.pages': 'Pages',
            'footer.join': 'Join',
            'footer.beDancer': 'Become a Dancer',
            'footer.social': 'Social',
            'footer.copyright': 'All rights reserved.',
            
            // Video titles
            'video.2024': 'You Qing 2024 Co-creation Stage Performance',
            'video.2025': 'You Qing 2025 Local Community Building Review',
            
            // Gallery page
            'gallery.page.subtitle': 'Explore our dance works and creative process',
            'gallery.back': 'Back to Albums',
            
            // Dancers page
            'dancers.page.title': 'Co-creating Dancers',
            'dancers.page.subtitle': 'Amateur dancers from all corners, telling stories of love for the Earth',
            'dancers.musicians.title': 'Co-creating Musicians',
            'dancers.musicians.subtitle': 'Musicians who add soul to dance, together conveying love for the Earth',
            'dancers.contact.tip': 'Contact us to join',
            
            // Testimonials page
            'testimonials.page.title': 'Dancer Testimonials',
            'testimonials.page.subtitle': 'Real reflections and journeys from amateur dancers, recording every dialogue between body and soul',
            'testimonials.filter.label': 'Filter by year/category:',
            'testimonials.filter.all': 'All',
            'testimonials.filter.2024': '2024',
            'testimonials.filter.2025': '2025',
            'testimonials.loading': 'Loading...',
            
            // Language switch
            'lang.zh': '中文',
            'lang.en': 'English',
        }
    },
    
    // 获取翻译
    t(key) {
        return this.translations[this.currentLang][key] || key;
    },
    
    // 切换语言
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('language', lang);
            this.updatePage();
            this.updateToggleButton();
            
            // 通知 iframe 中的 hero 页面语言已切换
            const heroIframe = document.querySelector('iframe[src="hero-2.html"]');
            if (heroIframe && heroIframe.contentWindow) {
                heroIframe.contentWindow.postMessage({
                    type: 'languageChange',
                    lang: lang
                }, '*');
            }
            
            // 重新加载动态内容（时间线和相册）
            this.reloadDynamicContent();
        }
    },
    
    // 重新加载动态内容
    reloadDynamicContent() {
        // 如果存在 loadSchedule 函数，重新加载时间线
        if (typeof loadSchedule === 'function') {
            loadSchedule();
        }
        
        // 如果存在 loadGallery 函数，重新加载画廊
        if (typeof loadGallery === 'function') {
            loadGallery();
        }
        
        // 如果存在 loadAlbums 函数，重新加载相册
        if (typeof loadAlbums === 'function') {
            loadAlbums();
        }
        
        // 如果存在 loadMedia 函数，重新加载媒体报道
        if (typeof loadMedia === 'function') {
            loadMedia();
        }
        
        // 如果存在 loadTestimonials 函数，重新加载舞者心语
        if (typeof loadTestimonials === 'function') {
            loadTestimonials();
        }
        
        // 如果存在 loadDancers 函数，重新加载舞者数据
        if (typeof loadDancers === 'function') {
            loadDancers();
        }
        
        // 如果存在 loadHomeDancers 函数，重新加载首页舞者数据
        if (typeof loadHomeDancers === 'function') {
            loadHomeDancers();
        }
    },
    
    // 更新页面文本
    updatePage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);
            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        });
        
        // 更新 HTML lang 属性
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
        
        // 更新页面标题
        const titleEl = document.querySelector('title');
        if (titleEl) {
            if (this.currentLang === 'en') {
                titleEl.textContent = 'You Qing - Amateur Co-creation Eco-Dance';
            } else {
                titleEl.textContent = '有情 - 素人共创生态舞作';
            }
        }
    },
    
    // 更新切换按钮状态
    updateToggleButton() {
        const btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.textContent = this.currentLang === 'zh' ? 'EN' : '中文';
        }
        
        // 更新移动版切换按钮
        const mobileBtn = document.getElementById('lang-toggle-mobile');
        if (mobileBtn) {
            mobileBtn.textContent = this.currentLang === 'zh' ? 'English' : '中文';
        }
    },
    
    // 初始化
    init() {
        this.updatePage();
        this.updateToggleButton();
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
