/* =====================================================================
   SCRIPT.JS : fitur halaman (tidak ada teks website di sini)
   ===================================================================== */
(function () {
  'use strict';
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* 1. Menu: transparan di atas, putih setelah di-scroll (atau saat menu ponsel dibuka) */
  const header = $('#siteHeader');
  const menu = $('#navMenu');
  let menuOpen = false;
  let ticking = false;

  const updateHeader = () => header.classList.toggle('solid', window.scrollY > 30 || menuOpen);

  addEventListener('scroll', () => {            // dihitung sekali per frame agar scroll mulus
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateHeader(); ticking = false; });
  }, { passive: true });

  menu.addEventListener('show.bs.collapse', () => { menuOpen = true; updateHeader(); });
  menu.addEventListener('hidden.bs.collapse', () => { menuOpen = false; updateHeader(); });
  updateHeader();

  /* 2. Menu ponsel menutup sendiri setelah link diklik (kecuali pembuka dropdown) */
  $$('#navMenu a:not(.dropdown-toggle)').forEach((a) => a.addEventListener('click', () => {
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  }));

  /* 3. Tombol "Jelajahi SD / SMP" di hero membuka tab yang sesuai */
  $$('[data-tab]').forEach((btn) => btn.addEventListener('click', () =>
    bootstrap.Tab.getOrCreateInstance($('#' + btn.dataset.tab)).show()));

  /* 4. Pita ekstrakurikuler: digandakan otomatis agar berjalan tanpa putus */
  const track = $('#marqueeTrack');
  if (track) track.insertAdjacentHTML('beforeend', track.innerHTML);

  /* 5. Angka statistik berjalan naik saat terlihat */
  const counter = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    counter.unobserve(entry.target);
    const el = entry.target, target = Number(el.dataset.target), start = performance.now();
    (function step(now) {
      const p = Math.min((now - start) / 1200, 1);
      el.textContent = Math.round(target * p).toLocaleString('id-ID') + '+';
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }), { threshold: 0.5 });
  $$('[data-target]').forEach((el) => counter.observe(el));

  /* 6. Tahun di footer otomatis */
  $('#year').textContent = new Date().getFullYear();

  /* 7. Form langganan (contoh: belum terhubung ke server) */
  const formSub = $('#formLangganan');
  if (formSub) {
    formSub.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = $('#emailSub');
      $('#toastText').textContent = 'Terima kasih! Email ' + input.value + ' telah terdaftar.';
      bootstrap.Toast.getOrCreateInstance($('#toast'), { delay: 3500 }).show();
      input.value = '';
    });
  }
})();