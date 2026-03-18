# Anderson Moya Portfolio - PRD

## 1. Project Overview

**Project Name:** Anderson Moya Portfolio  
**Type:** Personal portfolio website (Next.js 16 - App Router)  
**Purpose:** Professional portfolio for a Big Data & Digital Transformation Consultant  
**Target Users:** Potential employers, clients, and professional contacts

---

## 2. What This Application Does

This is a personal portfolio website that showcases Anderson Moya's professional profile as a Big Data & Digital Transformation Consultant. The site serves as a digital business card and professional presentation.

### Core Functionality

- **Professional Presentation**: Display skills, experience, education, and certifications
- **Project Showcase**: Present completed projects with images and descriptions
- **Contact Options**: Allow visitors to reach out via WhatsApp
- **Bilingual Support**: Full Spanish/English language toggle
- **Theme Support**: Dark/Light mode toggle for user preference

---

## 3. Features

### 3.1 Sections

| Section | Description |
|---------|-------------|
| **Navbar** | Fixed navigation with links to all sections, language toggle (ES/EN), and theme toggle |
| **Hero** | Introduction with name, title, subtitle, and CTA button |
| **Services** | List of 6 professional services offered |
| **Projects** | 5 portfolio projects with images, tags, and GitHub links |
| **Experience** | 2 work experience entries |
| **Education** | 3 education entries (including in-progress specialization) |
| **Certifications** | 2 professional certifications |
| **Testimonials** | 3 client/collaborator testimonials |
| **Contact** | Contact form that opens WhatsApp with pre-filled message |
| **Footer** | Copyright notice |

### 3.2 Interactive Features

- **Theme Toggle**: Switch between dark and light mode (persists in localStorage)
- **Language Switcher**: Toggle between Spanish and English (persists in localStorage)
- **Smooth Scrolling**: Navbar links scroll smoothly to sections
- **Project Links**: Each project card links to GitHub repository

### 3.3 Technical Stack

- Next.js 16.1.7
- React 19
- TypeScript
- Tailwind CSS 4
- No external UI libraries

---

## 4. TestSprite Testing Requirements

### 4.1 Priority 1 - Core Functionality

| Test ID | Feature | Test Case | Expected Result |
|---------|---------|-----------|-----------------|
| 1 | Page Load | Homepage loads without crash | Page displays correctly |
| 2 | Page Load | No critical console errors | Console is error-free |
| 3 | Sections | All sections render | Hero, Services, Projects, Experience, Education, Certifications, Testimonials, Contact, Footer all visible |

### 4.2 Priority 2 - Theme Toggle

| Test ID | Feature | Test Case | Expected Result |
|---------|---------|-----------|-----------------|
| 4 | Theme Toggle | Click theme toggle button | Colors change between dark/light mode |
| 5 | Theme Toggle | Theme preference persists on reload | Selected theme maintained after refresh |

### 4.3 Priority 3 - Language Switcher

| Test ID | Feature | Test Case | Expected Result |
|---------|---------|-----------|-----------------|
| 6 | Language | Click language toggle | Content switches between ES/EN |
| 7 | Language | Language preference persists on reload | Selected language maintained after refresh |
| 8 | Language | All text updates when language changes | Navbar, sections, footer all update |

### 4.4 Priority 4 - Navigation

| Test ID | Feature | Test Case | Expected Result |
|---------|---------|-----------|-----------------|
| 9 | Navbar | Click nav links | Smooth scroll to corresponding section |
| 10 | Navbar | Navbar is fixed/sticky | Navbar remains visible on scroll |

### 4.5 Priority 5 - Projects Section

| Test ID | Feature | Test Case | Expected Result |
|---------|---------|-----------|-----------------|
| 11 | Projects | All 5 project cards display | Each project shows title, description, tags, image |
| 12 | Projects | Project images load | All project images render correctly |
| 13 | Projects | Project links work | GitHub links open in new tab |

### 4.6 Priority 6 - Contact Form

| Test ID | Feature | Test Case | Expected Result |
|---------|---------|-----------|-----------------|
| 14 | Contact | Form validation | Required fields validated |
| 15 | Contact | Submit with valid data | WhatsApp opens with pre-filled message |
| 16 | Contact | WhatsApp link contains name and message | Message pre-filled correctly |

### 4.7 Priority 7 - Responsive Design

| Test ID | Feature | Test Case | Expected Result |
|---------|---------|-----------|-----------------|
| 17 | Responsive | Mobile viewport (375px) | Page displays correctly |
| 18 | Responsive | Tablet viewport (768px) | Layout adapts properly |
| 19 | Responsive | Desktop viewport (1280px) | Full layout displays |

---

## 5. Test Environment

- **URL**: http://localhost:3001 (or active port)
- **Framework**: Next.js development server
- **Browser**: Chrome/Chromium (Playwright)
- **Language**: Spanish (default)

---

## 6. Acceptance Criteria

- [ ] Page loads in under 3 seconds
- [ ] All sections render without errors
- [ ] Theme toggle works and persists
- [ ] Language toggle works and persists
- [ ] All navigation links work
- [ ] All project images display
- [ ] Contact form opens WhatsApp correctly
- [ ] No console errors (Error level)
- [ ] Responsive on mobile/tablet/desktop
