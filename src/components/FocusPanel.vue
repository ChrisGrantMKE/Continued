<script setup>
import { ref } from 'vue'

const props = defineProps({
  area: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
})

const isOpen = ref(false)
const activeCourseIndex = ref(0)

function togglePanel() {
  if (!isOpen.value) {
    activeCourseIndex.value = 0
    isOpen.value = true
  } else {
    isOpen.value = false
  }
}

function toggleCourse(courseIdx) {
  activeCourseIndex.value = activeCourseIndex.value === courseIdx ? null : courseIdx
}
</script>

<template>
  <article class="focus-panel" :class="{ 'is-open': isOpen }">
    <div class="panel-summary">
      <div class="summary-top">
        <p class="type-label panel-eyebrow">
          Focus area {{ index + 1 }} of {{ total }} · {{ area.courses.length }} courses
        </p>
        <h3 class="type-title panel-title">{{ area.title }}</h3>
        <p class="type-body panel-description">{{ area.description }}</p>
      </div>

      <button
        type="button"
        class="btn panel-toggle-btn"
        :class="isOpen ? 'btn-on-dark' : 'btn-secondary'"
        :aria-expanded="isOpen"
        :aria-controls="`panel-content-${area.id}`"
        @click="togglePanel"
      >
        {{ isOpen ? 'Hide courses' : 'View courses' }}
        <span aria-hidden="true">{{ isOpen ? '–' : '+' }}</span>
      </button>
    </div>

    <div :id="`panel-content-${area.id}`" class="panel-detail">
      <div v-if="!isOpen" class="panel-media">
        <img :src="area.image" :alt="area.imageAlt" class="panel-image" />
      </div>

      <div v-else class="course-list" role="region" :aria-label="`${area.title} courses`">
        <div
          v-for="(course, courseIdx) in area.courses"
          :key="course.title"
          class="course-row"
          :class="{ 'is-expanded': activeCourseIndex === courseIdx }"
        >
          <button
            type="button"
            class="course-trigger"
            :aria-expanded="activeCourseIndex === courseIdx"
            :aria-controls="`course-body-${area.id}-${courseIdx}`"
            @click="toggleCourse(courseIdx)"
          >
            <span class="type-title course-name">{{ course.title }}</span>
            <span class="course-icon" aria-hidden="true">
              {{ activeCourseIndex === courseIdx ? '–' : '+' }}
            </span>
          </button>

          <div
            v-if="activeCourseIndex === courseIdx"
            :id="`course-body-${area.id}-${courseIdx}`"
            class="course-body"
          >
            <ul class="course-bullets">
              <li v-for="bullet in course.bullets" :key="bullet" class="type-body">
                {{ bullet }}
              </li>
            </ul>
            <p class="type-label course-meta">{{ course.meta }}</p>
            <a
              :href="course.url"
              target="_blank"
              rel="noopener"
              class="btn btn-secondary course-cta"
            >
              View course <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.focus-panel {
  border: 1px solid var(--color-border-dark);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
}

.panel-summary {
  background-color: var(--color-surface-light);
  color: var(--color-charcoal);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.focus-panel.is-open .panel-summary {
  background-color: var(--color-charcoal);
  color: var(--color-white);
}

.panel-eyebrow {
  color: var(--color-text-secondary);
  margin-bottom: 10px;
}

.focus-panel.is-open .panel-eyebrow {
  color: rgba(255, 255, 255, 0.8);
}

.panel-title {
  margin-bottom: 10px;
}

.panel-description {
  color: var(--color-text-secondary);
}

.focus-panel.is-open .panel-description {
  color: rgba(255, 255, 255, 0.88);
}

.panel-toggle-btn {
  width: 100%;
}

.panel-detail {
  display: flex;
  flex-direction: column;
}

.panel-media {
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-top: 1px solid var(--color-border-dark);
}

.panel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.course-list {
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-top: 1px solid var(--color-border-dark);
}

.course-row {
  border-bottom: 1px solid var(--color-border);
}

.course-row:last-child {
  border-bottom: none;
}

.course-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  background: transparent;
  border: none;
  text-align: left;
  color: var(--color-charcoal);
}

.course-trigger:hover .course-name {
  color: var(--color-red);
}

.course-name {
  font-size: 18px;
  line-height: 24px;
}

.course-icon {
  font-size: 20px;
  line-height: 1;
  font-weight: 400;
  color: var(--color-text-secondary);
  flex-shrink: 0;
}

.course-body {
  padding: 0 24px 24px;
}

.course-bullets {
  margin: 0 0 14px;
  padding-left: 20px;
  color: var(--color-text-secondary);
}

.course-bullets li + li {
  margin-top: 4px;
}

.course-meta {
  color: var(--color-text-muted);
  margin-bottom: 16px;
}

.course-cta {
  padding: 8px 16px;
}

@media (min-width: 900px) {
  .focus-panel {
    flex-direction: row;
    min-height: 560px;
  }

  .panel-summary {
    width: 34%;
    min-width: 320px;
    max-width: 380px;
    flex-shrink: 0;
    padding: 36px;
    border-right: 1px solid var(--color-border-dark);
  }

  .panel-toggle-btn {
    width: auto;
    align-self: flex-start;
  }

  .panel-detail {
    flex: 1;
    min-width: 0;
  }

  .panel-media {
    height: 100%;
    aspect-ratio: auto;
    border-top: none;
  }

  .course-list {
    height: 100%;
    border-top: none;
  }

  .course-trigger {
    padding: 22px 32px;
  }

  .course-name {
    font-size: 20px;
    line-height: 28px;
  }

  .course-body {
    padding: 0 32px 26px;
  }
}
</style>
