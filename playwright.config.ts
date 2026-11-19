import { defineConfig, devices } from '@playwright/test';

// E2E runs against the production build (npm run build + preview),
// so what is tested is what a visitor actually gets.
export default defineConfig({
	testDir: './tests/e2e',
	timeout: 30_000,
	retries: 0,
	workers: 1,
	use: {
		// NOTE: use `localhost`, not 127.0.0.1 — on this machine vite
		// preview binds to ::1, so 127.0.0.1 never answers (verified
		// 2026-11-19: curl localhost → HTTP 200, curl 127.0.0.1 → fail).
		baseURL: 'http://localhost:4173',
		trace: 'on-first-retry'
	},
	projects: [
		{ name: 'chromium', use: { ...devices['Desktop Chrome'] } },
		{ name: 'mobile-360', use: { ...devices['Pixel 7'], viewport: { width: 360, height: 800 } } }
	],
	webServer: {
		command: 'npm run build && npm run preview -- --port 4173 --strictPort',
		url: 'http://localhost:4173',
		reuseExistingServer: true,
		timeout: 120_000
	}
});
