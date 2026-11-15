<script setup>
import masterClassLogo from '../assets/master-class-logo.png'
import { benefits } from '../data/masterClasses'
</script>

<template>
  <section class="benefits-section">
    <div class="container">
      <div class="benefits-grid">
        <div v-for="item in benefits" :key="item.title" class="benefit-item">
          <h3 class="type-title benefit-title">{{ item.title }}</h3>
          <p class="type-body benefit-body">{{ item.body }}</p>
        </div>
      </div>

      <div class="trust-row">
        <div class="master-class-badge">
          <img :src="masterClassLogo" alt="Master Class" class="badge-logo-img" />
        </div>

        <div class="trustpilot-box">
          <div class="tp-col-left">
            <span class="tp-small">Our customers say</span>
            <span class="tp-excellent">Excellent</span>
          </div>

          <div class="tp-stars" aria-label="Rated 4.8 out of 5 stars">
            <span v-for="n in 5" :key="n" class="tp-star" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2L14.9 8.6L22 9.3L16.6 14L18.2 21L12 17.3L5.8 21L7.4 14L2 9.3L9.1 8.6L12 2Z"
                />
              </svg>
            </span>
          </div>

          <div class="tp-col-mid">
            <span class="tp-score">4.8 out of 5</span>
            <span class="tp-small">Based on 4,022 reviews</span>
          </div>

          <a
            href="https://www.trustpilot.com/review/speechpathology.com"
            target="_blank"
            rel="noopener"
            class="tp-link"
          >
            Read reviews on Trustpilot (opens in a new tab)
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits-section {
  padding-block: 16px 64px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 40px;
}

.benefit-item {
  border-top: 1px solid var(--color-border-dark);
  padding-top: 16px;
}

.benefit-title {
  color: var(--color-charcoal);
  margin-bottom: 8px;
}

.benefit-body {
  color: var(--color-text-secondary);
}

.trust-row {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
}

.master-class-badge {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.badge-logo-img {
  height: 44px;
  width: auto;
  display: block;
}

.trustpilot-box {
  width: 100%;
  border: 1px solid var(--color-red);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tp-col-left,
.tp-col-mid {
  display: flex;
  flex-direction: column;
}

.tp-small {
  font-size: 12px;
  line-height: 16px;
  color: var(--color-text-secondary);
}

.tp-excellent {
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: var(--color-charcoal);
}

.tp-score {
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  color: var(--color-charcoal);
}

.tp-stars {
  display: flex;
  gap: 4px;
}

.tp-star {
  width: 24px;
  height: 24px;
  background-color: var(--color-charcoal);
  color: var(--color-white);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tp-link {
  font-size: 12px;
  line-height: 18px;
  color: var(--color-text-secondary);
  text-decoration: underline;
}

.tp-link:hover {
  color: var(--color-red);
}

@media (min-width: 900px) {
  .benefits-section {
    padding-block: 16px 80px;
  }

  .benefits-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-bottom: 48px;
  }

  .trust-row {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }

  .trustpilot-box {
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 18px 28px;
  }
}
</style>
