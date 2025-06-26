# Demo Project - Multiple Next.js Applications

This is a comprehensive demo project showcasing multiple Next.js applications built with modern web technologies. The project demonstrates various real-world use cases and UI patterns.

## 🚀 Live Demo

The demo is deployed on Netlify and includes multiple applications:

- **Healthcare Dashboard** - A comprehensive healthcare management system
- **Linear Inbox** - Project management inbox interface
- **Documentation** - Technical documentation and guides

## 🏗️ Project Structure

```
directory/
├── apps/
│   ├── healthcare/          # Healthcare management system
│   ├── linear-inbox/        # Project management inbox
│   ├── docs/               # Documentation site
│   └── web/                # Web application
├── packages/
│   ├── ui/                 # Shared UI components
│   ├── eslint-config/      # ESLint configuration
│   └── typescript-config/  # TypeScript configuration
└── components/             # Shared components
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom components
- **Package Manager**: pnpm
- **Build Tool**: Turbo (Monorepo)
- **Deployment**: Netlify

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- pnpm 9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd directory

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Development

```bash
# Start all apps in development mode
pnpm dev

# Start specific app
pnpm dev --filter=healthcare-app
pnpm dev --filter=linear-inbox-app
pnpm dev --filter=docs-app

# Build all apps
pnpm build

# Lint all apps
pnpm lint
```

## 📱 Applications

### Healthcare Dashboard (`/healthcare`)

A comprehensive healthcare management system featuring:

- Patient dashboard with health metrics
- Appointment scheduling and management
- Medical records and history
- Medication tracking
- Notifications system
- Preventive care reminders

**Key Features:**
- Real-time health metrics visualization
- Interactive appointment calendar
- Responsive design for mobile and desktop
- Dark/light theme support

### Linear Inbox (`/linear-inbox`)

A project management inbox interface with:

- Issue tracking and management
- Team collaboration features
- Notification preferences
- Real-time updates
- Customizable workflows

**Key Features:**
- Drag-and-drop issue management
- Advanced filtering and search
- Integration with external tools
- Mobile-responsive design

### Documentation (`/docs`)

Technical documentation and guides including:

- API documentation
- Component library
- Getting started guides
- Best practices

## 🚀 Deployment

### Netlify Deployment

This project is configured for automatic deployment on Netlify:

1. **Connect Repository**: Link your GitHub repository to Netlify
2. **Build Settings**:
   - Build command: `./build-static.sh`
   - Publish directory: `dist`
   - Node version: 18

3. **Environment Variables**: No additional environment variables required

### Manual Deployment

```bash
# Build the project
./build-static.sh

# The built files will be in the `dist` directory
# Deploy the `dist` directory to your hosting provider
```

### Build Process

The build script (`build-static.sh`) performs the following steps:

1. Installs all dependencies using pnpm
2. Builds each Next.js application with static export
3. Copies built files to a unified `dist` directory
4. Creates a landing page for the demo
5. Sets up proper routing for all applications

## 🎨 Design System

The project uses a comprehensive design system built with:

- **Radix UI**: Accessible, unstyled UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Reusable components in `packages/ui`
- **Theme Support**: Dark/light mode with next-themes

## 📦 Package Management

This project uses pnpm workspaces for efficient package management:

- **Root dependencies**: Shared across all apps
- **App-specific dependencies**: Scoped to individual applications
- **Shared packages**: Reusable components and configurations

## 🔧 Development Tools

- **ESLint**: Code linting with custom configurations
- **TypeScript**: Type safety across the entire project
- **Prettier**: Code formatting
- **Turbo**: Fast, incremental builds

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Thank you for your interest in contributing! Here's how you can get started:

### Guidelines

- **Monorepo Structure:**  
  This project uses a monorepo managed by pnpm workspaces. All apps and packages are located in the `apps/` and `packages/` directories, respectively.

- **Shared Dependencies:**  
  Common dependencies are managed centrally in `packages/shared-deps`.
  - When adding a dependency used by multiple apps, add it to `packages/shared-deps/package.json`.
  - For app-specific dependencies, add them to the respective app's `package.json`.

- **Creating a New App:**  
  1. Create a new folder under `apps/`.
  2. Use the template `package.json` (see below) and always include `@directory/shared-deps` as a dependency.
  3. Run `pnpm install` at the root to link dependencies.

- **Scripts:**  
  - `pnpm dev` — Start all apps in development mode.
  - `pnpm build:all` — Build all apps.
  - `pnpm lint` — Lint all apps.
  - `pnpm update-novu` — Update Novu dependencies in the shared package.

- **Pull Requests:**  
  1. Fork the repository.
  2. Create a feature branch.
  3. Make your changes and add tests if applicable.
  4. Run `pnpm lint` and `pnpm build:all` to ensure code quality.
  5. Submit a pull request.

### New App Template

```json
{
  "name": "your-new-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@directory/shared-deps": "workspace:*",
    "next": "15.2.4",
    "react": "^19",
    "react-dom": "^19"
  }
}
```

---

**Questions?**  
Open an issue or start a discussion in the repository.

## 📞 Support

For questions or support, please open an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
