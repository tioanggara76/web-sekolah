/* =====================================================================
   SCRIPT.JS : logika website (biasanya TIDAK perlu diubah)
   Isi teks website ada di js/config.js
   ---------------------------------------------------------------------
   DAFTAR ISI
   1. Alat bantu
   2. Template tampilan (HTML untuk tiap jenis data)
   3. Menampilkan data dari config.js ke halaman
   4. Fitur: menu, tab, angka berjalan, animasi, menu aktif, newsletter
   ===================================================================== */

(function () {
  'use strict';

  /* ------------------------- 1. ALAT BANTU ------------------------- */
  const $  = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  // Mengamankan teks agar karakter seperti < > & tidak merusak halaman
  const esc = (text) => String(text ?? '').replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Mengambil data berdasarkan alamat, contoh: get('identitas.nama')
  const get = (path) => path.split('.').reduce((obj, key) => (obj == null ? obj : obj[key]), SITE);

  // Membuat tautan WhatsApp dari nomor di config.js
  const waLink = (message) =>
    `https://wa.me/${SITE.identitas.whatsapp}?text=${encodeURIComponent(message)}`;


  /* ------------------ 2. TEMPLATE TAMPILAN (HTML) ------------------ */
  // Nama template dipanggil lewat atribut data-as di index.html
  const TEMPLATE = {
    li:    (x) => `<li>${esc(x)}</li>`,
    p:     (x) => `<p>${esc(x)}</p>`,
    span:  (x) => `<span>${esc(x)}</span>`,
    label: (x) => `<span class="pill">${esc(x)}</span>`,
    stiker: (x, i) => `<span class="stk s${i + 1}">${esc(x)}</span>`,

    jam:    ([hari, jam]) => `<li>${esc(hari)}: ${esc(jam)}</li>`,
    sosmed: (x) => `<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.nama)}</a>`,

    kartu: (x) => `
      <div class="card">
        <h3>${esc(x.judul)}</h3>
        <p class="q">${esc(x.isi)}</p>
      </div>`,

    fasilitas: (x) => `
      <div class="fac">
        <div class="ic" aria-hidden="true">${esc(x.ikon)}</div>
        <h3>${esc(x.judul)}</h3>
        <p>${esc(x.isi)}</p>
      </div>`,

    statistik: (x) => `
      <div>
        ${x.angka != null
          ? `<div class="num" data-n="${esc(x.angka)}">0</div>`
          : `<div class="num">${esc(x.teks)}</div>`}
        ${esc(x.label)}
      </div>`,

    prestasi: (x) => `<div><b>${esc(x.judul)}</b>${esc(x.isi)}</div>`,

    testimoni: (x) => `
      <div class="card">
        <p class="q">${esc(x.isi)}</p>
        <p class="who">${esc(x.nama)}</p>
      </div>`,

    berita: (x) => `
      <div class="card">
        <div class="thumb" aria-hidden="${x.foto ? 'false' : 'true'}">
          ${x.foto ? `<img src="${esc(x.foto)}" alt="${esc(x.judul)}" loading="lazy">` : esc(x.ikon)}
        </div>
        <div class="b">
          <span class="date">${esc(x.tanggal)}</span>
          <h3>${esc(x.judul)}</h3>
          <p class="q">${esc(x.ringkas)}</p>
        </div>
      </div>`
  };


  /* -------- 3. MENAMPILKAN DATA config.js KE HALAMAN -------- */
  function renderData() {
    // Daftar/list  ->  <div data-render="fasilitas" data-as="fasilitas">
    $$('[data-render]').forEach((el) => {
      let items = get(el.dataset.render) || [];
      const repeat = Number(el.dataset.repeat || 1);
      if (repeat > 1) items = Array.from({ length: repeat }, () => items).flat();
      el.innerHTML = items.map(TEMPLATE[el.dataset.as]).join('');
    });

    // Teks tunggal  ->  <span data-bind="identitas.nama">
    $$('[data-bind]').forEach((el) => { el.textContent = get(el.dataset.bind) ?? ''; });

    // Tautan  ->  <a data-href="identitas.petaUrl">
    $$('[data-href]').forEach((el) => { el.href = get(el.dataset.href) || '#'; });

    // Tautan WhatsApp  ->  <a data-wa="Pesan awal">  (atau alamat data di config)
    $$('[data-wa]').forEach((el) => {
      el.href = waLink(get(el.dataset.wa) || el.dataset.wa);
    });

    // Foto opsional  ->  <div data-foto="sambutan.foto"> (isi bawaan dipakai jika kosong)
    $$('[data-foto]').forEach((el) => {
      const src = get(el.dataset.foto);
      if (src) el.innerHTML = `<img src="${esc(src)}" alt="${esc(el.dataset.alt || '')}">`;
    });

    // Tahun otomatis di footer
    $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

    document.title = `${SITE.identitas.nama} — ${SITE.identitas.jenjang}`;
  }


  /* ------------------------- 4. FITUR ------------------------- */

  // --- Menu mobile ---
  function initMenu() {
    const burger = $('.burger');
    const menu = $('#menu');

    const close = () => {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
      burger.textContent = '☰';
    };

    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
      burger.textContent = open ? '✕' : '☰';
    });
    $$('#menu a').forEach((a) => a.addEventListener('click', close));
    addEventListener('resize', () => { if (innerWidth > 1120) close(); });
  }

  // --- Tab SD / SMP ---
  function initTabs() {
    const tabs = $$('[role=tab]');

    const show = (key) => tabs.forEach((tab) => {
      const selected = tab.id === 't-' + key;
      tab.setAttribute('aria-selected', selected);
      tab.tabIndex = selected ? 0 : -1;
      $('#' + tab.getAttribute('aria-controls')).classList.toggle('on', selected);
    });

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => show(tab.id.slice(2)));
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          const next = tabs[(i + 1) % tabs.length];
          next.focus();
          show(next.id.slice(2));
        }
      });
    });

    // Tombol "Jelajahi Tingkat SD/SMP" di hero membuka tab yang sesuai
    $$('[data-tab]').forEach((btn) => btn.addEventListener('click', () => show(btn.dataset.tab)));
  }

  // --- Angka statistik berjalan naik ---
  function initCounters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);

        const el = entry.target;
        const target = Number(el.dataset.n);
        const duration = 1400;
        const start = performance.now();

        (function step(now) {
          const p = Math.min((now - start) / duration, 1);
          el.textContent = Math.round(target * p).toLocaleString('id-ID') + (p === 1 ? '+' : '');
          if (p < 1) requestAnimationFrame(step);
        })(start);
      });
    }, { threshold: 0.5 });

    $$('[data-n]').forEach((el) => observer.observe(el));
  }

  // --- Animasi muncul saat di-scroll ---
  function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('in');
        observer.unobserve(el);
        setTimeout(() => {                       // lepas kelas agar efek hover kartu tetap jalan
          el.classList.remove('rv', 'in');
          el.style.transitionDelay = '';
        }, 900);
      });
    }, { threshold: 0.12 });

    $$('.card, .fac, .ach div, .sb').forEach((el, i) => {
      el.classList.add('rv');
      el.style.transitionDelay = (i % 3) * 90 + 'ms';
      observer.observe(el);
    });
  }

  // --- Menu menandai bagian yang sedang dibaca ---
  function initActiveMenu() {
    const links = $$('nav a.l');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    $$('main section[id]').forEach((section) => observer.observe(section));
  }

  // --- Form berlangganan (contoh: baru memeriksa format email) ---
  function initNewsletter() {
    $('#sub').addEventListener('click', () => {
      const input = $('#em');
      const toast = $('#toast');
      const valid = /^\S+@\S+\.\S+$/.test(input.value);

      toast.textContent = valid
        ? 'Terima kasih, Anda sudah berlangganan.'
        : 'Masukkan alamat email yang valid.';
      toast.style.display = 'block';
      if (valid) input.value = '';
      setTimeout(() => { toast.style.display = 'none'; }, 3000);
    });
  }


  /* ------------------------ MULAI ------------------------ */
  // Urutan penting: tampilkan data dulu, baru aktifkan fitur
  renderData();
  initMenu();
  initTabs();
  initCounters();
  initReveal();
  initActiveMenu();
  initNewsletter();
})();