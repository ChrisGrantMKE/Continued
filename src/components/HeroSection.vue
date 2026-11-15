<script setup>
import heroImg from '../assets/frame-1.png'
import masterClassLogo from '../assets/master-class-logo.png'
</script>

<template>
  <section class="hero-section">
    <div class="container hero-container">
      <div class="hero-media">
        <img
          :src="heroImg"
          alt="A speech-language pathologist in conversation with an adult client across a clinic table."
          class="hero-image"
        />
      </div>

      <div class="hero-card">
        <img :src="masterClassLogo" alt="Master Class" class="hero-logo" />
        <h1 class="type-display hero-title">Master Class courses for speech pathologists</h1>
        <p class="type-body hero-copy">
          In-depth courses from leading experts, grouped by the kind of work you do. Learn skills
          you can use in practice right away.
        </p>
        <div class="hero-actions">
          <a
            href="https://www.speechpathology.com/membership"
            target="_blank"
            rel="noopener"
            class="btn btn-primary"
          >
            Join now <span aria-hidden="true">→</span>
          </a>
          <a href="#focus-areas" class="btn btn-secondary">
            Browse focus areas <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding-bottom: 48px;
}

.hero-container {
  position: relative;
  padding-inline: 0;
}

.hero-media {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: var(--color-surface-light);
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
}

.hero-card {
  background-color: var(--color-white);
  padding: 28px var(--gutter) 0;
}

.hero-logo {
  height: 36px;
  width: auto;
  margin-bottom: 14px;
}

.hero-title {
  color: var(--color-charcoal);
  margin-bottom: 14px;
}

.hero-copy {
  color: var(--color-text-secondary);
  margin-bottom: 24px;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hero-actions .btn {
  width: 100%;
}

@media (min-width: 900px) {
  .hero-section {
    padding-bottom: 72px;
  }

  .hero-container {
    padding-inline: var(--gutter);
  }

  .hero-media {
    aspect-ratio: 9 / 4;
  }

  .hero-card {
    position: absolute;
    left: calc(var(--gutter) + 40px);
    top: 50%;
    transform: translateY(-50%);
    width: min(440px, 42%);
    padding: 36px;
    border: 1px solid var(--color-border-dark);
  }

  .hero-actions {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .hero-actions .btn {
    width: auto;
  }
}
</style>
