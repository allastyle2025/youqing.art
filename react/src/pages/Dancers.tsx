import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { dancers, musicians, type Dancer, type Musician } from '../data/dancers';

// 加载动画组件
function LoadingSpinner() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        minHeight: '400px',
      }}
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          border: '4px solid rgba(139, 115, 85, 0.2)',
          borderTop: '4px solid var(--color-accent)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <p
        style={{
          marginTop: '1.5rem',
          color: 'var(--color-primary)',
          fontSize: '1rem',
          fontWeight: 500,
        }}
      >
        加载中...
      </p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function Dancers() {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  // 模拟数据加载
  useEffect(() => {
    // 模拟加载延迟，让加载动画可见
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* 页面标题区 */}
      <div
        style={{
          paddingTop: '2rem',
          paddingBottom: '2rem',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'var(--color-primary)',
              marginBottom: '1rem',
            }}
          >
            {i18n.language === 'zh' ? '共创舞者' : 'Co-creating Dancers'}
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
              ? '来自天南海北的素人舞者，用身体讲述地球之爱的故事'
              : 'Amateur dancers from all over, telling stories of love for the earth'}
          </p>
        </div>
      </div>

      {/* 舞者网格 */}
      <section className="section section-white">
        <div className="container">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div
              className="dancers-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto',
              }}
            >
              {dancers.map((dancer) => (
                <DancerCard key={dancer.id} dancer={dancer} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 乐师网格 */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {i18n.language === 'zh' ? '共创乐师' : 'Co-creating Musicians'}
            </h2>
            <p className="section-subtitle">
              {i18n.language === 'zh'
                ? '用音乐为舞蹈增添灵魂，共同传递地球之爱的音乐家'
                : 'Musicians who add soul to dance and convey love for the earth'}
            </p>
          </div>

          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div
              className="dancers-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto',
              }}
            >
              {musicians.map((musician) => (
                <MusicianCard key={musician.id} musician={musician} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 联系区域 */}
      <section
        style={{
          padding: '6rem 0',
          background: 'var(--color-primary)',
          color: 'white',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
            }}
          >
            {i18n.language === 'zh' ? '参与共创' : 'Join Us'}
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '700px',
              margin: '0 auto 3rem',
              lineHeight: 1.8,
            }}
          >
            {i18n.language === 'zh' ? (
              <>
                作为共创艺术，「有情」是一个不会终止的舞作。我们希望继续身体的旅程，去到世界各地，为世界带去慈悲与爱的讯息。
                <br />
                如果你希望加入我们，无论以何种身份：摄影师、舞者、场地提供者、演出主办方...
                <br />
                欢迎与我们联络。
              </>
            ) : (
              <>
                As a collaborative art form, "You Qing" is an ongoing dance work. We hope to continue the journey of the body,
                going to all parts of the world, bringing messages of compassion and love.
                <br />
                If you wish to join us, in any capacity: photographer, dancer, venue provider, performance organizer...
                <br />
                Please contact us.
              </>
            )}
          </p>

          {/* 小助理二维码 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '1.5rem' }}>
              {i18n.language === 'zh' ? '参与共创请联系' : 'Contact us to participate'}
            </p>
            <div
              style={{
                padding: '1rem',
                background: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              }}
            >
              <img
                src="/assets/wingdancetheare-wechat-qrcode-chat.jpg"
                alt={i18n.language === 'zh' ? '小助理二维码' : 'Contact QR Code'}
                style={{
                  width: '8rem',
                  height: '8rem',
                  borderRadius: '0.375rem',
                }}
              />
            </div>
            <p style={{ fontSize: '0.875rem', fontWeight: 500, marginTop: '1.5rem' }}>
              WingDanceTheatre永·舞团
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// 舞者卡片组件 - 参照 Home.tsx 样式
function DancerCard({ dancer }: { dancer: Dancer }) {
  const { i18n } = useTranslation();

  return (
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
          alt={i18n.language === 'zh' ? dancer.name : dancer.nameEn}
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
          {i18n.language === 'zh' ? dancer.name : dancer.nameEn}
        </h3>
        <p
          style={{
            fontSize: '0.75rem',
            color: '#6b7280',
            marginBottom: '0.5rem',
          }}
        >
          {dancer.age ? `${dancer.age}, ` : ''}{dancer.location[i18n.language === 'zh' ? 'zh' : 'en']}
        </p>
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-accent)',
            fontWeight: 600,
            lineHeight: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            marginBottom: '0.75rem',
          }}
        >
          {dancer.profession[i18n.language === 'zh' ? 'zh' : 'en']}
        </p>
        <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '0.75rem' }}>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#374151',
              lineHeight: 1.6,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontStyle: 'italic',
            }}
          >
            "{dancer.quote[i18n.language === 'zh' ? 'zh' : 'en']}"
          </p>
        </div>
      </div>
    </div>
  );
}

// 乐师卡片组件 - 参照舞者卡片样式
function MusicianCard({ musician }: { musician: Musician }) {
  const { i18n } = useTranslation();

  return (
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
          src={musician.image}
          alt={i18n.language === 'zh' ? musician.name : musician.nameEn}
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
          {i18n.language === 'zh' ? musician.name : musician.nameEn}
        </h3>
        <p
          style={{
            fontSize: '0.75rem',
            color: '#6b7280',
            marginBottom: '0.5rem',
          }}
        >
          {musician.age ? `${musician.age}, ` : ''}{musician.location[i18n.language === 'zh' ? 'zh' : 'en']}
        </p>
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-accent)',
            fontWeight: 600,
            lineHeight: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            marginBottom: '0.75rem',
          }}
        >
          {musician.profession[i18n.language === 'zh' ? 'zh' : 'en']}
        </p>
        <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '0.75rem' }}>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#374151',
              lineHeight: 1.6,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontStyle: 'italic',
            }}
          >
            "{musician.quote[i18n.language === 'zh' ? 'zh' : 'en']}"
          </p>
        </div>
      </div>
    </div>
  );
}
