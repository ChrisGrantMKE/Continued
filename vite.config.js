import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]

// https://vite.dev/config/
export default defineConfig({
  base: repoName ? `/${repoName}/` : '/',
  plugins: [vue()],
})
