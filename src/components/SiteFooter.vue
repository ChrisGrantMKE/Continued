<script setup>
import continuedLogo from '../assets/continued-logo.svg'
import { footerColumns, legalLinks } from '../data/masterClasses'
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-brand">
        <a href="https://www.continued.com" target="_blank" rel="noopener" aria-label="Continued">
          <img :src="continuedLogo" alt="Continued" class="footer-logo-img" />
        </a>
      </div>

      <div class="footer-top">
        <div class="footer-newsletter">
          <h2 class="type-title newsletter-title">Courses and CE news, by email.</h2>
          <p class="type-body newsletter-copy">
            Get new Master Classes and live webinars in your inbox.
          </p>
          <a
            href="https://www.speechpathology.com"
            target="_blank"
            rel="noopener"
            class="btn btn-secondary newsletter-cta"
          >
            Subscribe <span aria-hidden="true">→</span><span class="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <div class="footer-columns">
          <div v-for="col in footerColumns" :key="col.heading" class="footer-col">
            <h3 class="type-label col-heading">{{ col.heading }}</h3>
            <ul class="col-list">
              <li v-for="link in col.links" :key="link.label">
                <a
                  :href="link.href"
                  :target="link.href.startsWith('http') ? '_blank' : undefined"
                  :rel="link.href.startsWith('http') ? 'noopener' : undefined"
                  class="col-link"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">© 2026 Continued®</p>
        <div class="legal-links">
          <a
            v-for="link in legalLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="legal-link"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--color-surface-footer);
  color: var(--color-charcoal);
  padding-block: 48px 32px;
}

.footer-brand {
  margin-bottom: 28px;
}

.footer-logo-img {
  height: 30px;
  width: auto;
  display: block;
}

.footer-top {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 40px;
}

.newsletter-title {
  margin-bottom: 8px;
}

.newsletter-copy {
  color: var(--color-text-secondary);
  margin-bottom: 20px;
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px 24px;
}

.col-heading {
  color: var(--color-text-secondary);
  margin-bottom: 12px;
}

.col-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.col-link {
  font-size: 14px;
  line-height: 20px;
  color: var(--color-charcoal);
}

.col-link:hover {
  color: var(--color-red);
}

.footer-bottom {
  border-top: 1px solid #d0d7de;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 12px;
  line-height: 18px;
  color: var(--color-text-secondary);
}

.copyright {
  margin: 0;
}

.legal-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
}

.legal-link:hover {
  color: var(--color-red);
}

@media (min-width: 900px) {
  .site-footer {
    padding-block: 64px 36px;
  }

  .footer-top {
    flex-direction: row;
    justify-content: space-between;
    gap: 64px;
  }

  .footer-newsletter {
    max-width: 300px;
  }

  .footer-columns {
    flex: 1;
    grid-template-columns: repeat(4, 1fr);
  }

  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
