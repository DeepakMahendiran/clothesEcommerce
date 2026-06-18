// BrickThreads E-Commerce Controller Module
import { products } from './products.js';

// Application State
const state = {
  products: [...products],
  cart: [],
  wishlist: [],
  activeCategory: 'all', // 'all', 'men', 'women', 'kids'
  activeFilterTab: 'all', // 'all', 'exclusives', 'offers'
  searchQuery: '',
  sortOption: 'default',
  showOnlyWishlist: false,
  
  // Details Modal State
  selectedProduct: null,
  detailSize: null,
  detailColor: null,
  detailImageIndex: 0
};

// DOM Elements
const dom = {
  catalogGrid: document.getElementById('catalog-grid'),
  displayedCount: document.getElementById('displayed-products-count'),
  searchVal: document.getElementById('product-search'),
  searchBtn: document.getElementById('search-submit'),
  sortSelect: document.getElementById('sort-select'),
  
  // Navigation Sidebar
  sidebarNav: document.getElementById('sidebar-nav'),
  sidebarLinks: document.querySelectorAll('.nav-link-item'),
  hamburgerBtn: document.getElementById('hamburger-menu-btn'),
  
  // Cart & Wishlist counters
  cartCount: document.getElementById('cart-count'),
  wishlistCount: document.getElementById('wishlist-count'),
  drawerCartCount: document.getElementById('drawer-cart-count'),
  
  // Sliding Drawer
  cartDrawer: document.getElementById('cart-drawer'),
  cartDrawerOverlay: document.getElementById('cart-drawer-overlay'),
  cartDrawerClose: document.getElementById('cart-drawer-close'),
  cartItemsContainer: document.getElementById('cart-items-container'),
  sidebarCartToggle: document.getElementById('sidebar-cart-toggle'),
  mobileCartToggle: document.getElementById('mobile-cart-toggle'),
  
  // Cart Summary Pricing
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartDelivery: document.getElementById('cart-delivery'),
  cartTotal: document.getElementById('cart-total'),
  checkoutBtn: document.getElementById('checkout-btn'),
  
  // Details Modal
  detailModal: document.getElementById('product-detail-modal'),
  detailModalContent: document.getElementById('product-detail-content'),
  detailModalClose: document.getElementById('detail-modal-close'),
  
  // Checkout Modal
  checkoutModal: document.getElementById('checkout-modal'),
  checkoutModalClose: document.getElementById('checkout-modal-close'),
  checkoutForm: document.getElementById('checkout-form-details'),
  checkoutItemsSummary: document.getElementById('checkout-items-summary'),
  checkoutSubtotal: document.getElementById('checkout-subtotal'),
  checkoutDelivery: document.getElementById('checkout-delivery'),
  checkoutTotal: document.getElementById('checkout-total'),
  
  // Success Modal
  successModal: document.getElementById('success-modal'),
  successModalContainer: document.getElementById('success-modal-container'),
  successCloseBtn: document.getElementById('success-close-btn'),
  
  // Toast
  toast: document.getElementById('toast'),
  toastMsg: document.getElementById('toast-msg'),
  
  // General triggers
  bannerCta: document.getElementById('banner-cta'),
  heroBtnPrimary: document.getElementById('hero-btn-primary'),
  heroBtnSecondary: document.getElementById('hero-btn-secondary'),
  sidebarWishlistToggle: document.getElementById('sidebar-wishlist-toggle'),
  categoryTiles: document.querySelectorAll('.category-tile'),
  tabNavBtns: document.querySelectorAll('.tab-nav-btn')
};

// Initialize Application
function init() {
  loadLocalStorage();
  registerEvents();
  renderCatalog();
  updateCounters();
}

// LocalStorage Sync
function loadLocalStorage() {
  const savedCart = localStorage.getItem('brickthreads_cart');
  const savedWishlist = localStorage.getItem('brickthreads_wishlist');
  
  if (savedCart) {
    state.cart = JSON.parse(savedCart);
  }
  if (savedWishlist) {
    state.wishlist = JSON.parse(savedWishlist);
  }
}

