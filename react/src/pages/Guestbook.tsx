import { useTranslation } from 'react-i18next';
import WalineComment from '../components/WalineComment';

export default function Guestbook() {
  const { i18n } = useTranslation();

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
            {i18n.language === 'zh' ? '留言板' : 'Guestbook'}
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
              ? '欢迎留下您的想法、建议或祝福，与有情共同成长' 
              : 'Welcome to share your thoughts, suggestions, or blessings. Grow with You Qing'}
          </p>
        </div>
      </section>

      {/* 留言板内容区 */}
      <section className="section section-soft">
        <div className="container">
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              background: 'white',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            }}
          >
            {/* 欢迎语 */}
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                {i18n.language === 'zh' ? '有话想说？' : 'Have something to say?'}
              </h2>
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: '#6b7280',
                  lineHeight: 1.6,
                }}
              >
                {i18n.language === 'zh'
                  ? '无论您是对「有情」项目感兴趣，还是想分享您的感悟，或者只是想说声加油，我们都非常期待听到您的声音。'
                  : 'Whether you are interested in the "You Qing" project, want to share your insights, or just want to say hello, we look forward to hearing from you.'}
              </p>
            </div>

            {/* Waline 评论组件 */}
            <WalineComment
              //serverURL="https://waline-youqing-8zno910ic-guoruis-projects.vercel.app/"
              //serverURL="https://www.youqing.art/"
              serverURL="https://waline-youqing.vercel.app/"
              path="/guestbook"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
