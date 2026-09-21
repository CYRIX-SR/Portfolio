const cursor = document.querySelector('.cursor-bean');
window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.querySelector('.coffee-planet')?.style.setProperty('transform', `translateY(${Math.min(y*.035, 25)}px) rotateX(9deg) rotateZ(${y*.01}deg)`);
});
