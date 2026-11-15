<script setup>
import membershipImg from '../assets/frame-7.png'
</script>

<template>
  <section id="membership" class="membership-section">
    <div class="container membership-container">
      <div class="membership-media">
        <img
          :src="membershipImg"
          alt="Laptop, notebook, and coffee mug on a wooden desk at dusk beside a warm lamp."
          class="membership-image"
        />
      </div>

      <div class="membership-card">
        <p class="type-label membership-eyebrow">Membership</p>
        <h2 class="type-heading membership-title">Unlimited CEU access. $129/year.</h2>
        <p class="type-body membership-copy">
          Every Master Class and the full course library, for one annual price.
        </p>
        <a
          href="https://www.speechpathology.com/membership"
          target="_blank"
          rel="noopener"
          class="btn btn-primary membership-cta"
        >
          Join now <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.membership-section {
  padding-block: 40px 48px;
}

.membership-container {
  position: relative;
  padding-inline: 0;
}

.membership-media {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: var(--color-surface-light);
}

.membership-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
}

.membership-card {
  background-color: var(--color-white);
  padding: 28px var(--gutter) 0;
}

.membership-eyebrow {
  color: var(--color-text-secondary);
  margin-bottom: 10px;
}

.membership-title {
  color: var(--color-charcoal);
  margin-bottom: 12px;
}

.membership-copy {
  color: var(--color-text-secondary);
  margin-bottom: 24px;
}

.membership-cta {
  width: 100%;
}

@media (min-width: 900px) {
  .membership-section {
    padding-block: 56px 64px;
  }

  .membership-container {
    padding-inline: var(--gutter);
  }

  .membership-media {
    aspect-ratio: 9 / 3.6;
  }

  .membership-card {
    position: absolute;
    left: calc(var(--gutter) + 40px);
    top: 50%;
    transform: translateY(-50%);
    width: min(400px, 40%);
    padding: 36px;
    border: 1px solid var(--color-border-dark);
  }

  .membership-cta {
    width: auto;
  }
}
</style>
