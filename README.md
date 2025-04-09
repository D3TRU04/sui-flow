# EventPulse - Real-time Event Streaming Platform

EventPulse is a modern web application that provides real-time event streaming with AI-powered insights. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Real-time event streaming with WebSocket integration
- AI-powered event summarization
- Live statistics and metrics
- Pause/Resume and Reset functionality
- Modern, responsive UI with smooth animations

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher) or yarn (v1.22.0 or higher)
- Git

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd beeps-stream
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Or using yarn
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_WS_URL=ws://beeps.gg/stream
   ```

4. **Run the development server**
   ```bash
   # Using npm
   npm run dev

   # Or using yarn
   yarn dev
   ```

5. **Open your browser**
   Visit `http://localhost:3000` to see the application running.

## Project Structure

```
beeps-stream/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── (landing)/      # Landing page routes
│   │   ├── stream/         # Stream page routes
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API and service functions
│   ├── types/             # TypeScript type definitions
│   └── styles/            # Global styles
├── public/                # Static assets
└── package.json          # Project dependencies
```

## Dependencies

Key dependencies used in this project:
- `next`: 14.0.0
- `react`: 18.2.0
- `react-dom`: 18.2.0
- `tailwindcss`: 3.3.0
- `date-fns`: 2.30.0
- `react-icons`: 4.11.0

## Common Issues and Solutions

1. **Dependency Installation Issues**
   - If you encounter `node-gyp` errors, ensure you have Python and build tools installed:
     ```bash
     # On macOS
     xcode-select --install

     # On Windows
     npm install --global windows-build-tools
     ```

2. **WebSocket Connection Issues**
   - Ensure the WebSocket URL is correctly set in `.env.local`
   - Check if the WebSocket server is running and accessible

3. **Build Errors**
   - Clear the Next.js cache:
     ```bash
     rm -rf .next
     ```
   - Reinstall dependencies:
     ```bash
     rm -rf node_modules
     npm install
     ```

4. **TypeScript Errors**
   - Ensure all TypeScript dependencies are installed:
     ```bash
     npm install --save-dev typescript @types/react @types/node
     ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
