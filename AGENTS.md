# AGENTS.md - Anderson Moya Portfolio

This document provides guidelines for agentic coding agents working in this repository.

## Project Overview

- **Project Name**: Anderson Moya Portfolio
- **Type**: Next.js 16 Website (App Router)
- **Purpose**: Personal portfolio for a Big Data & Digital Transformation Consultant
- **Languages**: TypeScript, Spanish, English (bilingual)

---

## Build / Lint / Test Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
```

### Building
```bash
npm run build        # Production build
npm run start        # Start production server
```

### Linting
```bash
npm run lint         # Run ESLint on the project
```

### Testing
This project does not currently have tests configured. To add tests:
```bash
npm install -D @testing-library/react @testing-library/jest-dom jest @types/jest
npm install -D ts-node
```

---

## Code Style Guidelines

### General Principles

1. **Functional Components**: Use functional components with hooks exclusively
2. **Client Components**: Mark components as `"use client"` only when they use hooks or browser APIs
3. **Server-First**: Prefer server components where possible for better performance

### Imports

```typescript
// Group imports in this order:
// 1. React/Next imports
// 2. External libraries
// 3. Internal components/hooks
// 4. Types/interfaces
// 5. Styles (if needed)

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Language, getContent } from '@/lib/content';
import Navbar from '@/components/Navbar';
```

### File Naming

- **Components**: PascalCase (e.g., `Navbar.tsx`, `Hero.tsx`)
- **Hooks**: camelCase with "use" prefix (e.g., `useLanguage.ts`)
- **Utilities**: camelCase (e.g., `content.ts`)
- **Types**: PascalCase (e.g., `LanguageContextType`)

### TypeScript Conventions

```typescript
// Interface for object types
interface Project {
  title: string;
  description: string;
  tags: string[];
}

// Type for union types
type Language = 'es' | 'en';

// Props interface
interface NavbarProps {
  scrolled?: boolean;
}

// Use explicit return types for functions
function getGreeting(lang: Language): string {
  return lang === 'es' ? 'Hola' : 'Hello';
}
```

### Component Structure

```typescript
"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface ComponentProps {
  title: string;
  onSubmit?: () => void;
}

export default function Component({ title, onSubmit }: ComponentProps) {
  // 1. Hooks first
  const { language, content } = useLanguage();
  const [state, setState] = useState<string>('');

  // 2. Effects
  useEffect(() => {
    // side effects
  }, []);

  // 3. Handlers
  const handleClick = () => {
    // event handlers
  };

  // 4. Render
  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
}
```

### Styling (Tailwind CSS)

```typescript
// Use inline styles for dynamic colors from constants
<div style={{ backgroundColor: '#0052CC' }}>

// Use Tailwind classes for static styling
<button className="px-4 py-2 rounded-lg hover:bg-gray-800">

// Custom colors are defined in components:
// - #0052CC (Azul - primary)
// - #172B4D (Oscuro - dark text)
// - #FFFFFF (Fondo - white)
// - #5E6C84 (Gris - secondary text)
// - #F4F5F7 (Gris claro - backgrounds)
// - #DFE1E6 (Bordes)
```

### Error Handling

```typescript
// Always handle async operations
async function fetchData() {
  try {
    const response = await api.getData();
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Use early returns for validation
if (!data) {
  return <ErrorComponent />;
}
```

### Next.js Specific

- Use `next/link` for internal navigation
- Use absolute imports with `@/` alias
- Place reusable hooks in `src/lib/`
- Place components in `src/components/`
- Content/translations in `src/lib/content.ts`

### Internationalization

- All user-facing text goes through `src/lib/content.ts`
- Use `useLanguage` hook to access translated content
- Always provide both ES and EN translations

---

## Adding New Features

1. Create component in `src/components/`
2. Add translations in `src/lib/content.ts` (both ES and EN)
3. Import and use in `src/app/page.tsx`
4. Run `npm run lint` before committing
5. Run `npm run build` to verify production build

---

## Git Conventions

- Commit messages should be clear and descriptive
- Run lint before committing: `npm run lint`
- Ensure build passes: `npm run build`

---

## Dependencies

- **Framework**: Next.js 16.1.7
- **UI**: Tailwind CSS 4
- **Language**: TypeScript 5
- **No additional libraries** - keep it minimal

