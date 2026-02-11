const { test, expect } = require('@playwright/test');

test.describe('Phase 4: コンディション判定', () => {

  test('.condition-badge が表示される', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#status')).toHaveText('取得成功', { timeout: 15000 });
    await expect(page.locator('.condition-badge')).toBeVisible();
  });

  test('.condition-badge が good / ok / caution のいずれかのクラスを持つ', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#status')).toHaveText('取得成功', { timeout: 15000 });
    const badge = page.locator('.condition-badge');
    const classes = await badge.getAttribute('class');
    const hasValidClass = ['good', 'ok', 'caution'].some(c => classes.includes(c));
    expect(hasValidClass).toBe(true);
  });

  test('.activity-badge が3つ表示される', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#status')).toHaveText('取得成功', { timeout: 15000 });
    await expect(page.locator('.activity-badge')).toHaveCount(3);
  });

  test('各 .activity-badge が active / marginal / inactive のいずれかのクラスを持つ', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#status')).toHaveText('取得成功', { timeout: 15000 });
    const badges = page.locator('.activity-badge');
    const count = await badges.count();
    expect(count).toBe(3);
    for (let i = 0; i < count; i++) {
      const classes = await badges.nth(i).getAttribute('class');
      const hasValidClass = ['active', 'marginal', 'inactive'].some(c => classes.includes(c));
      expect(hasValidClass).toBe(true);
    }
  });

});
