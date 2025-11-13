# Think LUXE - Luxury Custom Cabinetry Website

A modern, high-performance website built with Next.js 14 for Think LUXE, a premier luxury custom cabinetry company specializing in custom kitchens, cabinetry, millwork, and aluminum doors & windows.

## Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion
- **Luxury Design**: Custom color palette and typography designed for premium brand positioning
- **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **Performance Optimized**: Fast loading times with Next.js Image optimization and lazy loading
- **SEO Ready**: Comprehensive meta tags and semantic HTML structure
- **Contact Forms**: React Hook Form with validation
- **Smooth Animations**: Framer Motion for elegant page transitions
- **Portfolio Gallery**: Filterable project showcase
- **WhatsApp Integration**: Direct chat functionality

## Pages

- **Homepage**: Hero section, services overview, features, testimonials, and CTAs
- **Custom Kitchens**: Detailed service page with design styles and materials
- **Custom Cabinetry**: Wardrobes, vanities, and built-in solutions
- **Custom Millwork**: Architectural millwork services
- **Aluminum Doors & Windows**: Modern aluminum systems
- **Portfolio**: Filterable gallery of completed projects
- **About**: Company mission, values, and showroom information
- **Contact**: Consultation form and contact information

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd thinkluxe
```

2. Install dependencies
```bash
npm install
```

3. Create environment file (optional)
```bash
cp .env.example .env.local
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
thinkluxe/
├── app/                          # Next.js 14 app directory
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── portfolio/                # Portfolio/gallery page
│   ├── services/                 # Service pages
│   │   ├── custom-kitchens/
│   │   ├── custom-cabinetry/
│   │   ├── custom-millwork/
│   │   └── aluminum-doors-windows/
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # Reusable components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── Section.tsx
├── public/                       # Static assets
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## Customization

### Colors

The luxury color palette is defined in `tailwind.config.ts`:
- **Charcoal**: Primary dark colors (#1a1a1a to #f5f5f5)
- **Gold**: Accent colors (#d4a750)
- **Wood**: Complementary earth tones

### Content

To update content:
1. Replace placeholder images with actual photos (recommended services: Unsplash, professional photography)
2. Update contact information in `components/Footer.tsx` and `app/contact/page.tsx`
3. Modify service descriptions in respective page files
4. Update company mission in `app/about/page.tsx`

### Environment Variables

Optional environment variables (create `.env.local`):
```
NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number
NEXT_PUBLIC_SITE_URL=your_site_url
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Visit [vercel.com](https://vercel.com) and import your repository

3. Vercel will automatically detect Next.js and configure build settings

4. Click "Deploy"

### Manual Build

```bash
npm run build
npm run start
```

## Performance

- **Next.js Image Optimization**: Automatic image optimization and lazy loading
- **Code Splitting**: Automatic code splitting for optimal load times
- **Server-Side Rendering**: Fast initial page loads
- **Target Performance**: Sub-2 second load times, 90+ PageSpeed scores

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Email integration for contact form (Resend, SendGrid, etc.)
- [ ] Google Analytics integration
- [ ] Blog/News section
- [ ] Before/After image sliders
- [ ] Virtual showroom tour
- [ ] Customer testimonial video integration
- [ ] Multi-language support

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Images**: Unsplash (placeholder)

## Support

For questions or support, contact:
- Email: syedvali98@gmail.com / khanithmohammed97@gmail.com
- Phone: +917780159626 / +919700134273

## License

Private - All rights reserved by Think LUXE

---

Built with ❤️ by Syed Vali Mohiuddin & Mohammed Khanith
