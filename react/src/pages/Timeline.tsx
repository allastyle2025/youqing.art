import { useTranslation } from 'react-i18next';
import { timelineEvents, type TimelineEvent } from '../data/timeline';
import { useState, useEffect } from 'react';

// 时间线事件卡片组件
function TimelineCard({ event, index, isMobile }: { event: TimelineEvent; index: number; isMobile: boolean }) {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'zh' ? 'zh' : 'en';

  const hasLink = event.link && event.link.trim() !== '';

  if (isMobile) {
    // 移动端：单列布局，卡片在右侧，节点在左侧
    return (
      <div
        style={{
          display: 'flex',
          position: 'relative',
          marginBottom: '2.5rem',
          paddingLeft: '2.5rem',
        }}
      >
        {/* 时间线节点 - left: 0 是容器左边缘，减去容器 paddingLeft 的偏移 */}
        <div
          style={{
            position: 'absolute',
            left: 'calc(-1.25rem + 14px)',
            top: '0.75rem',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: 'var(--color-accent)',
            border: '3px solid white',
            boxShadow: '0 0 0 3px var(--color-accent)',
            zIndex: 2,
            transform: 'translateX(-50%)',
          }}
        />

        {/* 内容卡片 */}
        <div
          style={{
            flex: 1,
            background: 'white',
            borderRadius: '1rem',
            padding: '1.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
          }}
        >
          {/* 日期 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.5rem',
              marginBottom: '0.75rem',
            }}
          >
            <span
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--color-accent)',
              }}
            >
              {event.month}{event.day ? `.${event.day}` : ''}
            </span>
            <span
              style={{
                fontSize: '0.875rem',
                color: '#9ca3af',
              }}
            >
              {event.year}
            </span>
          </div>

          {/* 标题 */}
          {hasLink ? (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--color-primary)',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '0.75rem',
                lineHeight: 1.5,
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-primary)';
              }}
            >
              {event.title[lang]}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  display: 'inline-block',
                  marginLeft: '0.25rem',
                  verticalAlign: 'middle',
                }}
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          ) : (
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--color-primary)',
                marginBottom: '0.75rem',
                lineHeight: 1.5,
              }}
            >
              {event.title[lang]}
            </h3>
          )}

          {/* 描述 */}
          <p
            style={{
              fontSize: '0.95rem',
              color: '#6b7280',
              lineHeight: 1.7,
              marginBottom: '0.75rem',
            }}
          >
            {event.description[lang]}
          </p>

          {/* 地点 */}
          {event.location && (
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--color-accent)',
                fontWeight: 500,
              }}
            >
              {typeof event.location === 'string' ? event.location : event.location[lang]}
            </p>
          )}
        </div>
      </div>
    );
  }

  // PC端：左右交替布局
  const isEven = index % 2 === 0;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isEven ? 'flex-start' : 'flex-end',
        position: 'relative',
        marginBottom: '3rem',
      }}
    >
      {/* 时间线节点 */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: 'var(--color-accent)',
          border: '4px solid white',
          boxShadow: '0 0 0 4px var(--color-accent)',
          zIndex: 2,
        }}
      />

      {/* 内容卡片 */}
      <div
        style={{
          width: 'calc(50% - 40px)',
          background: 'white',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          marginLeft: isEven ? '0' : 'auto',
          marginRight: isEven ? 'auto' : '0',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
        {/* 日期 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.5rem',
            marginBottom: '0.75rem',
          }}
        >
          <span
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--color-accent)',
            }}
          >
            {event.month}{event.day ? `.${event.day}` : ''}
          </span>
          <span
            style={{
              fontSize: '0.875rem',
              color: '#9ca3af',
            }}
          >
            {event.year}
          </span>
        </div>

        {/* 标题 */}
        {hasLink ? (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '0.5rem',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-primary)';
            }}
          >
            {event.title[lang]}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{
                display: 'inline-block',
                marginLeft: '0.25rem',
                verticalAlign: 'middle',
              }}
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        ) : (
          <h3
            style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              marginBottom: '0.5rem',
            }}
          >
            {event.title[lang]}
          </h3>
        )}

        {/* 描述 */}
        <p
          style={{
            fontSize: '0.875rem',
            color: '#6b7280',
            lineHeight: 1.6,
            marginBottom: '0.5rem',
          }}
        >
          {event.description[lang]}
        </p>

        {/* 地点 */}
        {event.location && (
          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-accent)',
              fontWeight: 500,
            }}
          >
            {typeof event.location === 'string' ? event.location : event.location[lang]}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* 页面标题区 */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              color: 'var(--color-primary)',
            }}
          >
            {t('nav.schedule')}
          </h1>
          <div
            style={{
              width: '4rem',
              height: '3px',
              background: 'var(--color-accent)',
              margin: '0 auto 1rem',
            }}
          />
          <p
            style={{
              fontSize: '1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            {i18n.language === 'zh'
              ? '记录「有情」成长的每一步，见证素人舞者们的共创历程'
              : 'Recording every step of You Qing\'s growth, witnessing the co-creation journey of amateur dancers'}
          </p>
        </div>
      </section>

      {/* 时间线 */}
      <section className="section section-soft">
        <div className="container">
          <div
            style={{
              position: 'relative',
              maxWidth: isMobile ? '100%' : '900px',
              margin: '0 auto',
              padding: isMobile ? '0 1rem 0 1.25rem' : '0',
            }}
          >
            {/* 时间线中轴线 - 移动端在左侧，PC端在中间 */}
            <div
              style={{
                position: 'absolute',
                left: isMobile ? '14px' : '50%',
                transform: 'translateX(-50%)',
                width: '3px',
                height: isMobile ? 'calc(100% - 3rem)' : '100%',
                top: isMobile ? '1.5rem' : '0',
                background: isMobile
                  ? 'linear-gradient(to bottom, var(--color-accent) 0%, var(--color-primary) 70%, transparent 100%)'
                  : 'linear-gradient(to bottom, var(--color-accent), var(--color-primary))',
                borderRadius: '2px',
              }}
            />

            {/* 事件列表 */}
            {timelineEvents.map((event, index) => (
              <TimelineCard key={event.id} event={event} index={index} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
