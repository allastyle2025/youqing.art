import { useState, useEffect } from 'react';

interface DeviceInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ScreenInfo {
  width: number;
  height: number;
  availWidth: number;
  availHeight: number;
  colorDepth: number;
  pixelRatio: number;
  orientation: string;
}

export default function DeviceInfoModal({ isOpen, onClose }: DeviceInfoModalProps) {
  const [screenInfo, setScreenInfo] = useState<ScreenInfo>({
    width: 0,
    height: 0,
    availWidth: 0,
    availHeight: 0,
    colorDepth: 0,
    pixelRatio: 0,
    orientation: '',
  });

  useEffect(() => {
    if (isOpen) {
      const updateScreenInfo = () => {
        setScreenInfo({
          width: window.screen.width,
          height: window.screen.height,
          availWidth: window.screen.availWidth,
          availHeight: window.screen.availHeight,
          colorDepth: window.screen.colorDepth,
          pixelRatio: window.devicePixelRatio,
          orientation: window.screen.orientation?.type || 'unknown',
        });
      };

      updateScreenInfo();
      window.addEventListener('resize', updateScreenInfo);
      window.addEventListener('orientationchange', updateScreenInfo);

      return () => {
        window.removeEventListener('resize', updateScreenInfo);
        window.removeEventListener('orientationchange', updateScreenInfo);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // 计算CSS像素尺寸
  const cssWidth = Math.round(screenInfo.width / screenInfo.pixelRatio);
  const cssHeight = Math.round(screenInfo.height / screenInfo.pixelRatio);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#333' }}>📱 设备信息</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#666',
              padding: '0.25rem',
            }}
          >
            ×
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* 屏幕尺寸 */}
          <div
            style={{
              background: '#f8f9fa',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #e9ecef',
            }}
          >
            <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '0.875rem', color: '#666' }}>屏幕尺寸</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#999' }}>物理宽度</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#333' }}>{screenInfo.width}px</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#999' }}>物理高度</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#333' }}>{screenInfo.height}px</div>
              </div>
            </div>
          </div>

          {/* CSS分辨率 */}
          <div
            style={{
              background: '#f8f9fa',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #e9ecef',
            }}
          >
            <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '0.875rem', color: '#666' }}>CSS分辨率</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#999' }}>CSS宽度</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#28a745' }}>{cssWidth}px</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#999' }}>CSS高度</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#28a745' }}>{cssHeight}px</div>
              </div>
            </div>
          </div>

          {/* 其他信息 */}
          <div
            style={{
              background: '#f8f9fa',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #e9ecef',
            }}
          >
            <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '0.875rem', color: '#666' }}>设备参数</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#999' }}>设备像素比 (DPR)</div>
                <div style={{ fontSize: '1rem', fontWeight: '600', color: '#333' }}>{screenInfo.pixelRatio}x</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#999' }}>色彩深度</div>
                <div style={{ fontSize: '1rem', fontWeight: '600', color: '#333' }}>{screenInfo.colorDepth}bit</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#999' }}>屏幕方向</div>
                <div style={{ fontSize: '1rem', fontWeight: '600', color: '#333' }}>
                  {screenInfo.orientation.includes('portrait') ? '竖屏' : '横屏'}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#999' }}>可用尺寸</div>
                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#333' }}>
                  {screenInfo.availWidth}×{screenInfo.availHeight}
                </div>
              </div>
            </div>
          </div>

          {/* 设备类型判断 */}
          <div
            style={{
              background: '#e7f3ff',
              padding: '0.75rem',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '0.875rem', color: '#0066cc' }}>
              {cssWidth <= 375 && 'iPhone SE / 小型手机'}
              {cssWidth > 375 && cssWidth <= 414 && 'iPhone 标准尺寸'}
              {cssWidth > 414 && cssWidth <= 768 && '大屏手机 / 平板'}
              {cssWidth > 768 && '桌面设备'}
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: '1.5rem',
            width: '100%',
            padding: '0.75rem',
            background: 'var(--color-primary, #8B4513)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          关闭
        </button>
      </div>
    </div>
  );
}
