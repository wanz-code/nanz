// script.js - ELAINA STORE
// Ganti WA_NUMBER sesuai kebutuhan (format internasional tanpa +)
const WA_NUMBER = "6282211895453"; // 082211895453 -> 6282211895453

// ---------- DATA ----------
// Each category has id, title, description, image (optional), packages[]
const CATEGORIES = [
  {
    id: "tiktok-ln",
    title: "LIST SUNTIK TIKTOK BY NANNZ 🥶 (Luar Negeri)",
    desc: "Paket followers, likes, views untuk TikTok — Luar Negeri",
    packages: [
      { id: "tln-f-100", title: "100 Followers", price: 4000 },
      { id: "tln-f-500", title: "500 Followers", price: 12000 },
      { id: "tln-f-1000", title: "1000 Followers", price: 16000 },

      { id: "tln-l-100", title: "100 Likes", price: 1000 },
      { id: "tln-l-500", title: "500 Likes", price: 3500 },
      { id: "tln-l-1000", title: "1000 Likes", price: 4000 },

      { id: "tln-v-1000", title: "1000 Views", price: 1000 },
      { id: "tln-v-5000", title: "5000 Views", price: 3000 },
      { id: "tln-v-10000", title: "10000 Views", price: 5000 }
    ]
  },
  {
    id: "tiktok-id",
    title: "LIST SUNTIK TIKTOK BY NANNZ 🥶 (Indonesia)",
    desc: "Paket followers, likes, views untuk TikTok — Indonesia",
    packages: [
      { id: "tid-f-100", title: "100 Followers", price: 8000 },
      { id: "tid-f-500", title: "500 Followers", price: 25000 },
      { id: "tid-f-1000", title: "1000 Followers", price: 56000 },

      { id: "tid-l-100", title: "100 Likes", price: 1000 },
      { id: "tid-l-500", title: "500 Likes", price: 4500 },
      { id: "tid-l-1000", title: "1000 Likes", price: 8000 },

      { id: "tid-v-1000", title: "1000 Views", price: 1000 },
      { id: "tid-v-5000", title: "5000 Views", price: 4000 },
      { id: "tid-v-10000", title: "10000 Views", price: 7000 }
    ]
  },
  {
    id: "instagram",
    title: "LIST SUNTIK IG BY NANNZ 🥶",
    desc: "Paket followers, likes, views untuk Instagram",
    packages: [
      { id: "ig-f-100", title: "100 Followers", price: 5000 },
      { id: "ig-f-500", title: "500 Followers", price: 22000 },
      { id: "ig-f-1000", title: "1000 Followers", price: 36000 },

      { id: "ig-l-100", title: "100 Likes", price: 1000 },
      { id: "ig-l-500", title: "500 Likes", price: 4500 },
      { id: "ig-l-1000", title: "1000 Likes", price: 8000 },

      { id: "ig-v-1000", title: "1000 Views", price: 1000 },
      { id: "ig-v-5000", title: "5000 Views", price: 4000 },
      { id: "ig-v-10000", title: "10000 Views", price: 7000 }
    ]
  },
  {
    id: "youtube",
    title: "LIST SUNTIK YOUTUBE BY NANNZ 🥶",
    desc: "Paket subscriber, watchtime, likes untuk YouTube",
    packages: [
      { id: "yt-s-200", title: "200 Subscriber", price: 6000 },
      { id: "yt-s-1000", title: "1000 Subscriber", price: 30000 },
      { id: "yt-s-5000", title: "5000 Subscriber", price: 150000 },
      { id: "yt-s-10000", title: "10000 Subscriber", price: 350000 },

      { id: "yt-w-1h", title: "1 Jam Tayang", price: 3000 },
      { id: "yt-w-10h", title: "10 Jam Tayang", price: 30000 },
      { id: "yt-w-50h", title: "50 Jam Tayang", price: 125000 },
      { id: "yt-w-100h", title: "100 Jam Tayang", price: 250000 },

      { id: "yt-l-100", title: "100 Likes", price: 1500 },
      { id: "yt-l-500", title: "500 Likes", price: 5000 },
      { id: "yt-l-1000", title: "1000 Likes", price: 10000 },
      { id: "yt-l-5000", title: "5000 Likes", price: 50000 }
    ]
  },
  {
    id: "wa-channel",
    title: "LIST SUNTIK SALURAN WA BY NANNZ 🥶",
    desc: "Paket pengikut untuk saluran / daftar WA",
    packages: [
      { id: "wa-100", title: "100 PENGIKUT", price: 8000 },
      { id: "wa-250", title: "250 PENGIKUT", price: 16500 },
      { id: "wa-450", title: "450 PENGIKUT", price: 25000 },
      { id: "wa-1000", title: "1000 PENGIKUT", price: 52000 }
    ]
  }
];

