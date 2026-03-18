# Anderson Moya Portfolio

Portfolio profesional para Big Data & Digital Transformation Consultant.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # Run linter
npm run test     # Run Playwright tests
```

## Deployment

Desplegado en Vercel: https://anderson-moya-portfolio.vercel.app

## MCP Configuration

Este proyecto usa los siguientes MCP servers configurados globalmente:

### Archivos de Configuración

- Config global: `~/.config/opencode/opencode.json`
- Variables de entorno: `~/.config/opencode/mcp.env.example`

### MCPs Disponibles

1. **filesystem** - Acceso a sistema de archivos para todo el workspace
   - Tipo: local
   - Estado: enabled

### Configurar Variables de Entorno

Crea `~/.config/opencode/mcp.env` con:

```bash
TESTSPRITE_API_KEY=tu-api-key
DATABASE_URL=postgresql://localhost:5432/mydb
```

## Testing

```bash
npx playwright test
```

## Security

- No secrets en código
- Variables de entorno para configuración sensible
- .env en .gitignore
- Auditorías de seguridad periódicas recomendadas
