import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t, i18n } = useTranslation();

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
            {t('nav.contact')}
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
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* 联系内容 - 图片和联系方式一行 */}
      <section className="section section-soft">
        <div className="container">
          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto 3rem',
              padding: '0 1rem',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                alignItems: 'start',
              }}
            >
              {/* 左侧：联系图片 */}
              <div>
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

              {/* 右侧：联系方式 */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {i18n.language === 'zh' ? '参与共创' : 'Join Us'}
                </h3>

                {/* 联系说明 */}
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: '#4b5563',
                    lineHeight: 1.8,
                    marginBottom: '2rem',
                  }}
                >
                  {i18n.language === 'zh'
                    ? '作为共创艺术，「有情」是一个不会终止的舞作。我们希望继续身体的旅程，去到世界各地，为世界带去慈悲与爱的讯息。如果你希望加入我们，无论以何种身份：摄影师、舞者、场地提供者、演出主办方...欢迎与我们联络。'
                    : 'As a co-creation art, "You Qing" is an ongoing dance work. We hope to continue our physical journey to different parts of the world, bringing messages of compassion and love. If you wish to join us, in any capacity: photographer, dancer, venue provider, performance organizer... please contact us.'}
                </p>

                {/* 联系方式 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* 邮箱 */}
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(139, 115, 85, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: 'var(--color-primary)',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {i18n.language === 'zh' ? '邮箱' : 'Email'}
                      </h4>
                      <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>wingdancetheatre24@gmail.com</p>
                    </div>
                  </div>

                  {/* 微信 */}
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(139, 115, 85, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.269-.03-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
                      </svg>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: 'var(--color-primary)',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {i18n.language === 'zh' ? '微信' : 'WeChat'}
                      </h4>
                      <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>永·舞团 Wing Dance Theatre</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* 二维码 - 放在下面单独一行 */}
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 0.75rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              justifyItems: 'center',
            }}
          >
            {/* 参与共创二维码 */}
            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: '#6b7280',
                  marginBottom: '0.5rem',
                  fontWeight: 500,
                }}
              >
                {i18n.language === 'zh' ? '参与共创' : 'Join Creation'}
              </p>
              <div
                style={{
                  padding: '0.5rem',
                  background: 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  display: 'inline-block',
                }}
              >
                <img
                  src="/assets/wingdancetheare-wechat-qrcode-chat.jpg"
                  alt="参与共创二维码"
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '0.25rem',
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: '0.7rem',
                  color: '#9ca3af',
                  marginTop: '0.5rem',
                  lineHeight: 1.4,
                  whiteSpace: 'pre-line',
                }}
              >
                {i18n.language === 'zh'
                  ? '微信扫码添加小助理\nWingDanceTheatre永·舞团'
                  : 'Scan to add assistant\nWingDanceTheatre'}
              </p>
            </div>

            {/* 关注公众号二维码 */}
            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: '#6b7280',
                  marginBottom: '0.5rem',
                  fontWeight: 500,
                }}
              >
                {i18n.language === 'zh' ? '关注官方微信号' : 'Follow Official Account'}
              </p>
              <div
                style={{
                  padding: '0.5rem',
                  background: 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  display: 'inline-block',
                }}
              >
                <img
                  src="/assets/wingdancetheare-wechat-qrcode.png"
                  alt="微信二维码"
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '0.25rem',
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: '0.7rem',
                  color: '#9ca3af',
                  marginTop: '0.5rem',
                  lineHeight: 1.4,
                  whiteSpace: 'pre-line',
                }}
              >
                {i18n.language === 'zh'
                  ? '永·舞团\nWing Dance Theatre'
                  : 'Wing Dance Theatre\nOfficial Account'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
