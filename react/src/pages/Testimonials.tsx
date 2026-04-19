import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { testimonials, type Testimonial } from '../data/testimonials';

// 舞者心语卡片组件
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  const content = lang === 'zh' ? testimonial.content : testimonial.contentEn;
  const title = lang === 'zh' ? testimonial.title.zh : testimonial.title.en;
  const category = lang === 'zh' ? testimonial.category.zh : testimonial.category.en;
  const name = lang === 'zh' ? testimonial.name : testimonial.nameEn;
  const date = lang === 'zh' ? testimonial.date : testimonial.dateEn;
  
  // 判断是否显示"展开"按钮（内容超过200字）
  const shouldShowExpand = content.length > 200;
  const displayContent = isExpanded ? content : content.slice(0, 200) + (shouldShowExpand ? '...' : '');

  return (
    <div
      style={{
        background: 'white',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
      }}
    >
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* 分类标签 */}
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            color: 'var(--color-accent)',
            fontWeight: 600,
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {category}
        </span>
        
        {/* 标题 */}
        <h3
          style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: 'var(--color-primary)',
            marginBottom: '0.75rem',
            lineHeight: 1.4,
          }}
        >
          {title}
        </h3>
        
        {/* 内容 */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#4b5563',
              lineHeight: 1.7,
              whiteSpace: 'pre-line',
            }}
          >
            {displayContent}
          </p>
          
          {shouldShowExpand && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-accent)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem 0',
                fontWeight: 500,
              }}
            >
              {isExpanded ? (lang === 'zh' ? '收起' : 'Collapse') : (lang === 'zh' ? '展开更多' : 'Read more')}
            </button>
          )}
        </div>
        
        {/* 底部信息 */}
        <div
          style={{
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid #f3f4f6',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
            }}
          >
            {name}
          </span>
          {date && (
            <span
              style={{
                fontSize: '0.75rem',
                color: '#9ca3af',
              }}
            >
              {date}
            </span>
          )}
        </div>
        
        {/* 外部链接 */}
        {testimonial.link && (
          <a
            href={testimonial.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.875rem',
              color: 'var(--color-accent)',
              textDecoration: 'none',
              marginTop: '0.75rem',
              fontWeight: 500,
            }}
          >
            {lang === 'zh' ? '阅读原文' : 'Read original'}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const [selectedYear, setSelectedYear] = useState<string>('all');
  
  // 获取所有年份
  const years = ['all', ...Array.from(new Set(testimonials.map(t => t.year)))].sort().reverse();
  
  // 过滤数据
  const filteredTestimonials = selectedYear === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.year === selectedYear);

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '2rem 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: 700,
            marginBottom: '1rem',
            color: 'var(--color-primary)',
          }}>
            {t('nav.testimonials')}
          </h1>
          <div
            style={{
              width: '4rem',
              height: '3px',
              background: 'var(--color-accent)',
              margin: '0 auto 1rem',
            }}
          />
          <p style={{ 
            fontSize: '1rem', 
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            {i18n.language === 'zh' 
              ? '聆听舞者们的真实心声，感受每一次共创的感动与成长' 
              : 'Listen to the authentic voices of dancers, feel the emotion and growth of each co-creation'}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{ padding: '2rem 0', background: '#f9fafb' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            gap: '0.5rem', 
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: selectedYear === year ? 'var(--color-accent)' : 'white',
                  color: selectedYear === year ? 'white' : '#4b5563',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
              >
                {year === 'all' 
                  ? (i18n.language === 'zh' ? '全部' : 'All') 
                  : year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section section-soft">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          {filteredTestimonials.length === 0 && (
            <p style={{ textAlign: 'center', color: '#6b7280', padding: '3rem 0' }}>
              {i18n.language === 'zh' ? '暂无数据' : 'No data available'}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
