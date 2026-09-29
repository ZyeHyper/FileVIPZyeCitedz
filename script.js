/* =========================================
   ZyeCitedz Premium Digital Store — script.js
   ========================================= */

// ============ KONFIGURASI ============
const CONFIG = {
    waAdmin: "628817789861",
    waSupport: "628817789861",
    payment: {
        qris: {
            enabled: true,
            imageUrl: "https://upload.zireku.com/get/OLJFBV.jpg",
            label: "QRIS ALLPAY"
        },
        dana: {
            enabled: true,
            number: "0882-2928-6129",
            holder: "ZyeCitedz Store"
        },
        gopay: {
            enabled: false,
            number: "",
            holder: ""
        },
        shopeepay: {
            enabled: false,
            number: "",
            holder: ""
        }
    }
};

// ============ DATA PRODUK ============
const PRODUCTS = [
    // === KATEGORI A — DRAG SHOOT VIP ===
    { id:"dr1", name:"[ VIP ] DRAG SHOOT 30%", category:"drag", categoryLabel:"DRAG SHOOT VIP",
      originalPrice:35000, salePrice:15000, badge:"PROMO", bonusEligibility:false,
      description:"File drag shoot yang dipasarkan untuk membantu kontrol bidikan melalui gerakan drag yang lebih ringan. Rekomendasi penggunaan: push rank." },
    { id:"dr2", name:"[ VIP ] DRAG SHOOT 50%", category:"drag", categoryLabel:"DRAG SHOOT VIP",
      originalPrice:50000, salePrice:30000, badge:"PROMO", bonusEligibility:false,
      description:"File drag shoot yang dipasarkan untuk membantu kontrol bidikan melalui gerakan drag yang lebih ringan. Rekomendasi penggunaan: push rank." },
    { id:"dr3", name:"[ VIP ] DRAG SHOOT 70%", category:"drag", categoryLabel:"DRAG SHOOT VIP",
      originalPrice:60000, salePrice:40000, badge:"PROMO", bonusEligibility:false,
      description:"File drag shoot yang dipasarkan untuk membantu kontrol bidikan melalui gerakan drag yang lebih ringan. Rekomendasi penggunaan: push rank." },
    { id:"dr4", name:"[ VIP ] DRAG SHOOT 90%", category:"drag", categoryLabel:"DRAG SHOOT VIP",
      originalPrice:70000, salePrice:50000, badge:"PROMO", bonusEligibility:false,
      description:"File drag shoot yang dipasarkan untuk membantu kontrol bidikan melalui gerakan drag yang lebih ringan. Rekomendasi penggunaan: push rank." },
    { id:"dr5", name:"[ VIP ] DRAG SHOOT 100%", category:"drag", categoryLabel:"DRAG SHOOT VIP",
      originalPrice:80000, salePrice:65000, badge:"BEST SELLER", bonusEligibility:false,
      description:"File drag shoot yang dipasarkan untuk membantu kontrol bidikan melalui gerakan drag yang lebih ringan. Rekomendasi penggunaan: push rank." },

    // === KATEGORI B — LOCK BODY VIP ===
    { id:"bd1", name:"[ ZHR ] LOCK BODY 50%", category:"body", categoryLabel:"LOCK BODY VIP",
      originalPrice:40000, salePrice:25000, badge:"PROMO", bonusEligibility:false,
      description:"Produk konfigurasi yang dipasarkan dengan fokus pengaturan bidikan ke area badan. Informasi kompatibilitas dan fungsi aktual harus mengikuti dokumentasi produk. Direkomendasikan untuk pemain FT." },
    { id:"bd2", name:"[ ZHR ] LOCK BODY 100%", category:"body", categoryLabel:"LOCK BODY VIP",
      originalPrice:90000, salePrice:50000, badge:"PROMO", bonusEligibility:false,
      description:"Produk konfigurasi yang dipasarkan dengan fokus pengaturan bidikan ke area badan. Informasi kompatibilitas dan fungsi aktual harus mengikuti dokumentasi produk. Direkomendasikan untuk pemain FT." },

    // === KATEGORI C — NECK HEADSHOT VIP ===
    { id:"nk1", name:"[ NSR ] NECK HEADSHOT 25%", category:"neck", categoryLabel:"NECK HEADSHOT VIP",
      originalPrice:15000, salePrice:5000, badge:"PROMO", bonusEligibility:false,
      description:"Produk dipasarkan dengan konsep bidikan ke area leher dan potensi headshot ketika bidikan mengenai area yang dituju. Persentase merupakan label produk dari penjual, bukan hasil yang dijamin." },
    { id:"nk2", name:"[ NSR ] NECK HEADSHOT 37%", category:"neck", categoryLabel:"NECK HEADSHOT VIP",
      originalPrice:25000, salePrice:10000, badge:"PROMO", bonusEligibility:false,
      description:"Produk dipasarkan dengan konsep bidikan ke area leher dan potensi headshot ketika bidikan mengenai area yang dituju. Persentase merupakan label produk dari penjual, bukan hasil yang dijamin." },
    { id:"nk3", name:"[ NSR ] NECK HEADSHOT 45%", category:"neck", categoryLabel:"NECK HEADSHOT VIP",
      originalPrice:35000, salePrice:15000, badge:"PROMO", bonusEligibility:false,
      description:"Produk dipasarkan dengan konsep bidikan ke area leher dan potensi headshot ketika bidikan mengenai area yang dituju. Persentase merupakan label produk dari penjual, bukan hasil yang dijamin." },
    { id:"nk4", name:"[ NSR ] NECK HEADSHOT 65%", category:"neck", categoryLabel:"NECK HEADSHOT VIP",
      originalPrice:45000, salePrice:20000, badge:"PROMO", bonusEligibility:false,
      description:"Produk dipasarkan dengan konsep bidikan ke area leher dan potensi headshot ketika bidikan mengenai area yang dituju. Persentase merupakan label produk dari penjual, bukan hasil yang dijamin." },
    { id:"nk5", name:"[ NSR ] NECK HEADSHOT 85%", category:"neck", categoryLabel:"NECK HEADSHOT VIP",
      originalPrice:60000, salePrice:40000, badge:"BEST SELLER", bonusEligibility:false,
      description:"Produk dipasarkan dengan konsep bidikan ke area leher dan potensi headshot ketika bidikan mengenai area yang dituju. Persentase merupakan label produk dari penjual, bukan hasil yang dijamin." },
    { id:"nk6", name:"[ NSR ] NECK HEADSHOT 100%", category:"neck", categoryLabel:"NECK HEADSHOT VIP",
      originalPrice:75000, salePrice:50000, badge:"PROMO", bonusEligibility:false,
      description:"Produk dipasarkan dengan konsep bidikan ke area leher dan potensi headshot ketika bidikan mengenai area yang dituju. Persentase merupakan label produk dari penjual, bukan hasil yang dijamin." },

    // === KATEGORI D — LOCK HEAD VIP ===
    { id:"hd1", name:"[ HYR ] LOCK HEAD 25%", category:"head", categoryLabel:"LOCK HEAD VIP",
      originalPrice:15000, salePrice:5000, badge:"PROMO", bonusEligibility:false,
      description:"Produk konfigurasi yang dipasarkan dengan fokus bidikan ke arah kepala. Hasil aktual bergantung pada kompatibilitas dan cara penggunaan." },
    { id:"hd2", name:"[ HYR ] LOCK HEAD 35%", category:"head", categoryLabel:"LOCK HEAD VIP",
      originalPrice:25000, salePrice:10000, badge:"PROMO", bonusEligibility:false,
      description:"Produk konfigurasi yang dipasarkan dengan fokus bidikan ke arah kepala. Hasil aktual bergantung pada kompatibilitas dan cara penggunaan." },
    { id:"hd3", name:"[ HYR ] LOCK HEAD 48%", category:"head", categoryLabel:"LOCK HEAD VIP",
      originalPrice:35000, salePrice:15000, badge:"PROMO", bonusEligibility:false,
      description:"Produk konfigurasi yang dipasarkan dengan fokus bidikan ke arah kepala. Hasil aktual bergantung pada kompatibilitas dan cara penggunaan." },
    { id:"hd4", name:"[ HYR ] LOCK HEAD 68%", category:"head", categoryLabel:"LOCK HEAD VIP",
      originalPrice:45000, salePrice:20000, badge:"BEST SELLER", bonusEligibility:false,
      description:"Produk konfigurasi yang dipasarkan dengan fokus bidikan ke arah kepala. Hasil aktual bergantung pada kompatibilitas dan cara penggunaan." },

    // === KATEGORI E — FILE COMBO VIP ===
    { id:"cb1", name:"BODY LOCK 15% X DRAGHEAD VIP", category:"combo", categoryLabel:"FILE COMBO VIP",
      originalPrice:25000, salePrice:10000, badge:"PROMO", bonusEligibility:false,
      description:"Koleksi paket kombinasi dengan konfigurasi yang berbeda-beda. Periksa nama, versi, kompatibilitas, dan detail paket sebelum membeli." },
    { id:"cb2", name:"AIMLOCK 20% X EASY TO HS VIP 35%", category:"combo", categoryLabel:"FILE COMBO VIP",
      originalPrice:35000, salePrice:15000, badge:"PROMO", bonusEligibility:false,
      description:"Koleksi paket kombinasi dengan konfigurasi yang berbeda-beda. Periksa nama, versi, kompatibilitas, dan detail paket sebelum membeli." },
    { id:"cb3", name:"GOOD DATA X AIMBOT 55% BRUTAL", category:"combo", categoryLabel:"FILE COMBO VIP",
      originalPrice:45000, salePrice:30000, badge:"BEST SELLER", bonusEligibility:false,
      description:"Koleksi paket kombinasi dengan konfigurasi yang berbeda-beda. Periksa nama, versi, kompatibilitas, dan detail paket sebelum membeli." },

    // === KATEGORI F — FILE BRUTAL VIP ===
    { id:"br1", name:"[ VVIP ] AIM GOOD DATA X DRAGON", category:"brutal", categoryLabel:"FILE BRUTAL VIP",
      originalPrice:50000, salePrice:25000, badge:"PROMO", bonusEligibility:false,
      description:"Koleksi produk VVIP dengan variasi konfigurasi dan versi. Baca detail produk sebelum melakukan pemesanan. Istilah performa seperti brutal atau gacor merupakan deskripsi pemasaran, bukan jaminan hasil." },
    { id:"br2", name:"[ VVIP ] AIM EVIL GHOST 78%", category:"brutal", categoryLabel:"FILE BRUTAL VIP",
      originalPrice:60000, salePrice:35000, badge:"PROMO", bonusEligibility:false,
      description:"Koleksi produk VVIP dengan variasi konfigurasi dan versi. Baca detail produk sebelum melakukan pemesanan. Istilah performa seperti brutal atau gacor merupakan deskripsi pemasaran, bukan jaminan hasil." },
    { id:"br3", name:"[ VVIP ] EASY DRAG EXTREME V1", category:"brutal", categoryLabel:"FILE BRUTAL VIP",
      originalPrice:60000, salePrice:35000, badge:"PROMO", bonusEligibility:false,
      description:"Koleksi produk VVIP dengan variasi konfigurasi dan versi. Baca detail produk sebelum melakukan pemesanan. Istilah performa seperti brutal atau gacor merupakan deskripsi pemasaran, bukan jaminan hasil." },
    { id:"br4", name:"[ VVIP ] REGEDIT DIAMOND V1.0", category:"brutal", categoryLabel:"FILE BRUTAL VIP",
      originalPrice:70000, salePrice:50000, badge:"PROMO", bonusEligibility:false,
      description:"Koleksi produk VVIP dengan variasi konfigurasi dan versi. Baca detail produk sebelum melakukan pemesanan. Istilah performa seperti brutal atau gacor merupakan deskripsi pemasaran, bukan jaminan hasil." },
    { id:"br5", name:"[ VVIP ] REGEDIT GENIUS V1.5", category:"brutal", categoryLabel:"FILE BRUTAL VIP",
      originalPrice:85000, salePrice:70000, badge:"BEST SELLER", bonusEligibility:false,
      description:"Koleksi produk VVIP dengan variasi konfigurasi dan versi. Baca detail produk sebelum melakukan pemesanan. Istilah performa seperti brutal atau gacor merupakan deskripsi pemasaran, bukan jaminan hasil." },

    // === KATEGORI G — FILE YTTA ===
    { id:"yt1", name:"[ YTTA ] MAGIC BULLET 1000%", category:"ytta", categoryLabel:"FILE YTTA",
      originalPrice:50000, salePrice:30000, badge:"PROMO", bonusEligibility:false,
      description:"Deskripsi penjual: konfigurasi yang dipasarkan untuk bidikan yang lebih lebar. Persentase pada nama produk bukan jaminan performa." },
    { id:"yt2", name:"[ YTTA ] GRAFIK MINICRAFT BERMUDA", category:"ytta", categoryLabel:"FILE YTTA",
      originalPrice:35000, salePrice:20000, badge:"PROMO", bonusEligibility:false,
      description:"File pengaturan tampilan dengan gaya grafik sederhana untuk Bermuda. Periksa kompatibilitas perangkat dan game sebelum menggunakan." },
    { id:"yt3", name:"[ YTTA ] FIX LAG VIP", category:"ytta", categoryLabel:"FILE YTTA",
      originalPrice:30000, salePrice:15000, badge:"PROMO", bonusEligibility:false,
      description:"File pengaturan yang dipasarkan untuk membantu mengurangi gangguan performa pada perangkat tertentu. Hasil tidak dapat dijamin pada semua HP." },

    // === KATEGORI H — FILE PRIBADI ===
    { id:"pv1", name:"ZyeCitedz — NEBULA VIP", category:"private", categoryLabel:"FILE PRIBADI",
      originalPrice:100000, salePrice:70000, badge:"PRIVATE COLLECTION", bonusEligibility:true,
      description:"FILE PRIBADI ZyeCitedz PREMIUM. Setiap pembelian salah satu produk kategori File Pribadi mendapatkan bonus file dengan nilai yang dinyatakan penjual sebesar Rp10.000." },
    { id:"pv2", name:"ZyeCitedz — DRAK VENOM", category:"private", categoryLabel:"FILE PRIBADI",
      originalPrice:100000, salePrice:50000, badge:"PRIVATE COLLECTION", bonusEligibility:true,
      description:"FILE PRIBADI ZyeCitedz PREMIUM. Setiap pembelian salah satu produk kategori File Pribadi mendapatkan bonus file dengan nilai yang dinyatakan penjual sebesar Rp10.000." },

    // === KATEGORI I — MODULE VVIP ===
    { id:"md1", name:"[ MODULE ] BASIC HEADTRICK V1", category:"module", categoryLabel:"MODULE VVIP",
      originalPrice:45000, salePrice:35000, badge:"PROMO", bonusEligibility:false,
      description:"Pilihan modul digital dengan versi dan konfigurasi berbeda. Sebelum membeli, baca dokumentasi, persyaratan perangkat, serta kompatibilitas produk." },
    { id:"md2", name:"[ MODULE ] HYAR HEADTRICK V2", category:"module", categoryLabel:"MODULE VVIP",
      originalPrice:60000, salePrice:45000, badge:"PROMO", bonusEligibility:false,
      description:"Pilihan modul digital dengan versi dan konfigurasi berbeda. Sebelum membeli, baca dokumentasi, persyaratan perangkat, serta kompatibilitas produk." },
    { id:"md3", name:"[ MODULE ] PREMIUM HEADTRICK V1", category:"module", categoryLabel:"MODULE VVIP",
      originalPrice:80000, salePrice:70000, badge:"PROMO", bonusEligibility:false,
      description:"Pilihan modul digital dengan versi dan konfigurasi berbeda. Sebelum membeli, baca dokumentasi, persyaratan perangkat, serta kompatibilitas produk." },
    { id:"md4", name:"[ MODULE ] SUPER PREMIUM VVIP HEADTRICK V2", category:"module", categoryLabel:"MODULE VVIP",
      originalPrice:100000, salePrice:90000, badge:"BEST SELLER", bonusEligibility:false,
      description:"Pilihan modul digital dengan versi dan konfigurasi berbeda. Sebelum membeli, baca dokumentasi, persyaratan perangkat, serta kompatibilitas produk." }
];

