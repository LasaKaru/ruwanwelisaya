'use client';
import React, { useEffect, useRef, useState, ElementType, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

export default function FadeIn({ children, delay = 0, className = '', as: Tag = 'div' }: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setTimeout(() => setVisible(true), delay * 1000);
    };

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) { show(); return; }
    if (rect.bottom <= 0) { show(); return; }

    const io = new IntersectionObserver(
      (entries) => { if (entries.some((e) => e.isIntersecting)) { show(); io.disconnect(); } },
      { rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(node);

    const onScroll = () => {
      const r = node.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) { show(); io.disconnect(); window.removeEventListener('scroll', onScroll); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const t = setTimeout(() => { show(); io.disconnect(); window.removeEventListener('scroll', onScroll); }, 1500);
    return () => { clearTimeout(t); io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, [delay]);

  const TagAny = Tag as React.ElementType;
  return (
    <TagAny ref={ref} className={`rw-fade ${visible ? 'is-in' : ''} ${className}`}>
      {children}
    </TagAny>
  );
}
