import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
      0: { items: 1 },
      568: { items: 5 },
      1024: { items: 10 },
  };

  const items = [
    <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="images/partner.png" alt="" onDragStart={handleDragStart} role="presentation" /></a>,
    <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="images/partner.png" alt="" onDragStart={handleDragStart} role="presentation" /></a>,
    <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="images/partner.png" alt="" onDragStart={handleDragStart} role="presentation" /></a>,
    <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="images/partner.png" alt="" onDragStart={handleDragStart} role="presentation" /></a>,
    <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="images/partner.png" alt="" onDragStart={handleDragStart} role="presentation" /></a>,
    <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="images/partner.png" alt="" onDragStart={handleDragStart} role="presentation" /></a>,
    <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="images/partner.png" alt="" onDragStart={handleDragStart} role="presentation" /></a>,
    <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="images/partner.png" alt="" onDragStart={handleDragStart} role="presentation" /></a>,
    <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="images/partner.png" alt="" onDragStart={handleDragStart} role="presentation" /></a>,
    <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="images/partner.png" alt="" onDragStart={handleDragStart} role="presentation" /></a>,
    <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="images/partner.png" alt="" onDragStart={handleDragStart} role="presentation" /></a>,
    <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src="images/partner.png" alt="" onDragStart={handleDragStart} role="presentation" /></a>,
  ];

  return (
    <div className="partners">
      <h1 className="partners-title"> {t('partner-footer')}</h1>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
      <footer>Copyright &copy; 2022 TASO ry</footer>
    </div>
  );
}