// ============ STATE ============
let cart = JSON.parse(localStorage.getItem('zy_cart') || '[]');
let activeCategory = 'all';
let searchTerm = '';
let currentRating = 0;
let proofData = null;
let reviews = JSON.parse(localStorage.getItem('zy_reviews') || '[]');

// ============ HELPERS ============
const formatRupiah = (n) => 'Rp' + n.toLocaleString('id-ID');
const saveCart = () => localStorage.setItem('zy_cart', JSON.stringify(cart));
const saveReviews = () => localStorage.setItem('zy_reviews', JSON.stringify(reviews));

function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

function scrollToSection(id) {
    closeMenu();
    const el = document.getElementById(id);
    if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
    }
}

// ============ WELCOME ============
function enterStore() {
    document.getElementById('welcomeScreen').classList.add('hide');
    sessionStorage.setItem('zy_entered', '1');
}

// ============ MENU ============
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('open');
}
function closeMenu() {
    document.getElementById('navMenu').classList.remove('open');
}

// ============ CATEGORY ============
function selectCategory(cat, btn) {
    activeCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderProducts();
}

// ============ SEARCH ============
function filterProducts() {
    searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    renderProducts();
}

// ============ RENDER PRODUCTS ============
function renderProducts() {
    const grid = document.getElementById('productGrid');
    const empty = document.getElementById('emptyState');

    let list = PRODUCTS;
    if (activeCategory !== 'all') list = list.filter(p => p.category === activeCategory);
    if (searchTerm) list = list.filter(p => p.name.toLowerCase().includes(searchTerm) || p.categoryLabel.toLowerCase().includes(searchTerm));

    if (list.length === 0) {
        grid.innerHTML = '';
        empty.style.display = 'block';
        return;
    }
    empty.style.display = 'none';

    grid.innerHTML = list.map(p => {
        let badgeClass = 'promo';
        if (p.badge === 'BEST SELLER') badgeClass = 'best';
        if (p.badge === 'PRIVATE COLLECTION') badgeClass = 'private';
        return `
            <div class="product-card">
                ${p.badge ? `<div class="product-badge ${badgeClass}">${p.badge}</div>` : ''}
                <div class="product-cat">${p.categoryLabel}</div>
                <div class="product-name">${p.name}</div>
                ${p.bonusEligibility ? `<div class="product-bonus-tag">🎁 Bonus File Rp10.000</div>` : ''}
                <div class="product-prices">
                    <div class="product-original">${formatRupiah(p.originalPrice)}</div>
                    <div class="product-sale">${formatRupiah(p.salePrice)}</div>
                </div>
                <div class="product-actions">
                    <button class="btn-glass" onclick="openDetail('${p.id}')">DETAIL FILE</button>
                    <button class="btn-glass btn-primary" onclick="buyNow('${p.id}')">BELI</button>
                </div>
            </div>
        `;
    }).join('');
}

