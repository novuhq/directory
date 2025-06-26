# Shared Dependencies Package

This package centralizes all common dependencies used across the monorepo apps. This approach ensures that:

1. **Single Source of Truth**: All dependencies are managed in one place
2. **Consistent Versions**: All apps use the same versions of shared dependencies
3. **Easy Updates**: Update dependencies once and all apps automatically get the new versions
4. **Reduced Duplication**: No more duplicate dependency declarations across apps

## How It Works

Each app in the monorepo depends on this shared package using workspace dependencies:

```json
{
  "dependencies": {
    "@directory/shared-deps": "workspace:*"
  }
}
```

## Updating Dependencies

### Update All Dependencies
```bash
pnpm update-deps
```

### Update Specific Dependencies (e.g., Novu packages)
```bash
pnpm update-novu
```

### Update Specific Package
```bash
pnpm update <package-name> --filter=@directory/shared-deps
```

### Add New Dependencies
1. Add the dependency to `packages/shared-deps/package.json`
2. Run `pnpm install` from the root
3. All apps will automatically have access to the new dependency

## Adding New Apps

When adding a new app to the monorepo:

1. Create the app in `apps/`
2. Add `"@directory/shared-deps": "workspace:*"` to its dependencies
3. Run `pnpm install` from the root

## Current Dependencies

This package includes all common dependencies used across the healthcare and linear-inbox apps, including:

- **Novu packages**: `@novu/js`, `@novu/nextjs`, `@novu/react`
- **UI components**: All Radix UI components
- **React ecosystem**: React, Next.js, React Hook Form, etc.
- **Styling**: Tailwind CSS, styled-components, etc.
- **Utilities**: date-fns, clsx, zod, etc.

## Benefits

- **Version Consistency**: All apps use identical dependency versions
- **Simplified Maintenance**: Update dependencies in one place
- **Reduced Bundle Size**: Shared dependencies are deduplicated
- **Faster Development**: No need to manage dependencies per app 