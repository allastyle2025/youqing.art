export interface MediaItem {
  id: number;
  title: {
    zh: string;
    en: string;
  };
  type: 'video' | 'image';
  thumbnail: string;
  date: string;
  description: {
    zh: string;
    en: string;
  };
  link: string;
  mediaName: {
    zh: string;
    en: string;
  };
}

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: {
      zh: "用舞蹈连结人与自然，这群素人在崇明的风雨中起舞",
      en: "Connecting People and Nature Through Dance: Amateurs Dance in Chongming's Wind and Rain"
    },
    type: "video",
    thumbnail: "https://cdn.djybrs.cn/uploads/youqing/other/20241025_media_cover.jpg",
    date: "2024-10-25",
    description: {
      zh: "历经近半年的线上交流、编舞与10天实地排练，这群素人舞者在崇明岛堡镇码头的风雨中，演出了一曲《有情》舞作",
      en: "After nearly half a year of online exchange, choreography, and 10 days of on-site rehearsal, these amateur dancers performed a \"You Qing\" dance work in the wind and rain at Chongming Island's Bao Town Wharf"
    },
    link: "https://www.thepaper.cn/newsDetail_forward_29132092",
    mediaName: {
      zh: "澎湃新闻",
      en: "The Paper"
    }
  },
  {
    id: 2,
    title: {
      zh: "蛇口素人舞作《有情・万物生》上演 续写社区文化新章",
      en: "Shekou Amateur Dance 'You Qing: The Awakening of All Beings' Performs, Continuing a New Chapter in Community Culture"
    },
    type: "image",
    thumbnail: "https://cdn.djybrs.cn/uploads/youqing/20251108/2025-11-08.1.JPG",
    date: "2025-11-11",
    description: {
      zh: "约300名公众现场观看了表演，这出由来自全国各地的素人舞者与多位深圳本地及蛇口居民共同完成的舞作，将女娲精神、蛇口文化与生态环保理念巧妙融合",
      en: "Approximately 300 audience members watched the performance live. This dance work, completed by amateur dancers from across the country and several local Shenzhen and Shekou residents, cleverly integrates the spirit of Nüwa, Shekou culture, and ecological environmental protection concepts"
    },
    link: "https://site.szplus.com/content/s69133095e4b0a181ee212110.html",
    mediaName: {
      zh: "深圳特区报",
      en: "Shenzhen Special Zone Daily"
    }
  }
];