// ============ DETAIL MODAL ============
function openDetail(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;

    document.getElementById('detailContent').innerHTML = `
        <div class="detail-cat">${p.categoryLabel}</div>
        <div class="detail-name">${p.name}</div>
        <div class="detail-prices">
            <span class="detail-original">${formatRupiah(p.originalPrice)}</span>
            <span class="detail-sale">${formatRupiah(p.salePrice)}</span>
        </div>

        <div class="detail-section">
            <div class="detail-section-title">DESKRIPSI PRODUK</div>
            <div class="detail-section-body">${p.description}</div>
        </div>

        <div class="detail-section">
            <div class="detail-section-title">INFORMASI PENGIRIMAN</div>
            <div class="detail-info-box">
                📦 Pengiriman: <strong>MEDIAFIRE / DOCUMENT</strong><br>
                Produk dikirim setelah pembayaran diverifikasi admin.
            </div>
        </div>

        <div class="detail-section">
            <div class="detail-section-title">CATATAN PENTING</div>
            <div class="detail-info-box">
                • Persentase/istilah performa adalah label pemasaran, bukan jaminan hasil.<br>
                • Baca dokumentasi & kompatibilitas sebelum membeli.<br>
                • Klaim garansi: 1×24 jam dengan video bukti kendala.
            </div>
        </div>

        ${p.bonusEligibility ? `
        <div class="detail-info-box" style="border-color:rgba(180,120,255,0.3);">
            🎁 <strong>BONUS:</strong> Dapatkan bonus file senilai Rp10.000 untuk kategori File Pribadi.
        </div>` : ''}

        <div class="detail-actions">
            <button class="btn-glass" onclick="addToCart('${p.id}');closeDetail();">TAMBAH KE KERANJANG</button>
            <button class="btn-glass btn-primary" onclick="buyNow('${p.id}')">BELI SEKARANG</button>
        </div>
    `;

    const modal = document.getElementById('detailModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeDetail(e) {
    if (e && e.target.id !== 'detailModal' && e.target.className !== 'modal-close') return;
    document.getElementById('detailModal').classList.remove('show');
    document.body.style.overflow = '';
}

// ============ CART ============
function addToCart(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const existing = cart.find(i => i.id === id);
    if (existing) {
        existing.qty = (existing.qty || 1) + 1;
    } else {
        cart.push({ id: p.id, name: p.name, price: p.salePrice, qty: 1, bonusEligibility: p.bonusEligibility });
    }
    saveCart();
    updateCartUI();
    toast('✓ Ditambahkan ke keranjang');
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
    toast('Dihapus dari keranjang');
}

function updateCartUI() {
    const count = cart.reduce((s, i) => s + (i.qty || 1), 0);
    document.getElementById('cartCount').textContent = count;

    const body = document.getElementById('cartBody');
    if (cart.length === 0) {
        body.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Keranjang masih kosong</p></div>`;
    } else {
        body.innerHTML = cart.map(i => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${i.name}</div>
                    <div class="cart-item-price">${formatRupiah(i.price)} × ${i.qty || 1}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${i.id}')">✕</button>
            </div>
        `).join('');
    }

    const total = cart.reduce((s, i) => s + i.price * (i.qty || 1), 0);
    document.getElementById('cartTotal').textContent = formatRupiah(total);
    document.getElementById('checkoutBtn').disabled = cart.length === 0;
    document.getElementById('checkoutBtn').style.opacity = cart.length === 0 ? 0.5 : 1;
}

