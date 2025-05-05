# Healthcare Application Inbox Example



## 🛠️ Project Structure

```
├── app/                 # Next.js app directory (pages and layouts)
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── public/             # Static assets
├── styles/             # Global styles and Tailwind configuration
├── .eslintrc.json     # ESLint configuration
├── .prettierrc        # Prettier configuration
├── components.json    # Component configuration
├── next.config.mjs    # Next.js configuration
├── package.json       # Project dependencies and scripts
├── postcss.config.mjs # PostCSS configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd healthcare
```

2. Install dependencies
```bash
pnpm install
# or
npm install
```

3. Start the development server
```bash
pnpm dev
# or
npm run dev
```

The application will be available at `http://localhost:3000`

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## 🔧 Configuration

- **Tailwind CSS**: Configured in `tailwind.config.ts`
- **TypeScript**: Configured in `tsconfig.json`
- **ESLint**: Configured in `.eslintrc.json`
- **Prettier**: Configured in `.prettierrc`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
