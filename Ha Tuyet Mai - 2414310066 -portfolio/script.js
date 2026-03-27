// ===== ANIMATION KHI CUỘN TRANG =====
// Tạo một "người quan sát" — theo dõi các phần tử khi chúng xuất hiện trên màn hình
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Khi phần tử xuất hiện → thêm class "hien" để nó hiện ra
      entry.target.classList.add('hien');

      // Nếu là thanh kỹ năng → chạy animation thanh tiến trình
      const bar = entry.target.querySelector('.skill-fill');
      if (bar) {
        bar.style.width = bar.dataset.width + '%';
      }
    }
  });
}, { threshold: 0.15 });

// Áp dụng cho tất cả phần tử có class "hien-dan"
document.querySelectorAll('.hien-dan').forEach(el => observer.observe(el));

// ===== THÊM CLASS ANIMATION CHO CÁC PHẦN TỬ =====
// Các phần tử này sẽ ẩn đi và hiện ra khi cuộn đến
const phanTuCanHien = [
  '.about-content',
  '.skill-card',
  '.project-card',
  '.contact-sub',
  '.contact-links',
  '.stat'
];

phanTuCanHien.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('hien-dan');
    observer.observe(el);
  });
});

// ===== NAVBAR HIGHLIGHT KHI CUỘN =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#8C2F39'; // màu hồng đậm khi active
    }
  });
});

// ===== MUSIC PLAYER =====
function toggleMusic(wrapper) {
  const albumImg = wrapper.querySelector('.album-circle');
  const ytLink = wrapper.closest('.music-player').querySelector('.yt-open-btn');
  // Spin animation visual feedback
  albumImg.classList.toggle('spinning');
  // Open YouTube
  if (ytLink) window.open(ytLink.href, '_blank');
}