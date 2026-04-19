import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18n from '../i18n';

interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: React.ReactNode;
  qrcode?: string;
  qrcodeLabel?: string;
}

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks: SocialLink[] = [
    {
      id: 'wechat',
      name: '微信',
      href: 'https://mp.weixin.qq.com/s/iiSXm13SURaDznRt_jW4WQ',
      icon: <i className="fa fa-weixin"></i>,
      qrcode: '/assets/wingdancetheare-wechat-qrcode.png',
      qrcodeLabel: '微信公众号',
    },
    {
      id: 'bilibili',
      name: 'B站',
      href: 'https://space.bilibili.com/1534780280',
      icon: <img src="/assets/icons/bilibili_icon.svg" alt="B站" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />,
      qrcode: '/assets/bilibili-qrcode.jpg',
      qrcodeLabel: 'B站',
    },
    {
      id: 'xiaohongshu',
      name: '小红书',
      href: 'https://www.xiaohongshu.com/user/profile/64590f57000000001002bd2e',
      icon: <img src="/assets/icons/redbook.svg" alt="小红书" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />,
      qrcode: '/assets/redbook-qrcode.jpg',
      qrcodeLabel: '小红书',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      href: 'https://www.youtube.com/@wingdancetheatre7529',
      icon: <i className="fa fa-youtube-play"></i>,
      qrcode: '/assets/youtube-qrcode.jpg',
      qrcodeLabel: 'YouTube',
    },
  ];

  return (
    <footer style={{
      background: 'var(--color-primary)',
      color: 'white',
      padding: '4rem 0 2rem',
    }}>
      <div className="container">
        {/* 主要内容 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* 品牌 */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 700,
              marginBottom: '1rem',
            }}>
              {i18n.language === 'zh' ? '有情' : 'You Qing'}
            </h3>
            <p style={{
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.6,
            }}>
              {i18n.language === 'zh'
                ? '素人共创生态舞作，用身体传递爱与关切'
                : 'Amateur co-creation eco-dance, conveying love and care through the body'}
            </p>
          </div>

          {/* 页面 */}
          <div>
            <h4 style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '1rem',
            }}>
              {i18n.language === 'zh' ? '页面' : 'Pages'}
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <li>
                <Link to="/" style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                }}>
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                }}>
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/dancers" style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                }}>
                  {t('nav.dancers')}
                </Link>
              </li>
              <li>
                <Link to="/testimonials" style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                }}>
                  {t('nav.testimonials')}
                </Link>
              </li>
            </ul>
          </div>

          {/* 参与 */}
          <div>
            <h4 style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '1rem',
            }}>
              {i18n.language === 'zh' ? '参与' : 'Join'}
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <li>
                <a href="/#contact" style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                }}>
                  {i18n.language === 'zh' ? '成为舞者' : 'Become a Dancer'}
                </a>
              </li>
            </ul>
          </div>

          {/* 社交 */}
          <div>
            <h4 style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '1rem',
            }}>
              {i18n.language === 'zh' ? '社交' : 'Social'}
            </h4>
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
            }}>
              {socialLinks.map((social) => (
                <div
                  key={social.id}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setHoveredSocial(social.id)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: hoveredSocial === social.id ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'background 0.3s ease',
                    }}
                  >
                    {social.icon}
                  </a>

                  {/* 二维码弹出 */}
                  {social.qrcode && hoveredSocial === social.id && (
                    <>
                      <div style={{
                        position: 'absolute',
                        bottom: 'calc(100% + 16px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'white',
                        padding: '1rem',
                        borderRadius: '0.5rem',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                        zIndex: 50,
                        width: '140px',
                      }}>
                        <img
                          src={social.qrcode}
                          alt={`${social.name}二维码`}
                          style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'contain',
                            display: 'block',
                            margin: '0 auto',
                          }}
                        />
                        <p style={{
                          fontSize: '0.75rem',
                          textAlign: 'center',
                          color: '#4b5563',
                          marginTop: '0.5rem',
                        }}>
                          {social.qrcodeLabel}
                        </p>
                      </div>
                      {/* 箭头 */}
                      <div style={{
                        position: 'absolute',
                        bottom: 'calc(100% + 8px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderTop: '6px solid white',
                        zIndex: 51,
                      }} />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 版权 */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: 'rgba(255,255,255,0.6)',
          }}>
            © {currentYear} Wing Dance Theatre. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