// Pterodactyl plans (1GB..9GB and unlimited)
const PTERO_PLANS = [
  { id: "r1", size: "1 GB", price: 1000 },
  { id: "r2", size: "2 GB", price: 2000 },
  { id: "r3", size: "3 GB", price: 3000 },
  { id: "r4", size: "4 GB", price: 4000 },
  { id: "r5", size: "5 GB", price: 5000 },
  { id: "r6", size: "6 GB", price: 6000 },
  { id: "r7", size: "7 GB", price: 7000 },
  { id: "r8", size: "8 GB", price: 8000 },
  { id: "r9", size: "9 GB", price: 9000 },
  { id: "run", size: "UNLIMITED", price: 10000 }
];

// ---------- HELPERS ----------
function formatIDR(amount) {
  return new Intl.NumberFormat('id-ID').format(amount) + ",-";
}

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

// ---------- RENDERING ----------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  renderCategories();
  renderGrid(CATEGORIES[0].id); // default show first category
  renderPlans();
  setupNav();
  setupModal();
  setupQuickBuy();
});

// Categories chips
function renderCategories() {
  const wrap = document.getElementById('categories');
  wrap.innerHTML = '';
  CATEGORIES.forEach((c, idx) => {
    const chip = el('button', 'chip', c.title);
    if (idx === 0) chip.classList.add('active');
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
      chip.classList.add('active');
      renderGrid(c.id);
      scrollToSection('products');
    });
    wrap.appendChild(chip);
  });
}

// Product cards grid for a category
function renderGrid(categoryId) {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';
  const category = CATEGORIES.find(c => c.id === categoryId);
  if (!category) return;
  // for UI we show a category card + some featured packages as cards
  category.packages.forEach((pkg, i) => {
    const card = el('article', 'card product-card');
    // thumbnail: simple gradient + icon letter
    const thumb = el('div', 'product-thumb');
    thumb.style.backgroundImage = `linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))`;
    const title = el('h3', 'h3', pkg.title);
    const desc = el('p', 'p-muted', category.title);
    const price = el('div', 'price', formatIDR(pkg.price));
    const actions = el('div', 'actions');
    const btnDetail = el('button', 'btn btn-ghost', 'Detail');
    btnDetail.addEventListener('click', () => openDetailModal(category, pkg));
    const btnBuy = el('button', 'btn btn-primary', 'Beli via WhatsApp');
    btnBuy.addEventListener('click', () => buyPackage(category, pkg, 1));
    actions.appendChild(btnDetail);
    actions.appendChild(btnBuy);

    card.appendChild(thumb);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(price);
    card.appendChild(actions);

    // staggered entrance
    card.style.animation = `cardIn .36s cubic-bezier(.2,.9,.2,1) ${i * 0.04}s both`;
    grid.appendChild(card);
  });
}

// plans
function renderPlans() {
  const wrap = document.getElementById('plans-grid');
  wrap.innerHTML = '';
  PTERO_PLANS.forEach(p => {
    const card = el('div', 'plan card');
    const size = el('div', 'size', p.size);
    const price = el('div', 'p-muted', formatIDR(p.price));
    const badge = p.id === 'run' ? el('div', 'badge', 'UNLIMITED') : null;
    const buy = el('button', 'btn btn-primary', 'Beli');
    buy.addEventListener('click', () => {
      // create pseudo package object for buy flow
      const pkg = { id: p.id, title: `Pterodactyl ${p.size}`, price: p.price };
      openDetailModal({ title: "Pterodactyl Panel" }, pkg);
    });
    card.appendChild(size);
    if (badge) card.appendChild(badge);
    card.appendChild(price);
    card.appendChild(buy);
    wrap.appendChild(card);
  });
}

// ---------- MODALS & BUY ----------
const modal = { el: null, body: null, closeBtn: null };

