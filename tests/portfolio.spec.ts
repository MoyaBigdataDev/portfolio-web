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

test.describe('Security Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('No critical console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    await page.goto('http://localhost:3000');
    await page.waitForTimeout(2000);
    const criticalErrors = errors.filter(e => !e.includes('favicon'));
    expect(criticalErrors).toHaveLength(0);
  });

  test('External links have safe rel attributes', async ({ page }) => {
    const links = page.locator('a[href^="http"]');
    const count = await links.count();
    
    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const href = await link.getAttribute('href');
      const rel = await link.getAttribute('rel');
      
      if (href && (href.includes('github.com') || href.includes('linkedin.com') || href.includes('wa.me'))) {
        expect(rel).toContain('noopener');
      }
    }
  });

  test('Form has proper input validation', async ({ page }) => {
    const form = page.locator('form');
    await expect(form).toBeVisible();
    
    const nameInput = page.locator('input[name="name"]');
    const messageInput = page.locator('textarea[name="message"]');
    
    await expect(nameInput).toHaveAttribute('required');
    await expect(messageInput).toHaveAttribute('required');
  });

  test('No dangerous HTML attributes', async ({ page }) => {
    const dangerousAttrs = ['onerror', 'onload', 'onclick', 'onmouseover'];
    let foundDangerous = false;
    
    for (const attr of dangerousAttrs) {
      const elements = page.locator(`[${attr}]`);
      if (await elements.count() > 0) {
        foundDangerous = true;
        break;
      }
    }
    
    expect(foundDangerous).toBe(false);
  });

  test('Forms do not expose sensitive data in autocomplete', async ({ page }) => {
    const sensitiveInputs = page.locator('input[autocomplete="off"]');
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const messageInput = page.locator('textarea[name="message"]');
    
    if (await emailInput.count() > 0) {
      const autocomplete = await emailInput.getAttribute('autocomplete');
      expect(autocomplete).not.toBe('email');
    }
    
    if (await messageInput.count() > 0) {
      expect(await messageInput.getAttribute('name')).toBe('message');
    }
  });

  test('No inline JavaScript in links', async ({ page }) => {
    const links = page.locator('a');
    const count = await links.count();
    
    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href');
      if (href) {
        expect(href).not.toMatch(/javascript:/i);
      }
    }
  });

  test('Images have alt text for accessibility', async ({ page }) => {
    const images = page.locator('img');
    const count = await images.count();
    
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('WhatsApp link is properly formatted', async ({ page }) => {
    const waLink = page.locator('a[href^="https://wa.me"]');
    const count = await waLink.count();
    
    if (count > 0) {
      const href = await waLink.first().getAttribute('href');
      expect(href).toMatch(/wa\.me\/\d+/);
    }
  });
});
