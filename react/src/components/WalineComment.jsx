import React, { useEffect, useRef } from 'react';
import { init } from '@waline/client';
import '@waline/client/style';

const WalineComment = ({ serverURL, path }) => {
  const containerRef = useRef(null);
  const walineRef = useRef(null);

  useEffect(() => {
    // 初始化 Waline
    walineRef.current = init({
      el: containerRef.current,
      serverURL: serverURL,      // 👈 你的服务端地址写在这里
      path: path,                // 当前页面路径
    });

    // 组件卸载时销毁实例，避免内存泄漏
    return () => {
      if (walineRef.current) {
        walineRef.current.destroy();
      }
    };
  }, [serverURL, path]);

  return <div ref={containerRef} />;
};

export default WalineComment;