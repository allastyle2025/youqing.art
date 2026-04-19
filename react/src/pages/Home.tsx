import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { albums } from '../data/albums';
import { dancers } from '../data/dancers';
import { timelineEvents } from '../data/timeline';
import { supporters } from '../data/supporters';
import { mediaItems } from '../data/media';
import i18n from '../i18n';
import { useMeta } from '../hooks/useMeta';

export default function Home() {
  const { t, i18n: i18nInstance } = useTranslation();
  const aboutRef = useRef<HTMLDivElement>(null);
  const mediaSliderRef = useRef<HTMLDivElement>(null);
  const [mediaScrollPosition, setMediaScrollPosition] = useState(0);

  // 动态更新页面 meta 信息（用于微信分享）
  useMeta({
    title: i18nInstance.language === 'zh'
      ? '有情 - 素人共创生态舞作'
      : 'Youqing - People-powered Ecological Dance',
  });

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero onScrollDown={scrollToAbout} />

      {/* 关于有情 */}
      <section id="about" ref={aboutRef} className="section section-soft">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="section-subtitle">{t('about.description')}</p>
          </div>

          {/* 视频 2024 */}
          <div style={{ maxWidth: '768px', margin: '0 auto 3rem', padding: '0 1rem' }}>
            <div style={{
              aspectRatio: '16/9',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}>
              <iframe
                src="https://player.bilibili.com/player.html?aid=114455828504123&bvid=BV116VrzVE9S&cid=29809053001&p=1&as_wide=1&high_quality=1&danmaku=0&autoplay=0"
                style={{ width: '100%', height: '100%', border: 'none' }}
                allowFullScreen
              />
            </div>
            <p style={{ textAlign: 'center', color: '#4b5563', marginTop: '1rem' }}>
              {t('video.2024')}
            </p>
          </div>

          {/* 视频 2025 */}
          <div style={{ maxWidth: '768px', margin: '0 auto 3rem', padding: '0 1rem' }}>
            <div style={{
              aspectRatio: '16/9',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}>
              <iframe
                src="https://player.bilibili.com/player.html?aid=115961533308858&bvid=BV1pqzeBYEka&cid=35628124390&p=1&autoplay=0"
                style={{ width: '100%', height: '100%', border: 'none' }}
                allowFullScreen
              />
            </div>
            <p style={{ textAlign: 'center', color: '#4b5563', marginTop: '1rem' }}>
              {t('video.2025')}
            </p>
          </div>

          {/* 愿景与使命 */}
          <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 1rem' }}>
            <div
              className="vision-mission-container"
              style={{
                background: 'white',
                borderRadius: '0.75rem',
                padding: '2rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              {/* 以舞载道 */}
              <div style={{ paddingBottom: '2rem', borderBottom: '1px solid #f3f4f6' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--color-secondary)',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <span style={{
                    width: '0.5rem',
                    height: '0.5rem',
                    background: 'var(--color-accent)',
                    borderRadius: '50%',
                  }}></span>
                  {t('about.dance.title')}
                </h3>
                <p style={{ color: '#374151', lineHeight: 1.7 }}>
                  {t('about.dance.content')}
                </p>
              </div>

              {/* 修身治世 */}
              <div style={{ padding: '2rem 0', borderBottom: '1px solid #f3f4f6' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--color-secondary)',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <span style={{
                    width: '0.5rem',
                    height: '0.5rem',
                    background: 'var(--color-accent)',
                    borderRadius: '50%',
                  }}></span>
                  {t('about.cultivation.title')}
                </h3>
                <p style={{ color: '#374151', lineHeight: 1.7 }}>
                  {t('about.cultivation.content')}
                </p>
              </div>

              {/* 扎根生活 */}
              <div style={{ padding: '2rem 0', borderBottom: '1px solid #f3f4f6'}}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--color-secondary)',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <span style={{
                    width: '0.5rem',
                    height: '0.5rem',
                    background: 'var(--color-accent)',
                    borderRadius: '50%',
                  }}></span>
                  {t('about.life.title')}
                </h3>
                <p style={{ color: '#374151', lineHeight: 1.7 }}>
                  {t('about.life.content')}
                </p>
              </div>

              {/* 结语 */}
              <div style={{ marginTop: '2.5rem' }}>
                <p 
                  style={{ 
                    textAlign: 'center', 
                    fontSize: '1.125rem', 
                    fontWeight: 600, 
                    color: 'var(--color-primary)',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                  }}
                  dangerouslySetInnerHTML={{ __html: t('about.conclusion').replace(/\n/g, '<br/>') }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 画廊预览 */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('gallery.title')}</h2>
            <p className="section-subtitle">{t('gallery.subtitle')}</p>
          </div>
          
          {/* 相册网格 */}
          <div
            className="gallery-grid"
            style={{
              gap: '1.5rem',
              maxWidth: '1200px',
              margin: '0 auto 3rem',
              padding: '0 1rem',
            }}
          >
            {albums.slice(0, 4).map((album) => (
              <Link
                key={album.id}
                to="/gallery"
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
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
                  <div style={{
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                  }}>
                    <img
                      src={album.cover}
                      alt={album.title.zh}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <p style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-accent)',
                      fontWeight: 500,
                      marginBottom: '0.5rem',
                    }}>
                      {album.date}
                    </p>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                      marginBottom: '0.5rem',
                    }}>
                      {album.title[i18n.language === 'zh' ? 'zh' : 'en']}
                    </h3>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      lineHeight: 1.5,
                    }}>
                      {album.description[i18n.language === 'zh' ? 'zh' : 'en']}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <Link to="/gallery" className="btn btn-primary">
              {t('gallery.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* 媒体报道 */}
      <section id="media" className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('media.title')}</h2>
          </div>

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            {/* 桌面端：网格布局 */}
            <div className="media-desktop">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '1.5rem',
                }}
              >
                {mediaItems.slice(0, 4).map((item) => {
                  const title = item.title[i18n.language === 'zh' ? 'zh' : 'en'];
                  const description = item.description[i18n.language === 'zh' ? 'zh' : 'en'];
                  const mediaName = item.mediaName[i18n.language === 'zh' ? 'zh' : 'en'];
                  return (
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        textDecoration: 'none',
                        background: 'white',
                        borderRadius: '0.75rem',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                      }}
                    >
                      <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                        <img
                          src={item.thumbnail}
                          alt={title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                          }}
                        />
                        {item.type === 'video' && (
                          <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(0,0,0,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                            <div style={{
                              width: '48px',
                              height: '48px',
                              borderRadius: '50%',
                              background: 'rgba(255,255,255,0.9)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                              <i className="fa fa-play" style={{ color: 'var(--color-accent)', marginLeft: '4px' }}></i>
                            </div>
                          </div>
                        )}
                        {mediaName && (
                          <div style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            background: 'var(--color-accent)',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            padding: '4px 12px',
                            borderRadius: '9999px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            zIndex: 10,
                          }}>
                            {mediaName}
                          </div>
                        )}
                      </div>
                      <div style={{ padding: '1rem' }}>
                        <h3 style={{
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          color: '#1f2937',
                          lineHeight: 1.5,
                          marginBottom: '0.5rem',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}>
                          {title}
                        </h3>
                        <p style={{
                          fontSize: '0.8125rem',
                          color: '#6b7280',
                          lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}>
                          {description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* 移动端：垂直堆叠 */}
            <div className="media-mobile" style={{
              flexDirection: 'column',
              gap: '1.5rem',
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 1rem',
            }}>
              {mediaItems.map((item, index) => {
                const title = item.title[i18n.language === 'zh' ? 'zh' : 'en'];
                const description = item.description[i18n.language === 'zh' ? 'zh' : 'en'];
                const mediaName = item.mediaName[i18n.language === 'zh' ? 'zh' : 'en'];
                return (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      background: 'white',
                      borderRadius: '0.75rem',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      animation: `fadeIn 0.5s ease forwards`,
                      animationDelay: `${index * 0.1}s`,
                      opacity: 0,
                    }}
                  >
                    <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                      <img
                        src={item.thumbnail}
                        alt={title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      {item.type === 'video' && (
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'rgba(0,0,0,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                            <i className="fa fa-play" style={{ color: 'var(--color-accent)', marginLeft: '4px', fontSize: '1.25rem' }}></i>
                          </div>
                        </div>
                      )}
                      {mediaName && (
                        <div style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          background: 'var(--color-accent)',
                          color: 'white',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          padding: '4px 12px',
                          borderRadius: '9999px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                          zIndex: 10,
                        }}>
                          {mediaName}
                        </div>
                      )}
                    </div>
                    <div style={{ padding: '1rem' }}>
                      <h3 style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#1f2937',
                        lineHeight: 1.5,
                        marginBottom: '0.5rem',
                      }}>
                        {title}
                      </h3>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        lineHeight: 1.6,
                      }}>
                        {description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 舞者预览 */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('dancers.title')}</h2>
            <p className="section-subtitle">{t('dancers.subtitle')}</p>
          </div>

          {/* 舞者网格 */}
          <div
            className="dancers-grid"
            style={{
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto 3rem',
              padding: '0 1rem',
            }}
          >
            {dancers.slice(0, 4).map((dancer) => (
              <Link
                key={dancer.id}
                to="/dancers"
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  style={{
                    background: 'white',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    height: '100%',
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
                  <div
                    style={{
                      aspectRatio: '1/1',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={dancer.image}
                      alt={dancer.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {dancer.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-accent)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {dancer.location[i18n.language === 'zh' ? 'zh' : 'en']} · {dancer.age}
                    </p>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {dancer.profession[i18n.language === 'zh' ? 'zh' : 'en']}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/dancers" className="btn btn-primary">
              {t('dancers.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* 历程 */}
      <section id="schedule" className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('schedule.title')}</h2>
            <p className="section-subtitle">{t('schedule.subtitle')}</p>
          </div>

          {/* 时间线 */}
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
            {timelineEvents.map((event, index) => {
              const monthSuffix = '';
              const daySuffix = '';
              const separator = '.';
              const monthDay = event.month
                ? `${event.month}${monthSuffix}${event.day ? separator + event.day + daySuffix : ''}`
                : '';
              
              return (
                <div
                  key={event.id}
                  className="timeline-item"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '2rem',
                    paddingBottom: index < timelineEvents.length - 1 ? '2rem' : 0,
                    marginBottom: index < timelineEvents.length - 1 ? '2rem' : 0,
                    borderBottom: index < timelineEvents.length - 1 ? '1px solid #e5e7eb' : 'none',
                  }}
                >
                  {/* 日期 */}
                  <div className="timeline-date" style={{
                    flexShrink: 0,
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                      lineHeight: 1.2,
                    }}>
                      {monthDay}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#6b7280',
                      marginTop: '0.25rem',
                    }}>
                      {event.year}
                    </div>
                  </div>

                  {/* 内容 */}
                  <div style={{ 
                    flex: 1,
                    borderLeft: '2px solid var(--color-accent)',
                    paddingLeft: '1.5rem',
                  }}>
                    {event.link ? (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: 'var(--color-primary)',
                          marginBottom: '0.5rem',
                          textDecoration: 'none',
                          display: 'inline-block',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.textDecoration = 'underline';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.textDecoration = 'none';
                        }}
                      >
                        {event.title[i18n.language === 'zh' ? 'zh' : 'en']}
                        <i className="fa fa-chevron-right" style={{ marginLeft: '0.5rem', fontSize: '0.875rem' }}></i>
                      </a>
                    ) : (
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--color-primary)',
                        marginBottom: '0.5rem',
                      }}>
                        {event.title[i18n.language === 'zh' ? 'zh' : 'en']}
                      </h3>
                    )}
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#4b5563',
                      lineHeight: 1.6,
                      marginBottom: '0.5rem',
                    }}>
                      {event.description[i18n.language === 'zh' ? 'zh' : 'en']}
                    </p>
                    <p style={{
                      fontSize: '0.75rem',
                      color: '#9ca3af',
                      marginBottom: '0.25rem',
                    }}>
                      {event.date}
                    </p>
                    {typeof event.location === 'object' && event.location.zh && (
                      <p style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-accent)',
                        fontWeight: 500,
                      }}>
                        <i className="fa fa-map-marker" style={{ marginRight: '0.25rem' }}></i>
                        {event.location[i18n.language === 'zh' ? 'zh' : 'en']}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="section section-soft">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('contact.title')}</h2>
            <p className="section-subtitle">{t('contact.subtitle')}</p>
          </div>

          {/* 联系图片 */}
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem', padding: '0 1rem' }}>
            <img
              src="https://cdn.djybrs.cn/uploads/youqing/other/contactus-pic.jpg"
              alt="联系我们"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '0.75rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              }}
            />
          </div>

          {/* 联系内容 */}
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 1rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}>
            {/* 左侧：联系信息 */}
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--color-primary)',
                marginBottom: '1.5rem',
              }}>
                {i18n.language === 'zh' ? '参与共创' : 'Join Us'}
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                color: '#4b5563',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}>
                {i18n.language === 'zh'
                  ? '作为共创艺术，「有情」是一个不会终止的舞作。我们希望继续身体的旅程，去到世界各地，为世界带去慈悲与爱的讯息。如果你希望加入我们，无论以何种身份：摄影师、舞者、场地提供者、演出主办方...欢迎与我们联络。'
                  : 'As a co-creation art, "You Qing" is an ongoing dance work. We hope to continue our physical journey to different parts of the world, bringing messages of compassion and love. If you wish to join us, in any capacity: photographer, dancer, venue provider, performance organizer... please contact us.'}
              </p>

              {/* 联系方式 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* 邮箱 */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(139, 115, 85, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                  }}>
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                      marginBottom: '0.25rem',
                    }}>
                      {i18n.language === 'zh' ? '邮箱' : 'Email'}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                      wingdancetheatre24@gmail.com
                    </p>
                  </div>
                </div>

                {/* 微信 */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(139, 115, 85, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                  }}>
                    <i className="fa fa-weixin"></i>
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                      marginBottom: '0.25rem',
                    }}>
                      {i18n.language === 'zh' ? '微信' : 'WeChat'}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                      永·舞团 Wing Dance Theatre
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧：二维码 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '2rem',
                width: '100%',
              }}>
                {/* 参与共创二维码 */}
                <div style={{ textAlign: 'center' }}>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    marginBottom: '1rem',
                    fontWeight: 500,
                  }}>
                    {i18n.language === 'zh' ? '参与共创' : 'Join Creation'}
                  </p>
                  <div style={{
                    padding: '1rem',
                    background: 'white',
                    borderRadius: '0.5rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    display: 'inline-block',
                  }}>
                    <img
                      src="/assets/wingdancetheare-wechat-qrcode-chat.jpg"
                      alt="参与共创二维码"
                      style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '0.25rem',
                      }}
                    />
                  </div>
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#9ca3af',
                    marginTop: '0.75rem',
                    lineHeight: 1.5,
                  }}>
                    {i18n.language === 'zh'
                      ? '微信扫码添加小助理\nWingDanceTheatre永·舞团'
                      : 'Scan to add assistant\nWingDanceTheatre'}
                  </p>
                </div>

                {/* 关注公众号二维码 */}
                <div style={{ textAlign: 'center' }}>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    marginBottom: '1rem',
                    fontWeight: 500,
                  }}>
                    {i18n.language === 'zh' ? '关注官方微信号' : 'Follow Official Account'}
                  </p>
                  <div style={{
                    padding: '1rem',
                    background: 'white',
                    borderRadius: '0.5rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    display: 'inline-block',
                  }}>
                    <img
                      src="/assets/wingdancetheare-wechat-qrcode.png"
                      alt="微信二维码"
                      style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '0.25rem',
                      }}
                    />
                  </div>
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#9ca3af',
                    marginTop: '0.75rem',
                    lineHeight: 1.5,
                  }}>
                    {i18n.language === 'zh'
                      ? '永·舞团\nWing Dance Theatre'
                      : 'Wing Dance Theatre\nOfficial Account'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 支持方与合作伙伴 */}
      <section id="supporters" className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {i18n.language === 'zh' ? '支持方与合作伙伴' : 'Supporters & Partners'}
            </h2>
            <p className="section-subtitle">
              {i18n.language === 'zh' ? '跨越山海，利乐有情' : 'Across mountains and seas, benefiting all sentient beings'}
            </p>
          </div>

          {/* 支持方Logo */}
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 1rem',
          }}>
            <div
              className="supporters-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.75rem',
              }}
            >
              {supporters.map((supporter) => (
                <div
                  key={supporter.id}
                  className="supporter-item"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                  title={supporter.name}
                >
                  {/* Logo图片 */}
                  <div style={{
                    width: '100%',
                    aspectRatio: '3/2',
                    borderRadius: '0.375rem',
                    background: '#f9fafb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #f3f4f6',
                    overflow: 'hidden',
                  }}>
                    <img
                      src={supporter.image}
                      alt={supporter.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        padding: '0.375rem',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (min-width: 768px) {
              .supporters-grid {
                grid-template-columns: repeat(5, 1fr) !important;
                gap: 1.5rem !important;
              }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
