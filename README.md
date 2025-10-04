# Qido - QR Code Generator

<div align="center">
  <img src="public/android-chrome-192x192.png" alt="Qido Logo" width="120" height="120">
  
  <h3>Craft stunning QR codes with precision and style</h3>
  
  [![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

## 🚀 Overview

**Qido** is a modern, feature-rich QR code generator built with React and TypeScript. It offers a beautiful, intuitive interface for creating customizable QR codes with advanced styling options, custom images, captions, and multiple export formats.

### ✨ Key Features

- **🎨 Advanced Customization**: Custom colors, sizes, margins, and styling options
- **🖼️ Center Images**: Add logos or images to the center of your QR codes
- **📝 Custom Captions**: Add text captions with multiple font families and sizes
- **📱 Multiple Formats**: Export as PNG or SVG
- **🎭 Beautiful UI**: Modern dark theme with animated backgrounds and smooth transitions
- **📋 Easy Sharing**: One-click copy and download functionality
- **⚡ Fast Generation**: Powered by QuickChart.io API for reliable QR code generation
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices

## 📸 Screenshots

<div align="center">

### 🏠 Main Interface

![Qido Main Interface](/public/screenshot/main-interface.png)
_Clean, modern interface with animated background and intuitive form controls_

### 📱 Generated QR Code

![Generated QR Code](/public/screenshot/generated-qr.png)
_High-quality QR code generation with download and copy functionality_

### 🌙 Loading States

![Loading Animation](/public/screenshot/loading-states.png)
_Smooth loading animations and user feedback during QR code generation_

</div>

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.7 with React Compiler support
- **Styling**: Tailwind CSS 4.1.14 with custom animations
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **HTTP Client**: Axios for API communication
- **QR Generation**: QuickChart.io API
- **Code Quality**: ESLint, Prettier, and TypeScript strict mode

## 🎯 Features in Detail

### QR Code Customization

- **Text Input**: Support for any text, URLs, or data
- **Color Customization**: Custom foreground and background colors
- **Size Control**: Adjustable QR code dimensions (50-500px)
- **Margin Settings**: Configurable white space around the code
- **Error Correction**: Built-in error correction level Q

### Advanced Options

- **Center Images**: Add custom logos or images with size control
- **Typography**: 200+ font families with multiple styles
- **Caption Support**: Add descriptive text below QR codes
- **Format Options**: PNG and SVG export formats

### User Experience

- **Real-time Preview**: Instant QR code generation and preview
- **Loading States**: Smooth loading animations and feedback
- **Error Handling**: Comprehensive error messages and validation
- **Toast Notifications**: User-friendly success and error notifications
- **Responsive Layout**: Optimized for all screen sizes

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kaushik-2318/qido.git
   cd qido
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.local.example .env.local
   ```

   Update `.env.local` with your configuration:

   ```env
   VITE_BASE_URL=https://quickchart.io
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

## 📁 Project Structure

```
qido/
├── public/                 # Static assets and favicons
├── src/
│   ├── components/         # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── AnimatedBackground.tsx
│   │   ├── Footer.tsx
│   │   ├── FormInput.tsx
│   │   ├── Logo.tsx
│   │   ├── PageLoader.tsx
│   │   ├── QrCodeDisplay.tsx
│   │   └── QrCodeGenerator.tsx
│   ├── lib/               # Utilities and configurations
│   │   ├── api.ts         # API integration
│   │   ├── constant.ts    # Application constants
│   │   ├── types.ts       # TypeScript type definitions
│   │   └── utils.ts       # Utility functions
│   ├── App.tsx            # Main application component
│   ├── App.css            # Custom animations and styles
│   ├── index.css          # Global styles and Tailwind imports
│   └── main.tsx           # Application entry point
├── .env.local             # Environment variables
├── components.json        # Shadcn/ui configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🔧 Available Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build the application for production     |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint to check code quality         |
| `npm run format`  | Format code using Prettier               |

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# QuickChart.io API base URL
VITE_BASE_URL=https://quickchart.io
```

## 🎨 Customization

### Styling

The application uses Tailwind CSS with custom animations defined in `src/App.css`. Key design elements include:

- **Color Palette**: Cyan, blue, and teal gradients with dark theme
- **Animations**: Fade-in, slide-in, float, and loading animations
- **Typography**: System fonts with custom gradient text effects
- **Components**: Glassmorphism effects with backdrop blur

### Adding New Features

1. **New Components**: Add to `src/components/` directory
2. **API Integration**: Extend `src/lib/api.ts` for new endpoints
3. **Types**: Define new interfaces in `src/lib/types.ts`
4. **Constants**: Add configuration in `src/lib/constant.ts`

## 📱 API Integration

Qido integrates with QuickChart.io API for QR code generation. The API supports:

### Supported Parameters

- `text`: Content to encode
- `dark`: Foreground color (hex)
- `light`: Background color (hex)
- `size`: QR code dimensions
- `margin`: Border margin
- `format`: Output format (png/svg)
- `ecLevel`: Error correction level
- `centerImageUrl`: Logo/image URL
- `centerImageWidth/Height`: Image dimensions
- `caption`: Text caption
- `captionFontFamily`: Font family
- `captionFontSize`: Font size

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

## 🔒 Security Considerations

- **Input Validation**: All user inputs are validated and sanitized
- **HTTPS Only**: Secure communication with external APIs
- **No Sensitive Data**: QR codes are generated client-side when possible
- **Content Security Policy**: Implemented for XSS protection
- **Environment Variables**: Sensitive configuration kept secure

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and add tests
4. **Run the linter**: `npm run lint`
5. **Format your code**: `npm run format`
6. **Commit your changes**: `git commit -m 'Add amazing feature'`
7. **Push to the branch**: `git push origin feature/amazing-feature`
8. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure responsive design compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kaushik Verma**

- Website: [kaushikverma.me](https://www.kaushikverma.me/)
- GitHub: [@kaushikverma](https://github.com/kaushikverma)

## 🙏 Acknowledgments

- [QuickChart.io](https://quickchart.io/) for the QR code generation API
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icon set
- [Vite](https://vitejs.dev/) for the lightning-fast build tool

---

<div align="center">
  <p>Made with ❤️ by <a href="https://www.kaushikverma.me/">Kaushik Verma</a></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
