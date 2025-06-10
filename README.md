# CarePlus Hospital Website

A comprehensive, professional hospital website specializing in Pediatric Services and Gynecology. Built with modern web technologies to provide patients with easy access to healthcare information, appointment booking, and location services.

## 🏥 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Appointment Booking**: Online appointment scheduling with doctor selection
- **Doctor Profiles**: Meet our medical professionals and their specialties
- **Healthcare Services**: Detailed information about pediatric and gynecology services
- **Health Blog**: Educational articles and health tips
- **Location Services**: Interactive Google Maps with directions
- **Patient Information**: Comprehensive patient resources and guidelines
- **Contact System**: Multiple ways to reach our healthcare facility

## 🚀 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Wouter** for client-side routing
- **TanStack Query** for data fetching
- **React Hook Form** with Zod validation
- **Lucide React** for icons

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **In-memory storage** for development
- **Zod** for API validation
- **Drizzle ORM** for database schema

## 📦 Installation

### Prerequisites
- Node.js 16+ installed on your system
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd careplus-hospital
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000` to view the application

## 🛠️ Available Scripts

- `npm run dev` - Start development server (frontend + backend)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
careplus-hospital/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── lib/            # Utilities and configurations
│   │   ├── hooks/          # Custom React hooks
│   │   └── index.css       # Global styles
│   └── index.html          # HTML template
├── server/                 # Backend Express server
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Data storage layer
│   └── vite.ts             # Vite configuration
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schema and types
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

The website uses a custom healthcare-focused design system with:

- **Primary Colors**: Professional blue and medical green
- **Typography**: Clean, readable fonts optimized for healthcare content
- **Components**: Accessible, touch-friendly UI elements
- **Mobile-First**: Responsive design with mobile optimization

## 📱 Mobile Optimization

The website is fully responsive with:
- Touch-friendly buttons (minimum 44px touch targets)
- Optimized text sizes for mobile reading
- Responsive navigation with mobile-friendly interactions
- Adaptive layouts for all screen sizes
- Fast loading times on mobile networks

## 🗺️ Google Maps Integration

The Contact page includes:
- Interactive Google Maps embed showing hospital location
- "Get Directions" button linking to Google Maps navigation
- Location details including parking and public transit information
- Mobile-optimized map display

## 📋 Key Pages

1. **Home** - Hero section with quick actions and hospital overview
2. **About** - Hospital information, mission, and values
3. **Services** - Detailed medical services in pediatrics and gynecology
4. **Doctors** - Professional profiles of medical staff
5. **Appointments** - Online booking system with form validation
6. **Patient Info** - Resources and guidelines for patients
7. **Blog** - Health articles and medical education content
8. **Contact** - Location, contact information, and inquiry form

## 🔧 Development Features

- **Hot Module Replacement** for instant development feedback
- **TypeScript** for type safety and better developer experience
- **ESLint** for code quality and consistency
- **Automatic server restart** during development
- **API validation** with Zod schemas
- **Error handling** with user-friendly messages

## 🌐 Deployment

The application is configured for easy deployment on platforms like:
- Replit Deployments
- Vercel
- Netlify
- Railway

For production deployment:
1. Run `npm run build` to create production bundle
2. Deploy the `dist` folder to your hosting platform
3. Ensure Node.js environment is available for the backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For technical support or questions:
- Email: support@careplus-hospital.com
- Phone: +1 (555) 123-CARE
- Emergency: +1 (555) 911-CARE (24/7)

---

Built with ❤️ for better healthcare accessibility