function openCart() {
    document.getElementById('cartDrawer').classList.add('show');
    document.getElementById('cartOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
}
function closeCart() {
    document.getElementById('cartDrawer').classList.remove('show');
    document.getElementById('cartOverlay').classList.remove('show');
    document.body.style.overflow = '';
}

// ============ BUY NOW ============
function buyNow(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    cart = [{ id: p.id, name: p.name, price: p.salePrice, qty: 1, bonusEligibility: p.bonusEligibility }];
    saveCart();
    updateCartUI();
    closeDetail();
    setTimeout(() => openCheckout(), 200);
}

// ============ CHECKOUT ============
function openCheckout() {
    if (cart.length === 0) { toast('Keranjang kosong'); return; }
    closeCart();

    const list = document.getElementById('coSummaryList');
    let total = 0;
    list.innerHTML = cart.map(i => {
        const sub = i.price * (i.qty || 1);
        total += sub;
        return `<div class="co-sum-item"><span>${i.name} × ${i.qty || 1}</span><span>${formatRupiah(sub)}</span></div>`;
    }).join('');

    // Bonus info
    const hasBonus = cart.some(i => i.bonusEligibility);
    if (hasBonus) {
        list.innerHTML += `<div class="co-sum-item" style="color:#c9a3ff;"><span>🎁 Bonus File Pribadi</span><span>GRATIS</span></div>`;
    }

    document.getElementById('coTotal').textContent = formatRupiah(total);
    document.getElementById('checkoutModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCheckout(e) {
    if (e && e.target.id !== 'checkoutModal' && e.target.className !== 'modal-close') return;
    document.getElementById('checkoutModal').classList.remove('show');
    document.body.style.overflow = '';
}

function submitCheckout(e) {
    e.preventDefault();
    const name = document.getElementById('coName').value.trim();
    const phone = document.getElementById('coPhone').value.trim();
    const method = document.getElementById('coMethod').value;
    const note = document.getElementById('coNote').value.trim();

    if (!name || !phone || !method) { toast('Lengkapi semua data'); return; }

    const orderId = 'ZY-' + Date.now().toString(36).toUpperCase();
    const total = cart.reduce((s, i) => s + i.price * (i.qty || 1), 0);
    const products = cart.map(i => `${i.name} × ${i.qty || 1}`).join(', ');

    // Simpan order ke localStorage (untuk simulasi backend)
    const orders = JSON.parse(localStorage.getItem('zy_orders') || '[]');
    orders.push({
        id: orderId, name, phone, method, note, products,
        total, status: 'Menunggu Pembayaran', createdAt: new Date().toISOString()
    });
    localStorage.setItem('zy_orders', JSON.stringify(orders));

    // Update form konfirmasi
    document.getElementById('confOrderId').value = orderId;
    document.getElementById('confName').value = name;
    document.getElementById('confPhone').value = phone;
    document.getElementById('confMethod').value = method;
    document.getElementById('confProduct').value = products;
    document.getElementById('confTotal').value = formatRupiah(total);

    // Tampilkan instruksi pembayaran
    const payInfo = getPaymentInfo(method);

    document.getElementById('successTitle').textContent = 'PESANAN DIBUAT';
    document.getElementById('successDesc').innerHTML = `
        <div style="text-align:left;font-size:0.85rem;line-height:1.7;">
            <div><strong>ID Pesanan:</strong> ${orderId}</div>
            <div><strong>Nama:</strong> ${name}</div>
            <div><strong>Produk:</strong> ${products}</div>
            <div><strong>Metode:</strong> ${method}</div>
            <div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.1);">
                <strong>Total:</strong> <span style="font-size:1.2rem;font-weight:800;">${formatRupiah(total)}</span>
            </div>
            <div style="margin-top:12px;padding:12px;background:rgba(255,255,255,0.05);border-radius:8px;">
                ${payInfo}
            </div>
            <div style="margin-top:12px;color:#b8b8b8;font-size:0.8rem;">
                ⚠️ Status: <strong>Menunggu Pembayaran</strong>. Upload bukti pembayaran di halaman konfirmasi.
            </div>
        </div>
    `;
    document.getElementById('successExtra').innerHTML = `
        <button class="btn-glass btn-primary btn-full" style="margin-top:16px;" onclick="closeSuccess();scrollToSection('confirmation')">
            <span>UPLOAD BUKTI PEMBAYARAN</span>
        </button>
    `;

    document.getElementById('successModal').classList.add('show');
    document.getElementById('checkoutModal').classList.remove('show');
    document.body.style.overflow = 'hidden';

    cart = [];
    saveCart();
    updateCartUI();
    document.getElementById('checkoutForm').reset();
}

function getPaymentInfo(method) {
    const p = CONFIG.payment;

    // QRIS ALLPAY
    if (method === 'QRIS ALLPAY') {
        if (p.qris.enabled && p.qris.imageUrl) {
            return `
                <div style="font-size:0.8rem;">
                    <strong>QRIS ALLPAY</strong><br>
                    <div style="margin-top:10px;text-align:center;">
                        <img src="${p.qris.imageUrl}" alt="QRIS ALLPAY" 
                             style="max-width:220px;width:100%;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:#fff;padding:6px;"
                             onerror="this.style.display='none';this.nextElementSibling.style.display='block';">
                        <div style="display:none;padding:12px;background:rgba(255,255,255,0.05);border-radius:8px;color:#ff8888;font-size:0.78rem;">
                            ⚠️ Gambar QRIS gagal dimuat. Hubungi admin untuk QRIS.
                        </div>
                    </div>
                    <div style="margin-top:10px;color:#b8b8b8;font-size:0.75rem;text-align:center;">
                        Scan QR di atas menggunakan aplikasi pembayaran Anda.
                    </div>
                </div>
            `;
        }
        return `<div style="font-size:0.8rem;"><strong>QRIS ALLPAY:</strong><br>Detail pembayaran akan diberikan atau dikonfirmasi oleh admin.</div>`;
    }

    // DANA
    if (method === 'DANA') {
        if (p.dana.enabled && p.dana.number) {
            return `
                <div style="font-size:0.8rem;">
                    <strong>DANA</strong><br>
                    Nomor: <strong style="font-size:1rem;letter-spacing:0.05em;">${p.dana.number}</strong><br>
                    <span style="color:#b8b8b8;font-size:0.75rem;">a.n. ${p.dana.holder}</span>
                </div>
            `;
        }
        return `<div style="font-size:0.8rem;"><strong>DANA:</strong><br>Detail pembayaran akan diberikan atau dikonfirmasi oleh admin.</div>`;
    }

    // GOPAY
    if (method === 'GOPAY') {
        if (p.gopay.enabled && p.gopay.number) {
            return `
                <div style="font-size:0.8rem;">
                    <strong>GOPAY</strong><br>
                    Nomor: <strong style="font-size:1rem;letter-spacing:0.05em;">${p.gopay.number}</strong><br>
                    <span style="color:#b8b8b8;font-size:0.75rem;">a.n. ${p.gopay.holder}</span>
                </div>
            `;
        }
        return `<div style="font-size:0.8rem;"><strong>GOPAY:</strong><br>Detail pembayaran akan diberikan atau dikonfirmasi oleh admin.</div>`;
    }

    // SHOPEEPAY
    if (method === 'SHOPEEPAY') {
        if (p.shopeepay.enabled && p.shopeepay.number) {
            return `
                <div style="font-size:0.8rem;">
                    <strong>SHOPEEPAY</strong><br>
                    Akun: <strong style="font-size:1rem;letter-spacing:0.05em;">${p.shopeepay.number}</strong><br>
                    <span style="color:#b8b8b8;font-size:0.75rem;">a.n. ${p.shopeepay.holder}</span>
                </div>
            `;
        }
        return `<div style="font-size:0.8rem;"><strong>SHOPEEPAY:</strong><br>Detail pembayaran akan diberikan atau dikonfirmasi oleh admin.</div>`;
    }

    return `<div style="font-size:0.8rem;">Detail pembayaran akan diberikan atau dikonfirmasi oleh admin.</div>`;
}

function closeSuccess() {
    document.getElementById('successModal').classList.remove('show');
    document.body.style.overflow = '';
}

// ============ PROOF UPLOAD ============
function handleProofUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowed.includes(file.type)) { toast('Format file tidak didukung'); return; }
    if (file.size > 5 * 1024 * 1024) { toast('Ukuran file maksimal 5MB'); return; }

    const reader = new FileReader();
    reader.onload = (ev) => {
        proofData = { name: file.name, dataUrl: ev.target.result, size: file.size };
        document.getElementById('previewImg').src = ev.target.result;
        document.getElementById('uploadPlaceholder').style.display = 'none';
        document.getElementById('uploadPreview').style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function removeProof() {
    proofData = null;
    document.getElementById('proofFile').value = '';
    document.getElementById('uploadPlaceholder').style.display = 'block';
    document.getElementById('uploadPreview').style.display = 'none';
}

function submitConfirmation(e) {
    e.preventDefault();
    const orderId = document.getElementById('confOrderId').value.trim();
    const name = document.getElementById('confName').value.trim();
    const phone = document.getElementById('confPhone').value.trim();
    const method = document.getElementById('confMethod').value;
    const product = document.getElementById('confProduct').value.trim();
    const total = document.getElementById('confTotal').value.trim();

    if (!orderId || !name || !phone || !method || !product || !total) {
        toast('Lengkapi semua data'); return;
    }
    if (!proofData) { toast('Upload bukti pembayaran'); return; }

    // Update status order
    const orders = JSON.parse(localStorage.getItem('zy_orders') || '[]');
    const o = orders.find(x => x.id === orderId);
    if (o) { o.status = 'Menunggu Verifikasi Admin'; o.proof = proofData.name; }
    localStorage.setItem('zy_orders', JSON.stringify(orders));

    // Susun pesan WA
    const msg = `HALO ADMIN ZyeCitedz STORE

Saya ingin mengonfirmasi pembayaran.

ID Pesanan: ${orderId}
Nama: ${name}
Produk: ${product}
Total: ${total}
Metode: ${method}

Saya telah menyiapkan bukti pembayaran untuk diverifikasi.

Mohon konfirmasi pesanan saya.`;

    const waUrl = `https://wa.me/${CONFIG.waAdmin}?text=${encodeURIComponent(msg)}`;

    document.getElementById('successTitle').textContent = 'BUKTI TERKIRIM';
    document.getElementById('successDesc').innerHTML = `
        <div style="text-align:left;font-size:0.85rem;line-height:1.7;">
            <p>Data bukti pembayaran telah dicatat.</p>
            <p style="color:#b8b8b8;font-size:0.8rem;margin-top:8px;">
                ⚠️ <strong>PENTING:</strong> Tautan WhatsApp biasa tidak otomatis melampirkan gambar dari website.
                Silakan lampirkan foto bukti pembayaran secara manual di WhatsApp.
            </p>
            <p style="color:#b8b8b8;font-size:0.8rem;margin-top:8px;">
                Status: <strong>Menunggu Verifikasi Admin</strong>
            </p>
        </div>
    `;
    document.getElementById('successExtra').innerHTML = `
        <a class="btn-glass btn-primary btn-full" style="margin-top:16px;" href="${waUrl}" target="_blank" rel="noopener">
            <span>BUKA WHATSAPP ADMIN</span>
        </a>
    `;

    document.getElementById('successModal').classList.add('show');
    document.body.style.overflow = 'hidden';
    document.getElementById('confirmForm').reset();
    removeProof();
}

// ============ ORDER TRACKING ============
function trackOrder() {
    const id = document.getElementById('trackOrderId').value.trim();
    const result = document.getElementById('orderStatusResult');

    if (!id) { toast('Masukkan ID Pesanan'); return; }

    const orders = JSON.parse(localStorage.getItem('zy_orders') || '[]');
    const o = orders.find(x => x.id === id);

    if (!o) {
        result.innerHTML = `<div class="status-card" style="text-align:center;color:#ff8888;">ID pesanan tidak ditemukan.</div>`;
        return;
    }

    result.innerHTML = `
        <div class="status-card">
            <div class="status-row"><span>ID Pesanan</span><strong>${o.id}</strong></div>
            <div class="status-row"><span>Nama</span><strong>${o.name}</strong></div>
            <div class="status-row"><span>Produk</span><strong>${o.products}</strong></div>
            <div class="status-row"><span>Total</span><strong>${formatRupiah(o.total)}</strong></div>
            <div class="status-row"><span>Metode</span><strong>${o.method}</strong></div>
            <div class="status-row"><span>Status</span><span class="status-badge">${o.status}</span></div>
            <div class="status-row"><span>Dibuat</span><strong>${new Date(o.createdAt).toLocaleString('id-ID')}</strong></div>
        </div>
    `;
}

// ============ STARS ============
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('#starsRating .star');
    stars.forEach(s => {
        s.addEventListener('click', () => {
            currentRating = parseInt(s.dataset.value);
            document.getElementById('revRating').value = currentRating;
            stars.forEach(x => {
                x.classList.toggle('active', parseInt(x.dataset.value) <= currentRating);
            });
        });
        s.addEventListener('mouseenter', () => {
            const v = parseInt(s.dataset.value);
            stars.forEach(x => x.classList.toggle('active', parseInt(x.dataset.value) <= v));
        });
    });
    document.getElementById('starsRating').addEventListener('mouseleave', () => {
        stars.forEach(x => x.classList.toggle('active', parseInt(x.dataset.value) <= currentRating));
    });

    // Init
    renderProducts();
    updateCartUI();
    renderReviews();

    // Auto enter if session
    if (sessionStorage.getItem('zy_entered') === '1') {
        document.getElementById('welcomeScreen').classList.add('hide');
    }

    // Close modals on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDetail(); closeCheckout(); closeCart(); closeSuccess();
        }
    });
});

