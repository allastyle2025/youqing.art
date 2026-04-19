import { useTranslation } from 'react-i18next';

interface HeroProps {
  onScrollDown: () => void;
}

export default function Hero({ onScrollDown }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div 
        className="hero-bg"
        style={{
          backgroundImage: `url('https://cdn.djybrs.cn/uploads/youqing/other/hero-bg.JPG')`,
        }}
      />
      <div className="hero-overlay" />
      
      <div className="hero-content">
        {/* 标题和副标题容器 */}
        <div className="hero-heading">
          {/* 主标题 - 参照 hero-2.html 的 "众生有情" */}
          <h1
            className="hero-title"
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 6rem)',
              lineHeight: 1.1,
              marginBottom: '0.5rem',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
            dangerouslySetInnerHTML={{ __html: t('hero.mainTitle').replace(/\n/g, '<br/>') }}
          />

          {/* 副标题 - 参照 hero-2.html 的 "一场献给地球的舞作" */}
          <p
            className="hero-tagline"
            style={{
              fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
              color: 'var(--color-accent)',
              fontWeight: 500,
              marginBottom: '2rem',
              opacity: 0.9,
            }}
          >
            {t('hero.tagline')}
          </p>
        </div>
        
        {/* 描述文本 */}
        <p
          className="hero-description"
          style={{
            fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
            maxWidth: '500px',
            marginBottom: '3rem',
            opacity: 0.85,
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          {t('hero.description')}
        </p>
        
        {/* 统计信息 - 参照 hero-2.html 的样式 */}
        <div
          className="hero-stats"
          style={{
            marginTop: 'auto',
            marginBottom: '2rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <div className="hero-stat">
            <div className="hero-stat-number">30+</div>
            <div className="hero-stat-label">{t('hero.stats.dancers')}</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">2026</div>
            <div className="hero-stat-label">{t('hero.stats.year')}</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">∞</div>
            <div className="hero-stat-label">{t('hero.stats.possibilities')}</div>
          </div>
        </div>
      </div>

      {/* 向下滚动指示器 */}
      <div className="hero-scroll" onClick={onScrollDown}>
        <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>{t('hero.scrollDown')}</span>
        <i className="fa fa-chevron-down"></i>
      </div>
    </section>
  );
}
