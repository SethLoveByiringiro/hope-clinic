# Hope Integrated Clinic Website

A modern, responsive website for Hope Integrated Clinic - a mental wellness and substance abuse service provider. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🏥 About Hope Integrated Clinic

Hope Integrated Clinic is dedicated to fostering and promoting mental wellbeing through proven, culturally relevant, and client-centered approaches. We offer a full spectrum of outpatient mental health and substance abuse services.

## ✨ Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with teal and green color scheme
- **Fast Performance**: Built with Next.js 15 for optimal speed and SEO
- **Accessibility**: WCAG compliant design patterns
- **Contact Forms**: Functional contact and appointment booking forms
- **Service Information**: Comprehensive service listings and descriptions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd hope-clinic
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
hope-clinic/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About Us page
│   │   ├── appointment/       # Appointment booking page
│   │   ├── blog/              # Blog page
│   │   ├── contact/           # Contact Us page
│   │   ├── services/          # Services page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   └── components/            # Reusable components
│       ├── layout/            # Layout components
│       │   ├── Header.tsx     # Navigation header
│       │   ├── Footer.tsx     # Site footer
│       │   └── Layout.tsx     # Main layout wrapper
│       └── ui/                # UI components
│           ├── Hero.tsx       # Hero section
│           ├── About.tsx      # About section
│           ├── Services.tsx   # Services section
│           └── CallToAction.tsx # CTA section
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Colors

- **Primary Teal**: #20B2AA
- **Teal Dark**: #1A9B94
- **Primary Green**: #22C55E
- **Green Dark**: #16A34A
- **Gray Light**: #F8F9FA
- **Gray Medium**: #6B7280
- **Gray Dark**: #374151

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, various sizes
- **Body Text**: Regular weight, optimized for readability

## 📱 Pages

### Homepage (`/`)

- Hero section with call-to-action
- About section with key features
- Services overview
- Call-to-action section

### About Us (`/about`)

- Detailed clinic information
- Mission and vision statements
- Core values and principles

### Services (`/services`)

- Comprehensive service listings
- Detailed descriptions
- Service categories

### Contact Us (`/contact`)

- Contact form with validation
- Contact information cards
- Location and hours

### Book Appointment (`/appointment`)

- Appointment booking form
- Service selection
- Preferred date/time selection

### Blog (`/blog`)

- Coming soon page
- Placeholder for future content

## 🛠️ Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **Google Fonts**: Inter font family

## 📋 Services Offered

1. **Diagnostic Assessments**
2. **Treatment Plan & Medication Management**
3. **Clinical & Forensic Consultations**
4. **Individual Therapy**
5. **Intensive Outpatient Group Therapy**
6. **Psycho-Education**
7. **Misdemeanor Domestic Violence Offender Treatment**
8. **DUI (Screening, Education, & Treatment)**

## 📞 Contact Information

- **Phone**: (520) 771-6551
- **Email**: hopeintegrated23@gmail.com
- **Address**: 3425 East Grant Rd, Tucson, AZ 85716

### Office Hours

- **Monday - Friday**: 9:00 AM - 5:00 PM
- **Saturday**: Closed
- **Sunday**: Closed

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 🔧 Customization

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `Header.tsx`

### Modifying Styles

- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind classes
- Color scheme: Update `tailwind.config.ts`

### Adding Images

1. Place images in `public/` directory
2. Use Next.js `Image` component for optimization
3. Update placeholder text in components

## 📝 Future Enhancements

- [ ] Add actual images to replace placeholders
- [ ] Implement blog functionality
- [ ] Add appointment scheduling integration
- [ ] Implement contact form backend
- [ ] Add SEO optimization
- [ ] Implement analytics tracking
- [ ] Add multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Hope Integrated Clinic.

## 🆘 Support

For technical support or questions about the website, please contact the development team.

---

**Hope Integrated Clinic** - _One step at a time_
