# Project Structure

## Architecture Pattern
This project follows a **Feature-Based Architecture** with clear separation of concerns and atomic design principles.

## Directory Structure

### Core Application
```
app/                    # Next.js App Router pages
├── draft/[id]/        # Draft game page
├── lobby/[id]/        # Lobby waiting room
├── entry/[id]/        # Entry point page
└── page.tsx           # Top/landing page
```

### Source Code Organization
```
src/
├── components/        # UI Components (Atomic Design)
│   ├── atoms/        # Basic UI elements (Button, Input, Card, etc.)
│   ├── features/     # Feature-specific components
│   │   ├── draft/    # Draft game components
│   │   ├── lobby/    # Lobby components
│   │   └── top/      # Top page components
│   ├── layout/       # Layout components
│   ├── templates/    # Page templates
│   └── ui/           # Chakra UI customizations
├── hooks/            # Custom React hooks
│   ├── auth/         # Authentication hooks
│   └── firebase/     # Firebase-specific hooks
├── lib/              # Library configurations
├── types/            # TypeScript type definitions
└── helpers/          # Utility functions
    ├── utils/        # General utilities
    └── validation/   # Form validation schemas
```

### Testing & Documentation
```
e2e/                  # End-to-end tests
├── operations/       # Test operations
├── tests/           # Test files
└── utils/           # Test utilities

docs/                # Project documentation
├── function/        # Feature documentation
├── implementation/  # Implementation guides
└── guides/         # Development guides

__screenshots__/     # Visual regression test screenshots
```

## Component Architecture

### Feature Components Structure
Each feature follows this pattern:
```
src/components/features/[feature]/
├── [FeaturePage]/           # Main page component
├── [SubComponent]/          # Feature sub-components
├── modals/                  # Feature-specific modals
├── hooks/                   # Feature-specific hooks
├── states.ts               # Jotai atoms for state
├── mockData.ts             # Mock data for development
└── shared/                 # Shared types and utilities
```

### Component File Structure
Each component directory contains:
- `index.tsx` - Main component implementation
- `index.stories.tsx` - Storybook stories
- `index.test.tsx` - Unit tests (when applicable)

## State Management Pattern

### Jotai Atoms
- Feature-specific atoms in `states.ts` files
- Global atoms for cross-feature state
- Derived atoms for computed values

### Firebase Integration
- Custom hooks in `src/hooks/firebase/`
- Real-time listeners for live data
- Separate hooks for CRUD operations

## Import Path Conventions

### Path Aliases
- `@/app/*` - App Router pages
- `@/src/*` - Source code
- `@/e2e/*` - E2E tests

### Import Order
1. External libraries
2. Internal components (atoms → features → layout)
3. Hooks and utilities
4. Types and constants

## File Naming Conventions

### Components
- PascalCase for component names
- `index.tsx` for main component file
- `index.stories.tsx` for Storybook
- `index.test.tsx` for tests

### Hooks
- camelCase starting with `use`
- Grouped by functionality in subdirectories

### Utilities
- camelCase for functions
- Grouped by domain in subdirectories

## Testing Strategy

### Unit Tests
- Component testing with Testing Library
- Hook testing with custom test utilities
- Utility function testing

### Integration Tests
- Storybook for component development
- Visual regression with screenshots

### E2E Tests
- Playwright for full user journeys
- Page object pattern in `e2e/operations/`