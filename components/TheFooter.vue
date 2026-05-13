<template>
  <footer class="the-footer">

    <div class="top-grid">

      <!-- Column 1: Terminal flavor text -->
      <div class="col col-terminal">
        <p class="type-caption4">// INITIALIZING</p>
        <p class="type-caption4">NEW FILES IN DATABASE</p>
        <p class="type-caption4">&nbsp;</p>
        <p class="type-caption4">FILE_001.JPG</p>
        <p class="type-caption4">AUDIO_LOG_0001.WAV</p>
        <p class="type-caption4">&nbsp;</p>
        <p class="type-caption4">ACTIVATE CONSOLE FOR ACCESS...</p>
      </div>

      <!-- Column 2: Discover More -->
      <div class="col">
        <p class="section-header type-caption2">● DISCOVER MORE</p>
        <NuxtLink to="/"        class="footer-link type-caption2">STORY</NuxtLink>
        <NuxtLink to="/journal" class="footer-link type-caption2">JOURNAL</NuxtLink>
        <NuxtLink to="/media"   class="footer-link type-caption2">MEDIA</NuxtLink>
        <NuxtLink to="/gallery" class="footer-link type-caption2">GALLERY</NuxtLink>
        <NuxtLink to="/about"   class="footer-link type-caption2">ABOUT</NuxtLink>
        <a href="#" class="footer-link type-caption2" target="_blank" rel="noopener noreferrer">CAREERS ↗</a>
      </div>

      <!-- Column 3: Connect -->
      <div class="col">
        <p class="section-header type-caption2">● JOIN THE CONVERSATION</p>
        <a href="#" class="footer-link type-caption2" target="_blank" rel="noopener noreferrer">TWITTER</a>
        <a href="#" class="footer-link type-caption2" target="_blank" rel="noopener noreferrer">DISCORD</a>
      </div>

      <!-- Column 4: More Details -->
      <div class="col">
        <p class="section-header type-caption2">● MORE DETAILS</p>
        <p class="contact-label type-caption4">CONTACT US AT</p>
        <a href="mailto:hello@jodlxverse.com" class="footer-link type-caption2">hello@jodlxverse.com</a>
        <!-- BtnMain (Phase 3): download brand book -->
        <button class="btn-presskit type-caption2">
          <span>↓</span>
          <span>DOWNLOAD BRAND BOOK</span>
        </button>
      </div>

    </div>

    <div class="divider" />

    <!-- Wordmark — [BRAND] SVG to replace with footer_jodlx.svg -->
    <div class="footer-wordmark">
      <p class="wordmark-placeholder type-h3">JODLXVERSE</p>
    </div>

    <!-- Bottom bar -->
    <div class="bottom-bar">
      <div class="bottom-left">
        <NuxtLink to="/legal/privacy-policy"  class="footer-link type-caption4">PRIVACY POLICY</NuxtLink>
        <NuxtLink to="/legal/terms-of-service" class="footer-link type-caption4">TERMS OF SERVICE</NuxtLink>
        <NuxtLink to="/legal/legal-license"   class="footer-link type-caption4">LEGAL LICENSE</NuxtLink>
      </div>
      <span class="type-caption4 copyright">© 2026 JODLXVERSE</span>
    </div>

  </footer>
</template>

<style scoped>
.the-footer {
  background: #000000;
  color: #ffffff;
  width: 100%;
  z-index: var(--z-footer);
}

.top-grid {
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(4, 1fr);
  padding: 6rem var(--menu-left) 5rem;
}
@media (max-width: 767px) {
  .top-grid { grid-template-columns: 1fr 1fr; padding: 4rem 2rem; }
}

.col { display: flex; flex-direction: column; gap: 1.2rem; }

.col-terminal p { opacity: 0.5; }

.section-header { margin-bottom: 0.8rem; opacity: 0.5; }

.footer-link {
  color: inherit;
  display: block;
  opacity: 0.8;
  text-decoration: none;
}
.footer-link:hover { opacity: 1; }

.contact-label { opacity: 0.5; }

.btn-presskit {
  align-items: center;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  margin-top: 0.8rem;
  padding: 10px 16px;
}
.btn-presskit:hover { background: rgba(255, 255, 255, 0.05); }

.divider {
  background: hsla(0, 0%, 100%, 0.1);
  height: 1px;
  width: 100%;
}

.footer-wordmark {
  overflow: hidden;
  padding: 2rem var(--menu-left);
  width: 100%;
}

.wordmark-placeholder {
  font-size: clamp(4rem, 12vw, 16rem);
  letter-spacing: -0.04em;
  line-height: 1;
  opacity: 0.08;
  text-transform: uppercase;
}

.bottom-bar {
  align-items: center;
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 2rem var(--menu-left);
}

.bottom-left { display: flex; gap: 3rem; }

.copyright { opacity: 0.4; }
</style>
