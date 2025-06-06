# オンラインドラフト会議

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or later
- pnpm 8.x or later

### Environment Variables

Create a `.env.local` file in the root directory with the following Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Development

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Other Commands

```bash
# Type checking
pnpm type-check

# Linting
pnpm lint

# Run tests
pnpm test

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📝 Project Structure

This project uses the Next.js App Router structure:

- `app/` - App Router pages and layouts
- `src/components/` - React components (Atomic Design + features)
- `src/hooks/` - Custom React hooks
- `src/lib/` - External library configurations
- `src/helpers/` - Utility functions
- `src/types/` - TypeScript type definitions

## 🎨 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **UI Library**: [Chakra UI v3](https://www.chakra-ui.com/)
- **State Management**: [Jotai](https://jotai.org/)
- **Authentication**: [Firebase Auth](https://firebase.google.com/docs/auth)
- **Database**: [Cloud Firestore](https://firebase.google.com/docs/firestore)
- **Styling**: CSS Modules + Chakra UI
- **Testing**: [Vitest](https://vitest.dev/) + [Storybook](https://storybook.js.org/)
- **Linting/Formatting**: [Biome](https://biomejs.dev/)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🌐 Deployment

### Production

The production site is deployed on Vercel:

- **URL**: https://now-kanpai.vercel.app/

### Preview Deployments

Each pull request automatically creates a preview deployment on Vercel.

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Chakra UI Documentation](https://www.chakra-ui.com/docs/get-started/overview) - component library documentation
- [Firebase Documentation](https://firebase.google.com/docs) - Firebase services documentation

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🚢 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
