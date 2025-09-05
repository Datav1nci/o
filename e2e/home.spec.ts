import { test, expect } from '@playwright/test';


test('home has hero heading', async ({ page }) => {
await page.goto('/');
await expect(page.getByRole('heading', { name: 'Une eau propre, simple, et fiable' })).toBeVisible();
});