function setupModal() {
  modal.el = document.getElementById('modal');
  modal.body = document.getElementById('modal-body');
  modal.closeBtn = document.getElementById('modal-close');

  modal.closeBtn.addEventListener('click', closeModal);
  modal.el.addEventListener('click', (e) => { if (e.target === modal.el) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function openDetailModal(category, pkg) {
  // If pkg provided: show specific package detail + other packages of category
  modal.body.innerHTML = '';
  const header = el('div', '', `<h2>${pkg.title}</h2><p class="p-muted">${category.title}</p>`);
  modal.body.appendChild(header);

  // quantity + price summary
  const qtyRow = el('div', '', `
    <div style="margin-top:10px;display:flex;gap:8px;align-items:center">
      <label>Jumlah:</label>
      <input id="modal-qty" type="number" min="1" value="1" style="width:86px;padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit">
    </div>
  `);
  modal.body.appendChild(qtyRow);

  // main buy button
  const buyRow = el('div', '', `<div style="margin-top:12px; display:flex; gap:8px; align-items:center">
    <button id="buy-now" class="btn btn-primary">Beli Sekarang via WhatsApp</button>
    <button id="view-all" class="btn btn-ghost">Lihat Paket Lain</button>
  </div>`);
  modal.body.appendChild(buyRow);

  // list other packages for category
  const pkgList = el('div', 'pkg-list');
  const cat = CATEGORIES.find(c => c.title === category.title || c.id === category.id) || category;
  if (cat.packages && cat.packages.length) {
    cat.packages.forEach(p => {
      const row = el('div', 'pkg');
      const left = el('div', 'left', `<div class="title">${p.title}</div><div class="p-muted" style="font-size:12px">${category.title}</div>`);
      const right = el('div', 'right', `<div class="price">${formatIDR(p.price)}</div><div style="margin-top:6px;"><button class="btn btn-ghost small" data-pid="${p.id}">Pilih</button></div>`);
      row.appendChild(left);
      row.appendChild(right);
      pkgList.appendChild(row);
    });
    modal.body.appendChild(pkgList);
  }

  // attach actions
  setTimeout(() => {
    // pick specific package initially
    let selected = pkg;
    const qtyInput = document.getElementById('modal-qty');
    document.getElementById('buy-now').addEventListener('click', () => {
      const qty = Number(qtyInput.value) || 1;
      buyPackage(category, selected, qty);
    });
    document.getElementById('view-all').addEventListener('click', () => {
      // show full list (scroll)
      pkgList.scrollIntoView({ behavior: 'smooth' });
      showToast('Scroll ke daftar paket di bawah');
    });

    // pick package from list
    modal.body.querySelectorAll('button[data-pid]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pid = e.currentTarget.dataset.pid;
        const newpkg = (cat.packages || []).find(x => x.id === pid);
        if (newpkg) {
          selected = newpkg;
          // update header
          header.querySelector('h2').textContent = selected.title;
          header.querySelector('p').textContent = category.title;
          showToast(`Paket dipilih: ${selected.title}`);
        }
      });
    });
  }, 50);

  openModal();
}

function openModal() {
  modal.el.classList.remove('hidden');
  modal.el.setAttribute('aria-hidden', 'false');
  // focus trap minimal: focus close button
  modal.closeBtn.focus();
}

function closeModal() {
  modal.el.classList.add('hidden');
  modal.el.setAttribute('aria-hidden', 'true');
  modal.body.innerHTML = '';
}

// buy action => open wa.me with encoded message
function buyPackage(category, pkg, qty = 1) {
  const total = (pkg.price || 0) * qty;
  const productName = pkg.title || 'Paket';
  const message = encodeURIComponent(
    `Halo, saya mau pesan:\n- Kategori: ${category.title}\n- Paket: ${productName}\n- Jumlah: ${qty}\n- Total: ${formatIDR(total)}\n\nMohon info langkah pembayaran dan konfirmasi.`
  );
  const url = `https://wa.me/${WA_NUMBER}?text=${message}`;
  window.open(url, '_blank');
  showToast('Membuka WhatsApp...');

  // optionally close modal
  setTimeout(() => closeModal(), 600);
}

// quick buy behavior (open modal of first category first package)
function setupQuickBuy() {
  const quick = document.getElementById('quickBuy');
  quick.addEventListener('click', () => {
    const cat = CATEGORIES[0];
    const pkg = cat.packages[0];
    openDetailModal(cat, pkg);
    scrollToSection('products');
  });
}

// nav
function setupNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const dest = e.currentTarget.dataset.nav;
      scrollToSection(dest);
    });
  });
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// toast
let toastTimer = null;
function showToast(text, ms = 1800) {
  const t = document.getElementById('toast');
  t.textContent = text;
  t.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.classList.add('hidden');
  }, ms);
}

/* small entrance animation for cards */
const style = document.createElement('style');
style.innerHTML = `
@keyframes cardIn { from { opacity: 0; transform: translateY(18px) } to { opacity:1; transform:translateY(0)}}
`;
document.head.appendChild(style);