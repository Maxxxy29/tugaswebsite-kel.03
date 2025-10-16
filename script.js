document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Pesan berhasil dikirim! (Simulasi)');
      form.reset();
    });
  }
});