// ============ SUBMIT REVIEW ============
function submitReview(e) {
    e.preventDefault();
    const name = document.getElementById('revName').value.trim();
    const orderId = document.getElementById('revOrderId').value.trim();
    const product = document.getElementById('revProduct').value.trim();
    const rating = parseInt(document.getElementById('revRating').value);
    const comment = document.getElementById('revComment').value.trim();

    if (!name || !orderId || !product || !rating || !comment) {
        toast('Lengkapi semua data termasuk rating'); return;
    }

    // Simpan lokal (fallback)
    reviews.push({ name, orderId, product, rating, comment, date: new Date().toISOString() });
    saveReviews();
    renderReviews();

    // Susun pesan WA
    const msg = `HALO ADMIN ZyeCitedz STORE

Ulasan Pelanggan

Nama: ${name}
ID Pesanan: ${orderId}
Produk: ${product}
Rating: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} (${rating}/5)

Ulasan:
${comment}`;

    const waUrl = `https://wa.me/${CONFIG.waAdmin}?text=${encodeURIComponent(msg)}`;

    document.getElementById('successTitle').textContent = 'TERIMA KASIH!';
    document.getElementById('successDesc').innerHTML = `
        <p>Pendapat Anda sudah kami kirim ke admin kami.</p>
        <p style="color:#b8b8b8;font-size:0.85rem;margin-top:8px;">Terima kasih telah membantu ZyeCitedz meningkatkan kualitas pelayanan.</p>
    `;
    document.getElementById('successExtra').innerHTML = `
        <a class="btn-glass btn-primary btn-full" style="margin-top:16px;" href="${waUrl}" target="_blank" rel="noopener">
            <span>KIRIM VIA WHATSAPP</span>
        </a>
        <button class="btn-glass btn-full" style="margin-top:8px;" onclick="closeSuccess()">
            <span>KEMBALI KE STORE</span>
        </button>
    `;
    document.getElementById('successModal').classList.add('show');
    document.body.style.overflow = 'hidden';
    document.getElementById('reviewForm').reset();
    currentRating = 0;
    document.querySelectorAll('#starsRating .star').forEach(x => x.classList.remove('active'));
}

function renderReviews() {
    const list = document.getElementById('reviewList');
    if (reviews.length === 0) { list.innerHTML = ''; return; }
    // Show latest 6
    const latest = reviews.slice(-6).reverse();
    list.innerHTML = latest.map(r => `
        <div class="review-item">
            <div class="review-header">
                <div class="review-name">${escapeHtml(r.name)}</div>
                <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
            </div>
            <div class="review-product">Produk: ${escapeHtml(r.product)} • ${new Date(r.date).toLocaleDateString('id-ID')}</div>
            <div class="review-comment">${escapeHtml(r.comment)}</div>
        </div>
    `).join('');
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
        '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
}