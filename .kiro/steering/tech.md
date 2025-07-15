# Technology Stack

## Frontend Framework
- **Next.js 15** with App Router
- **React 19** with TypeScript 5
- **Chakra UI v3** for component library
- **Framer Motion** for animations
- **Next Themes** for dark mode support

## State Management
- **Jotai** for atomic state management
- **React Hook Form** with Zod validation for forms

## Backend & Database
- **Firebase Authentication** (anonymous auth)
- **Firebase Firestore** for real-time database
- **Firebase** for real-time synchronization

## Development Tools
- **Biome** for linting and formatting (replaces ESLint/Prettier)
- **TypeScript** with strict mode enabled
- **pnpm** as package manager

## Testing
- **Vitest** for unit testing with jsdom environment
- **Storybook** for component development and testing
- **Playwright** for E2E testing
- **Testing Library** for React component testing

## Build & Deployment
- **Cloudflare Pages** deployment ready
- **GitHub Actions** for CI/CD

## Common Commands

### Development
```bash
pnpm dev              # Start development server
pnpm build            # Production build
pnpm start            # Start production server
```

### Code Quality
```bash
pnpm lint             # Run Biome linter
pnpm lint:fix         # Auto-fix linting issues
pnpm type-check       # TypeScript type checking
```

### Testing
```bash
pnpm test             # Run unit tests
pnpm test:watch       # Run tests in watch mode
pnpm test:ui          # Run tests with UI
pnpm storybook        # Start Storybook dev server
pnpm e2e              # Run E2E tests
pnpm e2e:ui           # Run E2E tests with UI
```

### Utilities
```bash
pnpm notify:desktop   # Send desktop notification
```

## Environment Variables
Required Firebase configuration:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_GTM_ID` (Google Tag Manager)