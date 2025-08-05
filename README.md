# BookSpark - Book Ideas Generator

**Tagline:** "Ignite Your Next Story"

BookSpark is a professional book ideas generator website built with Next.js 14, TypeScript, and Tailwind CSS. It provides writers with AI-powered book concept generation for both fiction and non-fiction works.

## 🚀 Features

- **Smart Book Idea Generation**: AI-powered algorithms create unique book concepts
- **Multiple Genres**: Support for 50+ genres across fiction and non-fiction
- **Customizable Options**: Tailor ideas by genre, length, target audience, and tone
- **Comprehensive Details**: Each idea includes characters, settings, conflicts, themes, and opening lines
- **Writing Resources**: Curated tips and techniques for writers
- **Mobile-First Design**: Optimized for iOS Safari and all mobile devices
- **SEO Optimized**: Comprehensive search engine optimization
- **Share Functionality**: Easy sharing via social media and email
- **Local Storage**: Save favorite ideas for later reference

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data**: JSON files (no external APIs)
- **Deployment**: Cloudflare Pages compatible

## 📁 Project Structure

```
book-ideas-generator/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── generator/         # Book generator page
│   ├── resources/         # Writing resources page
│   └── about/             # About page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Select.tsx
│   ├── BookGenerator.tsx  # Main generator component
│   ├── IdeaDisplay.tsx   # Generated idea display
│   ├── ShareButtons.tsx  # Social sharing
│   ├── Navigation.tsx    # Site navigation
│   └── HeroSection.tsx   # Landing page hero
├── data/                 # JSON data files
│   ├── fiction-templates.json
│   ├── nonfiction-templates.json
│   └── writing-tips.json
├── lib/                  # Utility functions
│   ├── generator.ts      # Idea generation logic
│   ├── storage.ts        # Local storage management
│   └── utils.ts          # Helper utilities
├── types/                # TypeScript interfaces
│   └── index.ts
└── public/               # Static assets
    ├── favicon.ico
    └── og-image.png
```

## 🎨 Brand Guidelines

- **Colors**: 
  - Primary Purple: #6366f1
  - Accent Orange: #f59e0b
  - Grays: #6b7280, #374151
- **Typography**: System fonts for optimal performance
- **Style**: Modern, clean, writer-focused design

## 📱 iOS Safari Optimizations

- Prevents zoom on input focus (16px font size)
- Safe area handling for notched devices
- Touch targets minimum 44px for accessibility
- Optimized touch interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd book-ideas-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `out/` directory, ready for static hosting.

## 🌐 Deployment

This project is configured for static export and optimized for Cloudflare Pages:

1. **Cloudflare Pages**:
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Output directory: `out`

2. **Other Static Hosts**:
   - The `out/` directory can be deployed to any static hosting service
   - Supports Vercel, Netlify, GitHub Pages, etc.

## 🔧 Customization

### Adding New Genres

1. Update `fiction-templates.json` or `nonfiction-templates.json`
2. Add genre options in `BookGenerator.tsx`
3. Update the generator logic in `lib/generator.ts`

### Modifying Templates

Edit the JSON files in the `data/` directory:
- `fiction-templates.json`: Characters, settings, conflicts, themes
- `nonfiction-templates.json`: Topics, approaches, structures
- `writing-tips.json`: Writing advice and techniques

### Styling Changes

- Update Tailwind configuration in `tailwind.config.ts`
- Modify global styles in `app/globals.css`
- Component-specific styles are inline with Tailwind classes

## 📊 SEO Features

- Comprehensive meta tags
- OpenGraph and Twitter Card support
- Structured data markup
- Optimized for search engines
- Mobile-first responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with Next.js, TypeScript, and Tailwind CSS
- Icons by Lucide React
- Inspired by writers and storytellers everywhere

---

**BookSpark** - Ignite Your Next Story ✨