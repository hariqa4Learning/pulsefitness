import './style.css'

// Services Carousel
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('services-track');
  const prev = document.getElementById('services-prev');
  const next = document.getElementById('services-next');
  const progress = document.getElementById('services-progress');

  if (!track || !prev || !next || !progress) return;

  const scrollAmount = 320;

  const updateProgress = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    const pct = maxScroll > 0 ? ((track.scrollLeft / maxScroll) * 100) : 0;
    const clampedPct = Math.max(10, Math.min(100, pct + 10));
    progress.style.width = clampedPct + '%';
  };

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateProgress);
  updateProgress();
});
