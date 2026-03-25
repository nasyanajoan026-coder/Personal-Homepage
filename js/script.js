// ===== NAVBAR =====
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== BLOG MODAL =====
const blogData = [
  {
    id: 1,
    category: 'rebana',
    emoji: '🥁',
    title: 'Perjalanan Pertamaku di Rebana Gereja',
    date: '10 Februari 2026',
    excerpt: 'Siapa sangka, bergabung di tim Rebana justru menjadi salah satu keputusan terbaik dalam hidupku selama di bangku kuliah...',
    content: `
      <p>Siapa sangka, bergabung di tim Rebana Gereja justru menjadi salah satu keputusan terbaik yang pernah aku ambil selama di bangku kuliah. Awalnya aku ragu — aku bukan pemain perkusi profesional, dan rasanya tidak percaya diri untuk tampil di depan jemaat.</p>
      <p>Tapi ternyata, Rebana bukan sekadar soal teknik memukul rebana dengan benar. Ini soal kebersamaan, soal rasa syukur yang dituangkan lewat irama dan harmoni bersama. Latihan pertamaku cukup kacau — ritme sering meleset, dan tanganku belum terbiasa dengan pola pukulan yang diinstruksikan. Tapi kakak-kakak di tim sangat sabar mengajarkan.</p>
      <p>Kini, setelah beberapa bulan bergabung, aku sudah bisa mengikuti penampilan di beberapa kesempatan ibadah. Rasanya luar biasa — ada kepuasan tersendiri ketika melihat jemaat tersenyum dan ikut larut dalam nuansa doa yang dibangun lewat musik Rebana.</p>
      <p>Buat kamu yang masih ragu untuk bergabung dalam kegiatan seni di gereja atau kampus — coba saja. Bukan karena kamu harus sempurna, tapi karena proses belajarnya yang jauh lebih berharga dari hasil akhirnya.</p>
    `
  },
  {
    id: 2,
    category: 'rebana',
    emoji: '🎵',
    title: 'Apa Itu Rebana dan Mengapa Aku Jatuh Cinta Padanya',
    date: '25 Januari 2026',
    excerpt: 'Rebana adalah alat musik tradisional berbentuk bundar yang dimainkan dengan cara dipukul. Tapi bagiku, Rebana jauh lebih dari sekadar alat musik...',
    content: `
      <p>Rebana adalah alat musik tradisional berbentuk bundar yang dimainkan dengan cara dipukul menggunakan telapak tangan. Dalam konteks musik Islami, Rebana sudah dikenal sejak lama. Namun dalam komunitas Kristen di daerah tertentu, termasuk di Sulawesi Utara, Rebana juga diadaptasi sebagai bagian dari musik rohani yang penuh semangat.</p>
      <p>Bunyi Rebana itu unik — ada yang bernada rendah dan berat, ada yang nyaring dan ceria tergantung dari cara memukulnya. Kombinasi beberapa Rebana dalam satu kelompok menghasilkan irama yang bisa membuat kaki ikut bergerak tanpa sadar.</p>
      <p>Yang membuatku benar-benar jatuh cinta adalah suasana ketika bermain bersama. Semua anggota harus kompak, saling mendengarkan, dan saling melengkapi. Tidak ada yang lebih penting dari yang lain — semua bagian, dari yang memimpin hingga yang mengisi ritme belakang, sama-sama punya peran yang krusial.</p>
      <p>Bagiku, Rebana mengajarkan nilai kolaborasi dan kerendahan hati. Dua hal yang sangat aku butuhkan, tidak hanya di atas panggung, tapi juga dalam kehidupan sehari-hari sebagai mahasiswa.</p>
    `
  },
  {
    id: 3,
    category: 'rebana',
    emoji: '🏆',
    title: 'Persiapan Lomba Rebana: Bukan Sekadar Latihan',
    date: '5 Januari 2026',
    excerpt: 'Seminggu sebelum lomba, latihan kami semakin intensif. Tapi ternyata, yang paling berat bukan fisiknya — melainkan mentalnya...',
    content: `
      <p>Seminggu sebelum lomba, jadwal latihan kami berubah drastis. Dari yang biasanya latihan dua kali seminggu, mendadak menjadi setiap hari, kadang sampai malam. Awalnya aku pikir yang paling berat adalah latihan fisiknya — tangan yang pegal karena terus memukul.</p>
      <p>Ternyata yang paling berat adalah tekanan mentalnya. Ketika salah satu anggota tidak kompak, semua harus mengulang dari awal. Ketika pelatih kami tidak puas dengan penampilan kami, ekspresinya cukup berbicara tanpa perlu kata-kata.</p>
      <p>Ada momen di mana aku hampir menyerah dan ingin bilang "ini terlalu berat." Tapi kemudian aku melihat teman-teman sekelilingku — semuanya capek, semuanya punya tekanan masing-masing, tapi tidak ada yang menyerah. Itu yang akhirnya membuatku bertahan.</p>
      <p>Hari lomba tiba, kami tampil. Hasilnya? Kami berhasil meraih prestasi yang membanggakan. Tapi yang lebih berkesan bukan tropi atau sertifikatnya — melainkan pelukan dan air mata haru setelah penampilan selesai. Itu adalah momen yang tidak akan pernah aku lupakan.</p>
    `
  },
  {
    id: 4,
    category: 'canva',
    emoji: '🎨',
    title: 'Tips Desain Poster Sederhana di Canva untuk Pemula',
    date: '18 Desember 2025',
    excerpt: 'Canva adalah tools desain grafis yang sangat ramah pemula. Tapi supaya hasilnya terlihat profesional, ada beberapa prinsip dasar yang harus kamu pahami...',
    content: `
      <p>Canva adalah salah satu tools desain grafis paling populer untuk pemula. Antarmukanya intuitif, template-nya melimpah, dan hasilnya bisa langsung terlihat profesional — asalkan kamu paham beberapa prinsip dasarnya.</p>
      <p><strong>1. Pilih palet warna yang konsisten.</strong> Jangan pakai terlalu banyak warna dalam satu desain. Idealnya 2–3 warna utama yang harmonis. Di Canva, kamu bisa menggunakan fitur "Brand Kit" atau memilih dari palet warna yang sudah disediakan.</p>
      <p><strong>2. Typography itu penting.</strong> Jangan pakai lebih dari 2 jenis font dalam satu desain. Padukan font yang kontras — misalnya font dekoratif untuk judul dan font simpel untuk isi teks. Canva sudah menyediakan banyak pasangan font yang recommended.</p>
      <p><strong>3. Manfaatkan whitespace (ruang kosong).</strong> Banyak pemula takut ruang kosong dan akhirnya mengisi desain dengan terlalu banyak elemen. Padahal, ruang kosong membuat desain terasa lebih bersih dan mudah dibaca.</p>
      <p><strong>4. Gunakan template sebagai titik awal, bukan akhir.</strong> Template Canva bukan tujuan akhir. Gunakan sebagai kerangka, lalu modifikasi sesuai kebutuhan dan identitasmu.</p>
      <p>Dengan konsistensi dan banyak latihan, desainmu akan terus berkembang. Aku sendiri masih terus belajar dan bereksperimen — dan itu adalah bagian paling menyenangkannya!</p>
    `
  }
];

