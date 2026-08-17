// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Story filter (Stories page)
const filterRow = document.getElementById('filterRow');
const storyGrid = document.getElementById('storyGrid');
if (filterRow && storyGrid) {
  const buttons = filterRow.querySelectorAll('.filter-btn');
  const cards = storyGrid.querySelectorAll('.card');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.cat === filter) ? '' : 'none';
      });
    });
  });
}

// Hero route line draw-in (skipped if reduced motion is preferred)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const heroPath = document.querySelector('.hero-route path');
if (heroPath && !prefersReducedMotion) {
  const length = heroPath.getTotalLength();
  heroPath.style.strokeDasharray = `1 10`;
  heroPath.style.opacity = '0';
  setTimeout(() => {
    heroPath.style.transition = 'opacity 1.2s ease';
    heroPath.style.opacity = '1';
  }, 200);
}
