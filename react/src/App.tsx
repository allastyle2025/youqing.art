import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dancers from './pages/Dancers';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Timeline from './pages/Timeline';
import Contact from './pages/Contact';
import './styles/global.css';

// 页面加载进度条组件
function PageLoadingProgress() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    // 路径变化时触发进度条
    if (location.pathname !== prevPathRef.current) {
      prevPathRef.current = location.pathname;
      setIsVisible(true);
      setProgress(0);

      // 模拟进度增长
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 80) {
            clearInterval(interval);
            return 80;
          }
          return prev + Math.random() * 20;
        });
      }, 150);

      // 清理函数
      return () => clearInterval(interval);
    }
  }, [location.pathname]);

  // 页面加载完成后完成进度条
  useEffect(() => {
    if (isVisible && progress > 0) {
      // 模拟页面加载时间
      const completeTimeout = setTimeout(() => {
        setProgress(100);
        const hideTimeout = setTimeout(() => {
          setIsVisible(false);
          setProgress(0);
        }, 300);
        return () => clearTimeout(hideTimeout);
      }, 400);

      return () => clearTimeout(completeTimeout);
    }
  }, [isVisible, progress, location.pathname]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 9999,
        background: 'rgba(255,255,255,0.2)',
      }}
    >
      <div
        style={{
          height: '100%',
          background: 'var(--color-accent)',
          width: `${Math.min(progress, 100)}%`,
          transition: progress === 100 ? 'width 0.2s ease-out' : 'width 0.1s linear',
          boxShadow: '0 0 10px var(--color-accent)',
        }}
      />
    </div>
  );
}

// 包装组件，用于在 Router 内部使用 useNavigation
function AppContent() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <PageLoadingProgress />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dancers" element={<Dancers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