const galleryData = [
  { id: 1, category: 'rebana', emoji: '🥁', caption: 'Penampilan Rebana - Ibadah Minggu' },
  { id: 2, category: 'rebana', emoji: '🎵', caption: 'Latihan Rutin Tim Rebana' },
  { id: 3, category: 'rebana', emoji: '🎶', caption: 'Penampilan di Perayaan Natal' },
  { id: 4, category: 'rebana', emoji: '🏆', caption: 'Foto Bersama Setelah Lomba' },
  { id: 5, category: 'rebana', emoji: '🙏', caption: 'Kegiatan Ibadah Pemuda' },
  { id: 6, category: 'rebana', emoji: '🌟', caption: 'Penampilan Spesial Paskah' },
  { id: 7, category: 'canva', emoji: '🎨', caption: 'Desain Poster Event Kampus' },
  { id: 8, category: 'canva', emoji: '✨', caption: 'Desain Infografis untuk Tugas' },
  { id: 9, category: 'canva', emoji: '🖼️', caption: 'Karya Desain - Social Media' },
];

// Blog page init
function initBlog() {
  const grid = document.querySelector('.blog-grid');
  if (!grid) return;

  renderBlogCards('all');

  document.querySelectorAll('.blog-filter .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.blog-filter .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderBlogCards(btn.dataset.filter);
    });
  });
}

function renderBlogCards(filter) {
  const grid = document.querySelector('.blog-grid');
  if (!grid) return;

  const filtered = filter === 'all' ? blogData : blogData.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(post => `
    <article class="blog-card fade-up" onclick="openModal(${post.id})">
      <div class="blog-card-img">${post.emoji}</div>
      <div class="blog-card-body">
        <div class="blog-card-meta">
          <span class="tag">${post.category === 'rebana' ? 'Rebana' : 'Canva & Desain'}</span>
          <span class="blog-card-date">${post.date}</span>
        </div>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <span class="blog-read-more">Baca Selengkapnya →</span>
      </div>
    </article>
  `).join('');

  // re-observe new elements
  document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
}

// Modal
const modalOverlay = document.querySelector('.modal-overlay');
const modalTitle   = document.querySelector('.modal-title');
const modalMeta    = document.querySelector('.modal-meta');
const modalBody    = document.querySelector('.modal-body');
const modalEmoji   = document.querySelector('.modal-header-img .modal-emoji');

function openModal(id) {
  const post = blogData.find(p => p.id === id);
  if (!post || !modalOverlay) return;

  document.querySelector('.modal-header-img span').textContent = post.emoji;
  document.querySelector('.modal-title').textContent = post.title;
  document.querySelector('.modal-meta').innerHTML = `
    <span class="tag">${post.category === 'rebana' ? 'Rebana' : 'Canva & Desain'}</span>
    <span style="font-size:0.8rem;color:var(--text-soft)">${post.date}</span>
  `;
  document.querySelector('.modal-body').innerHTML = post.content;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

// ===== GALLERY PAGE =====
function initGallery() {
  const grid = document.querySelector('.gallery-grid');
  if (!grid) return;

  document.querySelectorAll('.gallery-filter .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-filter .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

    // Lightbox tetap jalan
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const caption = item.querySelector('.gallery-item-caption').textContent;
      openLightboxDirect(img ? img.src : null, caption);
    });
  });
}

function openLightboxDirect(src, caption) {
  const lightbox = document.querySelector('.lightbox');
  const imgWrap = lightbox.querySelector('.lightbox-img');
  const captionEl = lightbox.querySelector('.lightbox-caption');

  imgWrap.innerHTML = src 
    ? `<img src="${src}" style="width:100%;height:100%;object-fit:contain;border-radius:var(--radius)">` 
    : '🖼️';
  captionEl.textContent = caption;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function openBlogModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBlogModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Tutup modal kalau klik di luar box
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

if (lightbox) {
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target === lightbox.querySelector('.lightbox-content')) {
      // only close if clicking backdrop
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}

// ===== CONTACT FORM =====
function initContact() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Mengirim...';
    btn.disabled = true;

    setTimeout(() => {
      form.style.display = 'none';
      document.querySelector('.form-success').style.display = 'block';
    }, 1200);
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initBlog();
  initGallery();
  initContact();
});