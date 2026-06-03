'use client';
import { useEffect, useState } from 'react';

interface AdSlotProps {
  id: string;
  size: 'leaderboard' | 'rectangle';
  label?: string;
}

export default function AdSlot({ id, size, label }: AdSlotProps) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`rw_ad_${id}`);
      if (saved) setHtml(saved);
    } catch {}
  }, [id]);

  const sizeClass = size === 'leaderboard' ? 'rw-ad--leaderboard' : 'rw-ad--rectangle';

  if (html) {
    return (
      <div className={`rw-ad ${sizeClass}`}>
        <span className="rw-ad__pin">Ad</span>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
      </div>
    );
  }

  return (
    <div className={`rw-ad rw-ad--empty ${sizeClass}`}>
      <div className="rw-ad__pattern"/>
      <div className="rw-ad__inner">
        <div className="rw-ad__eyebrow">Advertisement</div>
        <div className="rw-ad__id">{label || id}</div>
        <div className="rw-ad__hint">Configure in <strong>Admin → Ads</strong></div>
      </div>
    </div>
  );
}
