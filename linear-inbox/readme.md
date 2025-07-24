# Linear Inbox

A modern, feature-rich, real-time, stateful inbox component inspired by Linear's Inbox. Built with Next.js, React, and Tailwind CSS.

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/linear-inbox.git
cd linear-inbox
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
apps/linear-inbox/
├── app/              # Next.js app directory
│   ├── api/         # API routes
│   └── (routes)/    # Page routes
├── components/       # Reusable UI components
│   ├── ui/          # Basic UI components
│   └── features/    # Feature-specific components
├── lib/             # Utility functions and configurations
├── public/          # Static assets
└── styles/          # Global styles and Tailwind configuration
```

## 🚀 Development

The project uses a monorepo structure managed by Turborepo. To run the development server:

```bash
# From the root directory
pnpm dev

# Or from the linear-inbox directory
cd apps/linear-inbox
pnpm dev
```

## Building for Production

```bash
# From the root directory
pnpm build

# Or from the linear-inbox directory
cd apps/linear-inbox
pnpm build
```

To start the production server:

```bash
pnpm start
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

Please ensure your PR adheres to the following guidelines:

- Include tests for new features
- Update documentation as needed
- Follow the existing code style
- Write clear commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Linear](https://linear.app)
- Thanks to all contributors who have helped shape this project
