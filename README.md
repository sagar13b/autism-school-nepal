# Nepal Center for Autism Excellence

**Empowering Every Child's Unique Potential**

A professional, accessible, and data-driven website for the Nepal Center for Autism Excellence — a leading institution providing evidence-based education and support for children on the autism spectrum in Nepal.

## About the Project

This website showcases the programs, mission, and impact of the Nepal Center for Autism Excellence (NCAE), founded in 2010 to provide structured, supportive, and neuro-inclusive education for children on the autism spectrum in Nepal.

### Key Features

- **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Accessibility First** - WCAG-compliant with semantic HTML, ARIA labels, skip links, and keyboard navigation
- **Dark Mode Support** - User-preferred theme toggle with localStorage persistence
- **Dynamic Content** - Data-driven architecture using JSON for easy content updates
- **WhatsApp Integration** - Direct contact functionality via WhatsApp for inquiries
- **Interactive Programs Showcase** - Four core programs with detailed descriptions
- **Founder Profile** - Highlighting the founder's credentials and mission
- **Testimonials Section** - Display family testimonials and success stories
- **Photo Gallery** - Showcase facilities, classrooms, and activities
- **Google Maps Integration** - Interactive location map
- **SEO Optimized** - Comprehensive meta tags including Open Graph and Twitter Cards
- **Custom 404 Page** - User-friendly error page
- **Performance Optimized** - Fast loading, minimal dependencies, Tailwind CSS via CDN

## Project Structure

```
autism-school-nepal/
├── index.html          # Main website HTML
├── 404.html            # Custom error page
├── script.js           # JavaScript functionality and data loading
├── data.json           # Website content and school information
├── .gitignore          # Git ignore file (protects sensitive data)
├── assets/             # Images and media files
│   ├── README.md       # Assets folder documentation
│   ├── favicon.ico     # Website favicon
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── og-image.jpg    # Open Graph image for social sharing
│   ├── founder.jpg     # Founder photo
│   └── gallery/        # Gallery images folder
│       ├── classroom-1.jpg
│       ├── therapy-session.jpg
│       ├── outdoor-play.jpg
│       ├── art-class.jpg
│       ├── library.jpg
│       └── family-workshop.jpg
└── README.md           # This file
```

## Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Running the Website

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd autism-school-nepal
   ```

2. **Update the data.json file**

   The website loads content from a `data.json` file. This file is already created but contains placeholder data. Update it with your actual information:

   ```json
   {
     "school_info": {
       "name": "Nepal Center for Autism Excellence",
       "tagline": "Where Every Mind Belongs",
       "location": "Butwal, Lumbini, Nepal",
       "whatsapp_number": "97798XXXXXXXX",
       "facebook_page": "https://facebook.com/yourpage",
       "email": "info@autismschool.edu.np",
       "address": "Address galli, Butwal, Lumbini, Nepal",
       "map_embed_url": "YOUR_GOOGLE_MAPS_EMBED_URL"
     },
     "founder": {
       "name": "Dr. Arati Sharma",
       "title": "Founder & Executive Director",
       "bio": "Your founder bio here...",
       "image_url": "assets/founder.jpg",
       "credentials": [
         "Ph.D. Special Education, TU",
         "Certified BCBA Supervisor",
         "UNESCO Inclusive Education Fellow"
       ]
     },
     "content": {
       "hero_title": "Empowering Every Child's Unique Potential",
       "hero_subtitle": "A structured, joyful, and evidence-based learning environment...",
       "mission": "To provide a structured, supportive environment...",
       "about_heading": "Our Story",
       "about_body": "Founded in 2010...",
       "programs_heading": "Our Programs",
       "contact_heading": "Get In Touch"
     },
     "programs": [...],
     "stats": [...]
   }
   ```

3. **Add media assets**

   Add the following images to the `assets/` folder:
   - `founder.jpg` - Photo of the founder (400x400px recommended)
   - `og-image.jpg` - Social media sharing image (1200x630px)
   - Favicon files (generate from https://realfavicongenerator.net/)

   Add gallery images to `assets/gallery/`:
   - Classroom photos
   - Therapy session photos
   - Facility images
   - Activity photos

   **Important:** Ensure you have proper consent before using photos of children.

4. **Update configuration**

   Replace placeholder data in `data.json`:
   - WhatsApp number (already updated: 9779847157110)
   - Facebook page URL
   - Complete street address
   - Verify location matches Google Maps embed
   - Update testimonials with real feedback
   - Update founder information as needed

5. **Launch the website**

   **Option A: Simple file open**
   - Open `index.html` directly in your browser

   **Option B: Local server (recommended)**
   ```bash
   # Using Python 3
   python3 -m http.server 8000

   # Using Node.js (npx)
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

   Then visit `http://localhost:8000` in your browser.

