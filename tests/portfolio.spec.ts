import { test, expect } from '@playwright/test';

test.describe('Anderson Moya Portfolio', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Page loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Anderson Moya/);
  });

  test('All sections render', async ({ page }) => {
    await expect(page.locator('text=Sobre mí').first()).toBeVisible();
    await expect(page.locator('h2:has-text("Servicios")')).toBeVisible();
    await expect(page.locator('h2:has-text("Proyectos")')).toBeVisible();
    await expect(page.locator('h2:has-text("Experiencia")')).toBeVisible();
    await expect(page.locator('h2:has-text("Formación")')).toBeVisible();
    await expect(page.locator('h2:has-text("Certificaciones")')).toBeVisible();
    await expect(page.locator('h2:has-text("Testimonios")')).toBeVisible();
    await expect(page.locator('h2:has-text("Contacto")')).toBeVisible();
  });

  test('Theme toggle works', async ({ page }) => {
    const toggleButton = page.locator('button[aria-label*="theme"], button:has(svg)').first();
    if (await toggleButton.isVisible()) {
      await toggleButton.click();
      await page.waitForTimeout(500);
    }
  });

  test('Language switcher works', async ({ page }) => {
    const langButton = page.locator('button:has-text("EN"), button:has-text("ES")').first();
    if (await langButton.isVisible()) {
      await langButton.click();
      await page.waitForTimeout(500);
      await expect(page.locator('text=About')).toBeVisible();
    }
  });

  test('Project images display', async ({ page }) => {
    const projectImages = page.locator('#projects img');
    const count = await projectImages.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Contact form exists', async ({ page }) => {
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });
});
