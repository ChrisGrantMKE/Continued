<script setup>
import BenefitsAndTrust from './components/BenefitsAndTrust.vue'
import FocusPanel from './components/FocusPanel.vue'
import HeroSection from './components/HeroSection.vue'
import MembershipBanner from './components/MembershipBanner.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import { focusAreas } from './data/masterClasses'
</script>

<template>
  <div class="page-shell">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <SiteHeader />

    <main id="main-content" tabindex="-1">
      <HeroSection />

      <section id="focus-areas" class="focus-areas-section">
        <div class="container">
          <header class="section-header">
            <p class="type-label section-eyebrow">Focus areas</p>
            <h2 class="type-heading section-title">Choose a focus area</h2>
            <p class="type-body section-subtitle">
              Sixteen Master Classes, grouped by the kind of work you do. Open an area to see its
              courses.
            </p>
          </header>

          <div class="focus-panels-stack">
            <FocusPanel
              v-for="(area, index) in focusAreas"
              :key="area.id"
              :area="area"
              :index="index"
              :total="focusAreas.length"
            />
          </div>
        </div>
      </section>

      <MembershipBanner />
      <BenefitsAndTrust />
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.focus-areas-section {
  padding-block: 16px 24px;
}

.section-header {
  margin-bottom: 28px;
}

.section-eyebrow {
  color: var(--color-red);
  margin-bottom: 6px;
}

.section-title {
  color: var(--color-charcoal);
  margin-bottom: 8px;
}

.section-subtitle {
  color: var(--color-text-secondary);
}

.focus-panels-stack {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (min-width: 900px) {
  .focus-areas-section {
    padding-block: 16px 32px;
  }

  .section-header {
    margin-bottom: 32px;
  }

  .focus-panels-stack {
    gap: 28px;
  }
}
</style>
