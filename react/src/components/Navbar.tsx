import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import DeviceInfoModal from './DeviceInfoModal';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDeviceInfoOpen, setIsDeviceInfoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 禁止背景滚动当菜单打开时
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  const isHome = location.pathname === '/';
  const isDark = isScrolled || !isHome;

  const navLinks = [
    { to: '/', label: t('nav.home'), isAnchor: false },
    { to: '/gallery', label: t('nav.gallery'), isAnchor: false },
    { to: '/dancers', label: t('nav.dancers'), isAnchor: false },
    { to: '/timeline', label: t('nav.schedule'), isAnchor: false },
    { to: '/testimonials', label: t('nav.testimonials'), isAnchor: false },
    { to: '/guestbook', label: i18n.language === 'zh' ? '留言板' : 'Guestbook', isAnchor: false },
  ];

  // 处理锚点链接点击
  const handleAnchorClick = (e: React.MouseEvent, anchor: string) => {
    e.preventDefault();
    // 如果在其他页面，先跳转到首页
    if (location.pathname !== '/') {
      window.location.href = '/' + anchor;
      return;
    }
    // 在首页时平滑滚动到对应区域
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${isScrolled || !isHome ? 'navbar-solid' : 'navbar-transparent'}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img 
              src="/assets/images/youqing_logo.png" 
              alt="You Qing Logo" 
            />
            <span style={{ color: isDark ? 'var(--color-primary)' : 'white' }}>有情</span>
          </Link>

          <nav className="navbar-nav">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return link.isAnchor ? (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => handleAnchorClick(e, link.to.replace('/', ''))}
                  className="navbar-link"
                  style={{
                    color: isDark ? 'var(--color-dark)' : 'white',
                    position: 'relative',
                    paddingBottom: '0.25rem',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--color-accent)',
                        borderRadius: '1px',
                      }}
                    />
                  )}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="navbar-link"
                  style={{
                    color: isDark ? 'var(--color-dark)' : 'white',
                    position: 'relative',
                    paddingBottom: '0.25rem',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--color-accent)',
                        borderRadius: '1px',
                      }}
                    />
                  )}
                </Link>
              );
            })}
            <Link to="/contact" className="navbar-btn">
              {t('nav.contact')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="lang-toggle"
              style={{ color: isDark ? 'var(--color-dark)' : 'white' }}
            >
              {i18n.language === 'zh' ? 'EN' : '中文'}
            </button>
          </nav>

          {/* 移动端操作区 */}
          <div className="mobile-actions">
            <button
              onClick={toggleLanguage}
              className="mobile-lang-toggle"
              style={{ color: isDark ? 'var(--color-dark)' : 'white' }}
            >
              {i18n.language === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              className="mobile-menu-btn"
              style={{ color: isDark ? 'var(--color-dark)' : 'white' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
            >
              <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* 全屏移动端菜单 */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)} />
      
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <nav className="mobile-nav">
            {navLinks.map((link, index) => (
              link.isAnchor ? (
                <a
                  key={link.to}
                  href={link.to}
                  className="mobile-nav-link"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={(e) => {
                    handleAnchorClick(e, link.to.replace('/', ''));
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="mobile-nav-number">0{index + 1}</span>
                  <span className="mobile-nav-label">{link.label}</span>
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="mobile-nav-link"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mobile-nav-number">0{index + 1}</span>
                  <span className="mobile-nav-label">{link.label}</span>
                </Link>
              )
            ))}
          </nav>
          
          <div className="mobile-menu-footer">
            <button
              className="mobile-device-info-btn"
              data-device-info-btn
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsDeviceInfoOpen(true);
              }}
              style={{
                marginBottom: '1rem',
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                border: '1px solid var(--color-primary)',
                borderRadius: '4px',
                color: 'var(--color-primary)',
                fontSize: '0.875rem',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              📱 设备信息
            </button>
            <Link
              to="/contact"
              className="mobile-contact-btn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>
      
      {/* 设备信息弹窗 */}
      <DeviceInfoModal 
        isOpen={isDeviceInfoOpen} 
        onClose={() => setIsDeviceInfoOpen(false)} 
      />
    </>
  );
}