## Customization

### Updating Content

All website content is managed through `data.json`. To update:

1. Open `data.json`
2. Edit the relevant fields
3. Refresh the website

### Modifying Styles

The website uses:
- **Tailwind CSS** (via CDN) for utility classes
- **Custom CSS variables** for theming (light/dark mode)
- **Google Fonts**: Lora (headings) and Nunito (body)

Edit the `<style>` section in `index.html` to customize colors, fonts, and spacing.

### WhatsApp Integration

Update the `whatsapp_number` field in `data.json` with your actual WhatsApp Business number (international format without +).

### Google Maps

1. Get your embed URL from [Google Maps](https://www.google.com/maps)
2. Update `map_embed_url` in `data.json`

## Website Sections

### 1. Hero Section
- Eye-catching headline and subtitle
- Call-to-action buttons
- Decorative background elements

### 2. Statistics Bar
- Families served
- Years of service
- Specialist staff count
- Core programs count

### 3. About Section
- School story and mission
- Founder profile with credentials
- Professional biography

### 4. Programs Section
Four core programs:
1. **Early Intervention** (Ages 2-6) - Play-based therapy for communication and social skills
2. **School Readiness** (Ages 5-10) - Academic readiness and peer interaction
3. **Life Skills** (Ages 10-18) - Independence training and vocational exploration
4. **Family Support** (All Ages) - Parent workshops and community resources

### 5. Testimonials Section
- Family success stories
- Parent feedback and quotes
- Configurable via data.json

### 6. Photo Gallery
- Classroom and facility images
- Activity photos
- Therapy session visuals
- Hover effects with captions

### 7. Contact Section
- WhatsApp contact form
- Email and address information
- Facebook page link
- Interactive Google Maps embed

### 8. Footer
- Site navigation
- Social media links
- Copyright information

## Advanced Features

### SEO Optimization
- Comprehensive meta tags
- Open Graph protocol for Facebook sharing
- Twitter Card support
- Proper heading hierarchy
- Semantic HTML structure
- Descriptive alt text for all images
- Keywords and description optimization

### Custom 404 Error Page
- User-friendly error message
- Navigation back to home
- Quick links to main sections
- Consistent branding

### Data Privacy
- `.gitignore` file protects sensitive data.json from being committed
- WhatsApp integration for privacy-conscious communication
- No external tracking scripts
- Minimal data collection

### Gallery System
- Lazy loading images for performance
- Responsive image grid
- Hover effects with captions
- Placeholder support for missing images

### Testimonials System
- Dynamic rendering from JSON
- Avatar support (emoji or images)
- Flexible quote formatting
- Responsive card layout

## Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles
- Skip to main content link
- Keyboard navigation support
- Focus indicators
- Alt text for all images
- Color contrast compliance (WCAG AA)
- Responsive text sizing
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid
- **Vanilla JavaScript (ES6+)** - No framework dependencies
- **Tailwind CSS** (via CDN) - Utility-first CSS
- **Google Fonts** - Lora & Nunito
- **JSON** - Data storage and configuration

## Important Configuration Notes

### Location Consistency
Ensure your location is consistent across:
1. `data.json` → `school_info.location`
2. `data.json` → `school_info.map_embed_url` (must match actual location)
3. `data.json` → `school_info.address`

**Current Issue:** The map embed points to Kathmandu but location says Butwal. Please update one to match the other.

### Contact Information
Update these placeholders in `data.json`:
- ✅ WhatsApp: Updated to 9779847157110
- ❌ Facebook: Still shows "https://facebook.com/yourpage"
- ❌ Address: Still shows "Address galli, Butwal, Lumbini, Nepal"
- ❌ Map: Shows Kathmandu but location says Butwal

### Required Assets
Create/add these files to `assets/` folder:
- `founder.jpg` - Founder photo
- `og-image.jpg` - Social sharing image (1200x630px)
- `favicon.ico` and PNG variants
- `apple-touch-icon.png`

### Gallery Images
Add photos to `assets/gallery/` matching the filenames in data.json:
- `classroom-1.jpg`
- `therapy-session.jpg`
- `outdoor-play.jpg`
- `art-class.jpg`
- `library.jpg`
- `family-workshop.jpg`

## License

This project is created for the Nepal Center for Autism Excellence.

## Contact

- **Website**: [Live URL]
- **Email**: info@autismschool.edu.np
- **WhatsApp**: [Contact Number]
- **Facebook**: [Facebook Page]
- **Location**: Butwal, Lumbini, Nepal

---

Built with care for neuro-inclusive Nepal.