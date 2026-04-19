import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to https://<username>.github.io/<repo-name>/
// change base to '/<repo-name>/'
// If using custom domain or <username>.github.io → keep '/'
export default defineConfig({
  plugins: [react()],
  base: 'PRJ-Portofolio-02-Remodel',
})
