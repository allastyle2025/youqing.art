import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface MetaData {
  title: string;
  description?: string;
}

export function useMeta(metaData: MetaData) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // 更新标题
    document.title = metaData.title;

    // 更新 meta description（设置为空）
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '');
    }

    // 更新 Open Graph meta 标签
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    if (ogTitle) {
      ogTitle.setAttribute('content', metaData.title);
    }
    if (ogDescription) {
      ogDescription.setAttribute('content', '');
    }

    // 更新 html lang 属性
    document.documentElement.lang = i18n.language === 'zh' ? 'zh-CN' : 'en';
  }, [metaData.title, metaData.description, i18n.language]);
}
