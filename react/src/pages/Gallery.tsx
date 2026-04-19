import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { albums, type Album } from '../data/albums';
import { gallerys, type GalleryImage } from '../data/gallerys';

export default function Gallery() {
  const { t, i18n } = useTranslation();
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 选择相册
  const handleSelectAlbum = (album: Album) => {
    setSelectedAlbum(album);
    // 从 gallerys.ts 获取图片列表
    const gallery = gallerys.find(g => g.albumId === album.id);
    setImages(gallery ? gallery.images : []);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 返回相册列表
  const handleBackToAlbums = () => {
    setSelectedAlbum(null);
    setImages([]);
  };

  // 打开灯箱
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // 准备 Lightbox 的 slides 数据
  const lightboxSlides = images.map((image) => ({
    src: image.url,
    alt: image.alt,
  }));

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* 页面标题区 */}
      {!selectedAlbum && (
        <section style={{ padding: '2rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: 700,
              marginBottom: '1rem',
              color: 'var(--color-primary)',
            }}>
              {t('gallery.title')}
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
              {i18n.language === 'zh' ? '探索我们的舞蹈作品与创作过程' : 'Explore our dance works and creative process'}
            </p>
          </div>
        </section>
      )}

      {/* 相册列表 */}
      {!selectedAlbum && (
        <section className="section section-white">
          <div className="container">

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto',
              }}
            >
              {albums.map((album) => (
                <div
                  key={album.id}
                  onClick={() => handleSelectAlbum(album)}
                  style={{
                    cursor: 'pointer',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    background: 'white',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img
                      src={album.cover}
                      alt={i18n.language === 'zh' ? album.title.zh : album.title.en}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'rgba(0,0,0,0.6)',
                        color: 'white',
                        padding: '0.375rem 0.75rem',
                        borderRadius: '2rem',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                      }}
                    >
                      {album.imageCount} {i18n.language === 'zh' ? '张' : 'photos'}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-accent)',
                        fontWeight: 500,
                        marginBottom: '0.5rem',
                      }}
                    >
                      {album.date}
                    </p>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {i18n.language === 'zh' ? album.title.zh : album.title.en}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        lineHeight: 1.6,
                      }}
                    >
                      {i18n.language === 'zh' ? album.description.zh : album.description.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 图片展示 */}
      {selectedAlbum && (
        <section className="section section-soft">
          <div className="container">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={handleBackToAlbums}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  background: 'var(--color-primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-secondary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-primary)';
                }}
              >
                <i className="fa fa-chevron-left"></i>
                {i18n.language === 'zh' ? '返回相册' : 'Back to Albums'}
              </button>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                }}
              >
                {i18n.language === 'zh' ? selectedAlbum.title.zh : selectedAlbum.title.en}
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1rem',
              }}
            >
              {images.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => openLightbox(index)}
                  style={{
                    cursor: 'pointer',
                    borderRadius: '0.5rem',
                    overflow: 'hidden',
                    aspectRatio: '4/3',
                    background: '#f3f4f6',
                  }}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
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
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox 灯箱 */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={currentImageIndex}
        on={{ view: ({ index }) => setCurrentImageIndex(index) }}
      />
    </div>
  );
}
