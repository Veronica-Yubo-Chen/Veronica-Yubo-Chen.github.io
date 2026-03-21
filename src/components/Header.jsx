import { useEffect } from 'react';
import { CONTACT_LINKS } from '../data/portfolioData';

export default function Header() {
  // Inject Tenor embed script once
  useEffect(() => {
    if (document.querySelector('script[src*="tenor.com/embed.js"]')) return;
    const s = document.createElement('script');
    s.src = 'https://tenor.com/embed.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <header>
      <div className="container">
        <div className="lp-gif-wrapper" role="img" aria-label="Animated Little Prince GIF (windy)">
          <div
            className="tenor-gif-embed"
            data-postid="7976072"
            data-share-method="host"
            data-aspect-ratio="1.78571"
            data-width="100%"
          >
            <a href="https://tenor.com/view/el-principito-windy-gif-7976072" rel="noopener" target="_blank">
              El Principito GIF
            </a>{' '}
            from{' '}
            <a href="https://tenor.com/search/el-gifs" rel="noopener" target="_blank">
              El GIFs
            </a>
          </div>
        </div>
        <img src="/profile-photo.png" alt="Yubo Chen profile photo" className="profile-img" />
        <h1>Yubo Chen (Veronica)</h1>
        <p className="subtitle">Applied AI/ML Engineer | Brisbane, Australia</p>
        <div className="header-contact-info">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="header-contact-item"
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(link.download ? { download: true } : {})}
            >
              <span className="contact-icon">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
