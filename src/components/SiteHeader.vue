<script setup>
import { nextTick, ref } from 'vue'
import spLogo from '../assets/sp-logo.svg'

const mobileMenuOpen = ref(false)
const menuBtnRef = ref(null)

async function closeMobileMenu() {
  mobileMenuOpen.value = false
  await nextTick()
  menuBtnRef.value?.focus()
}

const navLinks = [
  { label: 'Continuing Education', href: 'https://www.speechpathology.com' },
  { label: 'Career Center', href: 'https://www.speechpathology.com' },
  { label: 'Resources', href: 'https://www.speechpathology.com' },
  { label: 'Group Pricing', href: 'https://www.speechpathology.com' },
  { label: 'Why Continued', href: 'https://www.speechpathology.com' },
]
</script>

<template>
  <header class="site-header">
    <div class="announcement-bar">
      <div class="container announcement-inner">
        <span>Unlimited CEU access for $129/year.</span>
        <a
          href="https://www.speechpathology.com/membership"
          target="_blank"
          rel="noopener"
          class="announcement-link"
        >
          Join now<span class="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>

    <div class="nav-wrapper">
      <div class="container nav-inner">
        <a href="#" class="brand-logo" aria-label="SpeechPathology.com, a Continued family site">
          <img :src="spLogo" alt="SpeechPathology.com, a Continued family site" class="brand-logo-img" />
        </a>

        <nav class="desktop-nav" aria-label="Primary navigation">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            {{ link.label }}
          </a>
          <a
            href="https://www.speechpathology.com/login"
            target="_blank"
            rel="noopener"
            class="nav-link nav-login"
          >
            Log in
          </a>
          <a
            href="https://www.speechpathology.com/membership"
            target="_blank"
            rel="noopener"
            class="btn btn-primary nav-cta"
          >
            Join now
          </a>
        </nav>

        <button
          ref="menuBtnRef"
          type="button"
          class="btn btn-secondary mobile-menu-btn"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-nav-drawer"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          {{ mobileMenuOpen ? 'Close' : 'Menu' }}
        </button>
      </div>

      <nav
        v-if="mobileMenuOpen"
        id="mobile-nav-drawer"
        class="mobile-nav"
        aria-label="Mobile navigation"
        @keydown.escape="closeMobileMenu"
      >
        <div class="container mobile-nav-inner">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="mobile-nav-link"
          >
            {{ link.label }}
          </a>
          <a
            href="https://www.speechpathology.com/login"
            target="_blank"
            rel="noopener"
            class="mobile-nav-link"
          >
            Log in
          </a>
          <a
            href="https://www.speechpathology.com/membership"
            target="_blank"
            rel="noopener"
            class="btn btn-primary mobile-nav-cta"
          >
            Join now
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.announcement-bar {
  background-color: var(--color-topbar);
  color: var(--color-white);
  font-size: 13px;
  line-height: 18px;
  padding-block: 8px;
}

.announcement-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-align: center;
}

.announcement-link {
  text-decoration: underline;
  font-weight: 500;
}

.announcement-link:focus-visible {
  outline: 2px solid var(--color-white);
  outline-offset: 2px;
}

.nav-wrapper {
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 68px;
  gap: 16px;
}

.brand-logo {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.brand-logo-img {
  height: 34px;
  width: auto;
  display: block;
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 20px;
}

.nav-link {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: var(--color-charcoal);
  transition: color 0.15s ease;
}

.nav-link:hover {
  color: var(--color-red);
}

.nav-cta {
  padding: 8px 16px;
}

.mobile-menu-btn {
  padding: 8px 14px;
}

.mobile-nav {
  border-top: 1px solid var(--color-border);
  background-color: var(--color-white);
  padding-block: 16px 20px;
}

.mobile-nav-inner {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mobile-nav-link {
  font-size: 16px;
  line-height: 24px;
  color: var(--color-charcoal);
  padding-block: 4px;
  border-bottom: 1px solid #eceef0;
}

.mobile-nav-cta {
  margin-top: 4px;
  width: 100%;
}

@media (min-width: 960px) {
  .desktop-nav {
    display: flex;
  }

  .mobile-menu-btn,
  .mobile-nav {
    display: none;
  }
}
</style>
