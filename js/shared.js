// shared.js — injects header and footer into every page

const HEADER_HTML = `
<div class="topbar">
  <div class="container">
    <a href="tel:3368553888">(336) 855-3888</a>
    <a href="mailto:sales@thehersheygroup.com">sales@thehersheygroup.com</a>
  </div>
</div>
<header class="site-header">
  <div class="header-inner">
    <a class="site-logo" href="/index.html">
      <img src="https://thehersheygroup.com/wp-content/uploads/2019/06/THG-Letterhead-Version.png"
           alt="The Hershey Group Inc." />
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="site-nav" id="siteNav">
      <li><a href="/pages/about.html">About Us</a></li>
      <li><a href="/pages/services.html">Services</a></li>
      <li class="dropdown">
        <a href="#">Portfolio ▾</a>
        <ul class="dropdown-menu">
          <li><a href="/pages/portfolio.html">All Products</a></li>
          <li><a href="/pages/portfolio.html#customized">Customized Products</a></li>
          <li><a href="/pages/portfolio.html#bags">Bags and Totes</a></li>
          <li><a href="/pages/portfolio.html#electronics">Custom Electronics</a></li>
          <li><a href="/pages/portfolio.html#bar">Bar Related Items</a></li>
        </ul>
      </li>
      <li><a href="/pages/faq.html">FAQ's</a></li>
      <li><a href="/pages/contact.html" class="nav-cta">Contact Us Today</a></li>
    </ul>
  </div>
</header>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <img class="footer-logo"
             src="https://thehersheygroup.com/wp-content/uploads/2019/06/THG-Letterhead-Version.png"
             alt="The Hershey Group Inc." />
        <p class="footer-about">
          The Hershey Group, Inc. specializes in custom made bags, packaging, and
          promotional items. Founded in 1992, we have grown to become a trusted
          importing company for distributors across the country.
        </p>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul class="footer-links">
          <li><a href="/index.html">Home</a></li>
          <li><a href="/pages/about.html">About Us</a></li>
          <li><a href="/pages/services.html">Services</a></li>
          <li><a href="/pages/portfolio.html">Portfolio</a></li>
          <li><a href="/pages/faq.html">FAQ's</a></li>
          <li><a href="/pages/contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col footer-contact">
        <h4>Contact</h4>
        <p>
          The Hershey Group<br>
          2010-A New Garden Road<br>
          Greensboro, NC 27410<br><br>
          <a href="tel:3368553888">(336) 855-3888</a><br>
          <a href="mailto:sales@thehersheygroup.com">sales@thehersheygroup.com</a>
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} The Hershey Group, Inc. All rights reserved.</p>
    </div>
  </div>
</footer>
`;

// Inject header and footer
document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = HEADER_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // Highlight active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.site-nav a').forEach(a => {
    if (a.getAttribute('href') === path ||
        (path.includes(a.getAttribute('href')) && a.getAttribute('href') !== '/index.html')) {
      a.style.color = 'var(--blue)';
    }
  });

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const nav    = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  reveals.forEach(r => io.observe(r));
});
