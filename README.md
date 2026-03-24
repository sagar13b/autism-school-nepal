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
- **Founder Profile** - Highlighting Dr. Arati Sharma's credentials and mission
- **Google Maps Integration** - Interactive location map
- **Performance Optimized** - Fast loading, minimal dependencies, Tailwind CSS via CDN

## Project Structure

```
autism-school-nepal/
├── index.html          # Main website HTML
├── script.js           # JavaScript functionality and data loading
├── data.json           # Website content and school information (to be created)
├── assets/             # Images and media files (to be created)
│   └── founder.jpg
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

2. **Create the data.json file**

   The website loads content from a `data.json` file. Create this file in the root directory with the following structure:

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

   Create an `assets/` folder and add:
   - `founder.jpg` - Photo of the founder

4. **Launch the website**

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

## Programs Offered

1. **Early Intervention** (Ages 2-6) - Play-based therapy for communication and social skills
2. **School Readiness** (Ages 5-10) - Academic readiness and peer interaction
3. **Life Skills** (Ages 10-18) - Independence training and vocational exploration
4. **Family Support** (All Ages) - Parent workshops and community resources

## Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles
- Skip to main content link
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Color contrast compliance (WCAG AA)
- Responsive text sizing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Tailwind CSS (via CDN)
- Google Fonts

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