function saveLocalStorage() {
  localStorage.setItem('brickthreads_cart', JSON.stringify(state.cart));
  localStorage.setItem('brickthreads_wishlist', JSON.stringify(state.wishlist));
}

// Toast Notification
function showToast(message, icon = '📦') {
  dom.toastMsg.textContent = message;
  dom.toast.querySelector('.toast-icon').textContent = icon;
  dom.toast.classList.add('active');
  
  setTimeout(() => {
    dom.toast.classList.remove('active');
  }, 2500);
}

// UI Counters Update
function updateCounters() {
  const totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  dom.cartCount.textContent = totalItems;
  dom.drawerCartCount.textContent = totalItems;
  dom.wishlistCount.textContent = state.wishlist.length;
}

// -------------------- RENDER CATALOG --------------------
function renderCatalog() {
  // 1. Filter Products
  let filtered = [...state.products];
  
  // Filter by Wishlist Toggle
  if (state.showOnlyWishlist) {
    filtered = filtered.filter(p => state.wishlist.includes(p.id));
  } else {
    // Filter by category
    if (state.activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === state.activeCategory);
    }
    
    // Filter by tabs (What's New, Exclusives, Offers)
    if (state.activeFilterTab === 'exclusives') {
      filtered = filtered.filter(p => p.badge === 'Exclusives');
    } else if (state.activeFilterTab === 'offers') {
      filtered = filtered.filter(p => p.badge === 'Offer');
    }
  }
  
  // Filter by search query
  if (state.searchQuery.trim() !== '') {
    const query = state.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.subCategory.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.features.some(f => f.toLowerCase().includes(query))
    );
  }
  
  // 2. Sort Products
  if (state.sortOption === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortOption === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortOption === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }
  
  // Update displayed count
  dom.displayedCount.textContent = filtered.length;
  
  // 3. Render HTML
  if (filtered.length === 0) {
    dom.catalogGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <span class="empty-state-icon">🧩</span>
        <h4 class="insiders-card-title">No brick threads found</h4>
        <p class="empty-state-text">Try resetting your filters or adjusting your search term.</p>
        <button class="btn-primary" id="btn-reset-filters" style="margin-top: 10px;">Clear Search & Filters</button>
      </div>
    `;
    
    document.getElementById('btn-reset-filters').addEventListener('click', () => {
      state.searchQuery = '';
      dom.searchVal.value = '';
      state.activeCategory = 'all';
      state.activeFilterTab = 'all';
      state.sortOption = 'default';
      state.showOnlyWishlist = false;
      dom.sortSelect.value = 'default';
      
      // Reset sidebar link highlights
      dom.sidebarLinks.forEach(link => {
        if (link.getAttribute('data-tab') === 'all') {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
      
      // Reset tab underlines
      dom.tabNavBtns.forEach(btn => {
        if (btn.getAttribute('data-filter') === 'all') {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      renderCatalog();
    });
    return;
  }
  
  dom.catalogGrid.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.includes(product.id);
    const badgeHtml = product.badge 
      ? `<span class="product-card-badge">${product.badge}</span>` 
      : '';
      
    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-card-image-area">
          ${badgeHtml}
          <button class="wishlist-overlay-btn ${isWishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="Add to Wishlist">
            <svg viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <img src="${product.image}" alt="${product.name}" class="product-card-img" loading="lazy">
        </div>
        <div class="product-card-content-area">
          <div class="product-card-metadata">
            <span>${product.subCategory}</span>
            <span class="product-card-rating">
              ★ <span>${product.rating}</span>
            </span>
          </div>
          <h3 class="product-card-title">${product.name}</h3>
          
          <div class="product-card-bottom">
            <div class="product-card-price-row">
              <span class="product-card-price">₹${product.price.toLocaleString('en-IN')}</span>
            </div>
            <button class="product-card-add-btn" data-id="${product.id}">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.44-.83-.44-.32 0-.64.16-.83.44L6.79 9H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h.09l1.72 8.24c.15.7.77 1.2 1.49 1.2h13.4c.72 0 1.34-.5 1.49-1.2L21.91 12h.09c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-4.79zM9 9l3-4.5L15 9H9z"/></svg>
              Add to Bag
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
  
  // Register click events for cards
  attachCardEvents();
}

// Attach Events inside the Product Grid
function attachCardEvents() {
  // Click on product card image area opens modal
  const cards = dom.catalogGrid.querySelectorAll('.product-card-image-area');
  cards.forEach(cardArea => {
    cardArea.addEventListener('click', (e) => {
      // Exclude wishlist button clicks
      if (e.target.closest('.wishlist-overlay-btn')) return;
      
      const productId = cardArea.closest('.product-card').getAttribute('data-id');
      const product = state.products.find(p => p.id === productId);
      if (product) openProductDetails(product);
    });
  });

  // Click on Title opens modal
  const titles = dom.catalogGrid.querySelectorAll('.product-card-title');
  titles.forEach(title => {
    title.addEventListener('click', () => {
      const productId = title.closest('.product-card').getAttribute('data-id');
      const product = state.products.find(p => p.id === productId);
      if (product) openProductDetails(product);
    });
  });
  
  // Add to Bag Button
  const addButtons = dom.catalogGrid.querySelectorAll('.product-card-add-btn');
  addButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = btn.getAttribute('data-id');
      const product = state.products.find(p => p.id === productId);
      if (product) {
        addToCart(product, product.sizes[0] || 'Free Size', product.colors[0] || 'Default');
      }
    });
  });

  // Wishlist Button
  const wishlistButtons = dom.catalogGrid.querySelectorAll('.wishlist-overlay-btn');
  wishlistButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = btn.getAttribute('data-id');
      toggleWishlist(productId);
    });
  });
}

// -------------------- WISHLIST OPERATIONS --------------------
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  const product = state.products.find(p => p.id === productId);
  
  if (index === -1) {
    state.wishlist.push(productId);
    showToast(`Saved to Wishlist!`, '❤️');
  } else {
    state.wishlist.splice(index, 1);
    showToast(`Removed from Wishlist.`, '💔');
  }
  
  saveLocalStorage();
  updateCounters();
  renderCatalog();
}

// -------------------- CART OPERATIONS --------------------
function addToCart(product, size, color, quantity = 1) {
  // Check if item already exists in cart with same size & color
  const existingIndex = state.cart.findIndex(item => 
    item.product.id === product.id && 
    item.selectedSize === size && 
    item.selectedColor === color
  );
  
  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      product,
      quantity,
      selectedSize: size,
      selectedColor: color
    });
  }
  
  saveLocalStorage();
  updateCounters();
  renderCart();
  showToast(`"${product.name}" added to Bag!`, '🛍️');
  
  // Auto open cart drawer
  openCartDrawer();
}

function updateCartQuantity(index, newQty) {
  if (newQty <= 0) {
    state.cart.splice(index, 1);
  } else {
    state.cart[index].quantity = newQty;
  }
  
  saveLocalStorage();
  updateCounters();
  renderCart();
}

function removeFromCart(index) {
  const name = state.cart[index].product.name;
  state.cart.splice(index, 1);
  saveLocalStorage();
  updateCounters();
  renderCart();
  showToast(`Removed "${name}" from Bag.`, '🗑️');
}

// Render Cart Drawer
function renderCart() {
  if (state.cart.length === 0) {
    dom.cartItemsContainer.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">🛒</span>
        <h4 class="insiders-card-title">Your Bag is empty</h4>
        <p class="empty-state-text">Time to start building your style with new releases.</p>
      </div>
    `;
    
    dom.cartSubtotal.textContent = '₹0';
    dom.cartDelivery.textContent = 'FREE';
    dom.cartTotal.textContent = '₹0';
    dom.checkoutBtn.disabled = true;
    return;
  }
  
  dom.checkoutBtn.disabled = false;
  
  dom.cartItemsContainer.innerHTML = state.cart.map((item, idx) => {
    const itemTotal = item.product.price * item.quantity;
    return `
      <div class="cart-item">
        <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.product.name}</h4>
          <span class="cart-item-meta">Size: ${item.selectedSize} | Color: ${item.selectedColor}</span>
          
          <div class="cart-item-bottom">
            <div class="quantity-controller">
              <button class="qty-btn dec-qty" data-index="${idx}">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn inc-qty" data-index="${idx}">+</button>
            </div>
            
            <span class="cart-item-price">₹${itemTotal.toLocaleString('en-IN')}</span>
            <button class="cart-item-remove" data-index="${idx}">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Calculate Totals
  const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const delivery = subtotal >= 1999 ? 0 : 150;
  const total = subtotal + delivery;
  
  dom.cartSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  dom.cartDelivery.textContent = delivery === 0 ? 'FREE' : `₹${delivery}`;
  dom.cartTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
  
  // Register Drawer item controls
  const decBtns = dom.cartItemsContainer.querySelectorAll('.dec-qty');
  decBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'));
      updateCartQuantity(idx, state.cart[idx].quantity - 1);
    });
  });
  
  const incBtns = dom.cartItemsContainer.querySelectorAll('.inc-qty');
  incBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'));
      updateCartQuantity(idx, state.cart[idx].quantity + 1);
    });
  });
  
  const removeBtns = dom.cartItemsContainer.querySelectorAll('.cart-item-remove');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'));
      removeFromCart(idx);
    });
  });
}

function openCartDrawer() {
  dom.cartDrawer.classList.add('active');
  dom.cartDrawerOverlay.classList.add('active');
  renderCart();
}

function closeCartDrawer() {
  dom.cartDrawer.classList.remove('active');
  dom.cartDrawerOverlay.classList.remove('active');
}

// -------------------- PRODUCT DETAIL MODAL --------------------
function openProductDetails(product) {
  state.selectedProduct = product;
  state.detailSize = product.sizes[0] || 'Free Size';
  state.detailColor = product.colors[0] || 'Default';
  state.detailImageIndex = 0;
  
  renderProductDetails();
  dom.detailModal.classList.add('active');
}

function closeProductDetails() {
  dom.detailModal.classList.remove('active');
}

function renderProductDetails() {
  const p = state.selectedProduct;
  if (!p) return;
  
  const isWishlisted = state.wishlist.includes(p.id);
  const badgeHtml = p.badge ? `<span class="detail-badge">${p.badge}</span>` : '';
  
  // Render Size Options
  const sizeOptionsHtml = p.sizes.map(size => `
    <button class="size-btn ${state.detailSize === size ? 'active' : ''}" data-size="${size}">${size}</button>
  `).join('');
  
  // Render Color Dot buttons
  const colorOptionsHtml = p.colors.map(color => {
    let style = '';
    // Map human names to simple CSS colors
    const colName = color.toLowerCase();
    if (colName.includes('black')) style = 'background-color:#141414;';
    else if (colName.includes('yellow')) style = 'background-color:#FFD502;';
    else if (colName.includes('orange')) style = 'background-color:#F47D20;';
    else if (colName.includes('blue') || colName.includes('indigo')) style = 'background-color:#005AD2;';
    else if (colName.includes('red')) style = 'background-color:#D0021B;';
    else if (colName.includes('green')) style = 'background-color:#00875A;';
    else if (colName.includes('white')) style = 'background-color:#FFFFFF; border:1px solid #E0E0E0;';
    else if (colName.includes('beige') || colName.includes('camel') || colName.includes('khaki')) style = 'background-color:#C5A059;';
    else style = 'background-color:#888888;';
    
    return `
      <button class="color-dot-btn ${state.detailColor === color ? 'active' : ''}" data-color="${color}" style="${style}" title="${color}"></button>
    `;
  }).join('');
  
  // Render Feature Checkmarks
  const featuresHtml = p.features.map(f => `
    <li>${f}</li>
  `).join('');
  
  // Render Thumbnail Slides
  const thumbnailsHtml = p.gallery.map((img, idx) => `
    <img src="${img}" alt="Angle ${idx + 1}" class="gallery-thumb ${state.detailImageIndex === idx ? 'active' : ''}" data-index="${idx}">
  `).join('');
  
  dom.detailModalContent.innerHTML = `
    <!-- Gallery Columns -->
    <div class="product-gallery-column">
      <div class="gallery-main-image-wrap">
        <img src="${p.gallery[state.detailImageIndex] || p.image}" alt="${p.name}" class="gallery-main-image" id="main-detail-img">
      </div>
      <div class="gallery-thumbnails-row">
        ${thumbnailsHtml}
      </div>
    </div>
    
    <!-- Specs Column -->
    <div class="product-info-column">
      ${badgeHtml}
      <h2 class="detail-name">${p.name}</h2>
      
      <div class="detail-rating-row">
        <span class="detail-rating">★ ${p.rating}</span>
        <span class="detail-reviews">(${p.reviewCount} user reviews)</span>
      </div>
      
      <div class="detail-price">₹${p.price.toLocaleString('en-IN')}</div>
      <p class="detail-desc">${p.description}</p>
      
      <!-- Size Option -->
      <div class="detail-options-group">
        <span class="detail-options-label">Select Size</span>
        <div class="size-selector-row">
          ${sizeOptionsHtml}
        </div>
      </div>
      
      <!-- Color Option -->
      <div class="detail-options-group">
        <span class="detail-options-label">Select Color: <span style="font-weight:400; color:var(--color-steel);">${state.detailColor}</span></span>
        <div class="color-selector-row">
          ${colorOptionsHtml}
        </div>
      </div>
      
      <ul class="detail-features-list">
        ${featuresHtml}
      </ul>
      
      <div class="detail-actions-row">
        <button class="product-card-add-btn detail-add-btn" id="modal-add-to-bag">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.44-.83-.44-.32 0-.64.16-.83.44L6.79 9H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h.09l1.72 8.24c.15.7.77 1.2 1.49 1.2h13.4c.72 0 1.34-.5 1.49-1.2L21.91 12h.09c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-4.79zM9 9l3-4.5L15 9H9z"/></svg>
          Add to Bag
        </button>
        
        <button class="circular-icon-btn detail-wishlist-btn ${isWishlisted ? 'active' : ''}" id="modal-wishlist-btn" style="${isWishlisted ? 'color: var(--color-flag-red);' : ''}">
          <svg viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" width="22" height="22">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
      </div>
    </div>
  `;
  
  // Attach Inner Events for details
  attachDetailEvents();
}

function attachDetailEvents() {
  const container = dom.detailModalContent;
  const p = state.selectedProduct;
  
  // Thumbnail swapping
  const thumbs = container.querySelectorAll('.gallery-thumb');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.getAttribute('data-index'));
      state.detailImageIndex = idx;
      
      // Update image source & active thumb style
      container.querySelector('#main-detail-img').src = p.gallery[idx];
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
  
  // Size selection
  const sizeBtns = container.querySelectorAll('.size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.detailSize = btn.getAttribute('data-size');
      sizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  
  // Color selection
  const colorBtns = container.querySelectorAll('.color-dot-btn');
  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.detailColor = btn.getAttribute('data-color');
      colorBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Re-render label to show color name
      const colorLabel = container.querySelector('.detail-options-group span[style]');
      if (colorLabel) colorLabel.textContent = state.detailColor;
    });
  });
  
  // Add to Bag action
  container.querySelector('#modal-add-to-bag').addEventListener('click', () => {
    addToCart(p, state.detailSize, state.detailColor, 1);
    closeProductDetails();
  });
  
  // Wishlist toggle action
  container.querySelector('#modal-wishlist-btn').addEventListener('click', () => {
    toggleWishlist(p.id);
    // Refresh modal wishlist icon state
    const isNowWishlisted = state.wishlist.includes(p.id);
    const btn = container.querySelector('#modal-wishlist-btn');
    const svg = btn.querySelector('svg');
    if (isNowWishlisted) {
      btn.classList.add('active');
      btn.style.color = 'var(--color-flag-red)';
      svg.setAttribute('fill', 'currentColor');
    } else {
      btn.classList.remove('active');
      btn.style.color = '';
      svg.setAttribute('fill', 'none');
    }
  });
}

// -------------------- CHECKOUT OPERATIONS --------------------
function openCheckout() {
  if (state.cart.length === 0) return;
  closeCartDrawer();
  
  // Populate order summary in checkout
  const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const delivery = subtotal >= 1999 ? 0 : 150;
  const total = subtotal + delivery;
  
  dom.checkoutSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  dom.checkoutDelivery.textContent = delivery === 0 ? 'FREE' : `₹${delivery}`;
  dom.checkoutTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
  
  // Mini item list
  dom.checkoutItemsSummary.innerHTML = state.cart.map(item => `
    <div class="checkout-item-mini">
      <div class="checkout-item-mini-name">${item.product.name} (x${item.quantity})</div>
      <div class="checkout-item-mini-price">₹${(item.product.price * item.quantity).toLocaleString('en-IN')}</div>
    </div>
  `).join('');
  
  dom.checkoutModal.classList.add('active');
}

function closeCheckout() {
  dom.checkoutModal.classList.remove('active');
}

function submitCheckout() {
  // Validate Form
  if (!dom.checkoutForm.checkValidity()) {
    dom.checkoutForm.reportValidity();
    return;
  }
  
  // Success trigger
  closeCheckout();
  state.cart = [];
  saveLocalStorage();
  updateCounters();
  renderCart();
  
  openSuccessModal();
}

function openSuccessModal() {
  dom.successModal.classList.add('active');
  triggerConfetti();
}

function closeSuccessModal() {
  dom.successModal.classList.remove('active');
}

// Simulated Confetti Particle System
function triggerConfetti() {
  const container = dom.successModalContainer;
  const colors = ['#FFD502', '#F47D20', '#005AD2', '#D0021B', '#00875A'];
  
  // Create 50 particles
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Random styling
    confetti.style.left = `${Math.random() * 90 + 5}%`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = `${Math.random() * 1.5}s`;
    confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
    
    // Add to container
    container.appendChild(confetti);
    
    // Auto-remove particles after animation cycles
    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

// -------------------- EVENT REGISTRATION --------------------
function registerEvents() {
  // Category switching (Sidebar Links)
  dom.sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Toggle Active styling
      dom.sidebarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      const category = link.getAttribute('data-tab');
      state.activeCategory = category;
      state.showOnlyWishlist = false; // Reset wishlist filter
      
      // Update Hero Section imagery/context depending on category choice
      updateHeroBanner(category);
      
      renderCatalog();
      
      // Smooth scroll back to catalog if scrolled down
      dom.catalogGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // If mobile drawer layout, close sidebar on link selection
      if (window.innerWidth <= 768) {
        dom.sidebarNav.classList.remove('active');
      }
    });
  });
  
  // Category Switching via Home Category Tiles
  dom.categoryTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const category = tile.getAttribute('data-category');
      
      // Select corresponding sidebar link
      dom.sidebarLinks.forEach(link => {
        if (link.getAttribute('data-tab') === category) {
          link.click();
        }
      });
    });
  });
  
  // Search Events
  dom.searchVal.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderCatalog();
  });
  
  dom.searchBtn.addEventListener('click', () => {
    state.searchQuery = dom.searchVal.value;
    renderCatalog();
  });
  
  // Sort selection
  dom.sortSelect.addEventListener('change', (e) => {
    state.sortOption = e.target.value;
    renderCatalog();
  });
  
  // Horizontal Filter Tabs (What's New, Exclusives, Offers)
  dom.tabNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dom.tabNavBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      state.activeFilterTab = btn.getAttribute('data-filter');
      state.showOnlyWishlist = false; // Reset wishlist filter
      renderCatalog();
    });
  });
  
  // Sidebar Wishlist Toggle
  dom.sidebarWishlistToggle.addEventListener('click', () => {
    state.showOnlyWishlist = true;
    
    // Clear sidebar active styles
    dom.sidebarLinks.forEach(l => l.classList.remove('active'));
    
    renderCatalog();
    dom.catalogGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    if (window.innerWidth <= 768) {
      dom.sidebarNav.classList.remove('active');
    }
  });
  
  // Cart Drawers Open/Close triggers
  dom.sidebarCartToggle.addEventListener('click', openCartDrawer);
  dom.mobileCartToggle.addEventListener('click', openCartDrawer);
  dom.cartDrawerClose.addEventListener('click', closeCartDrawer);
  dom.cartDrawerOverlay.addEventListener('click', closeCartDrawer);
  
  // Close Modals
  dom.detailModalClose.addEventListener('click', closeProductDetails);
  dom.checkoutModalClose.addEventListener('click', closeCheckout);
  dom.successCloseBtn.addEventListener('click', closeSuccessModal);
  
  // Close details modal when clicking outside overlay
  dom.detailModal.addEventListener('click', (e) => {
    if (e.target === dom.detailModal) closeProductDetails();
  });
  dom.checkoutModal.addEventListener('click', (e) => {
    if (e.target === dom.checkoutModal) closeCheckout();
  });
  
  // Checkout triggers
  dom.checkoutBtn.addEventListener('click', openCheckout);
  dom.checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitCheckout();
  });
  
  // Banner & Hero Button Actions
  dom.bannerCta.addEventListener('click', (e) => {
    e.preventDefault();
    dom.catalogGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  
  dom.heroBtnPrimary.addEventListener('click', () => {
    // Open detail of first featured item
    const firstProduct = state.products[0];
    if (firstProduct) openProductDetails(firstProduct);
  });
  
  dom.heroBtnSecondary.addEventListener('click', () => {
    dom.catalogGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  
  // Mobile Hamburger Menu Toggle
  dom.hamburgerBtn.addEventListener('click', () => {
    dom.sidebarNav.classList.toggle('active');
  });
}

// Update Hero Banner Content Dynamically based on Category
function updateHeroBanner(category) {
  const content = {
    all: {
      title: "Unbox Your Style.",
      subtitle: "Premium Indian cotton and linen fabrics tailored with the bold color spirit of freshly opened toy bricks. Grounded in comfort.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&auto=format&fit=crop&q=80",
      badge: "New Exclusives"
    },
    men: {
      title: "Built For Builders.",
      subtitle: "Tailored blazers, rugged denim, and breathable linen shirts made with top-quality materials and sharp geometries. Shop the new season.",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&auto=format&fit=crop&q=80",
      badge: "Men's Collection"
    },
    women: {
      title: "Draped In Colors.",
      subtitle: "Premium crepe evening gowns, velvet party wear, and floral summer dresses designed to make bold fashion statements.",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&auto=format&fit=crop&q=80",
      badge: "Women's Collection"
    },
    kids: {
      title: "Made For Playtime.",
      subtitle: "Sunshine sweaters, waterproof storm overalls, and cozy beanies constructed with extra-soft Cambric cotton. Free of itchiness.",
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=1200&auto=format&fit=crop&q=80",
      badge: "Kids & Toddlers"
    }
  };
  
  const c = content[category] || content.all;
  const hero = document.querySelector('.hero-section');
  
  hero.querySelector('.hero-title').textContent = c.title;
  hero.querySelector('.hero-subtitle').textContent = c.subtitle;
  hero.querySelector('.hero-badge').textContent = c.badge;
  hero.querySelector('.hero-image-bg').style.backgroundImage = `url('${c.image}')`;
}

// Start Application
window.addEventListener('DOMContentLoaded', init);
