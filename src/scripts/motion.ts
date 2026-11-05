const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target as HTMLElement;
      element.animate([
        { opacity: 0.35, transform: 'translateY(18px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 650, easing: 'cubic-bezier(.2,.65,.3,1)' });
      observer.unobserve(element);
    });
  }, { threshold: 0.08 });
  elements.forEach(element => observer.observe(element));
  reducedMotion.addEventListener('change', event => {
    if (event.matches) { observer.disconnect(); elements.forEach(element => element.getAnimations().forEach(animation => animation.finish())); }
  });
}
