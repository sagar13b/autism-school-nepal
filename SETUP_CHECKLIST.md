# Website Setup Checklist

Complete this checklist to fully customize your Nepal Center for Autism Excellence website.

## ✅ Completed

- [x] Website structure created
- [x] Responsive design implemented
- [x] Dark mode support added
- [x] SEO meta tags configured
- [x] Testimonials section added
- [x] Photo gallery added
- [x] 404 error page created
- [x] Assets folder structure created
- [x] .gitignore file added (protects sensitive data)

## 📝 To Do - Update Content

### 1. data.json Configuration

#### School Information
- [ ] Update Facebook page URL (currently: "https://facebook.com/yourpage")
- [ ] Update complete street address (currently: "Address galli, Butwal, Lumbini, Nepal")
- [ ] Fix location consistency:
  - Location says: "Butwal, Lumbini, Nepal"
  - Map embed shows: Kathmandu
  - **Action:** Choose correct location and update both
- [x] WhatsApp number updated (9779847157110)

#### Founder Information
- [x] Founder name updated to "Sagar"
- [ ] Review and update founder bio if needed
- [ ] Verify credentials are accurate
- [ ] Add founder photo (see Assets section below)

#### Testimonials
- [ ] Replace sample testimonials with real family feedback
- [ ] Get written permission from families to use quotes
- [ ] Update names and roles
- [ ] Consider adding more testimonials (3-6 recommended)

#### Programs
- [ ] Review program descriptions
- [ ] Update age ranges if needed
- [ ] Verify all information is current

### 2. Add Images (see assets/PLACEHOLDER_INSTRUCTIONS.md)

#### Required - High Priority
- [ ] `assets/founder.jpg` - Founder photo (400x400px)
- [ ] `assets/og-image.jpg` - Social sharing image (1200x630px)
- [ ] Generate favicons from logo:
  - [ ] `favicon.ico`
  - [ ] `favicon-16x16.png`
  - [ ] `favicon-32x32.png`
  - [ ] `apple-touch-icon.png`
  - Use: https://realfavicongenerator.net/

#### Gallery Photos - Medium Priority
Replace these placeholders in `assets/gallery/`:
- [ ] `classroom-1.jpg`
- [ ] `therapy-session.jpg`
- [ ] `outdoor-play.jpg`
- [ ] `art-class.jpg`
- [ ] `library.jpg`
- [ ] `family-workshop.jpg`

**Important:** Get written consent before using photos of children!

### 3. SEO & Social Media

In `index.html` head section, update:
- [ ] Line ~16: Update website URL from "https://yourwebsite.com/"
- [ ] Line ~21: Update Open Graph URL
- [ ] Line ~24: Update Open Graph image URL
- [ ] Line ~30: Update Twitter card URL
- [ ] Line ~32: Update Twitter image URL
- [ ] Optional: Add Twitter handle if you have one

### 4. Google Maps

- [ ] Fix location mismatch (Butwal vs Kathmandu)
- [ ] Get correct Google Maps embed URL:
  1. Go to Google Maps
  2. Search for your location
  3. Click "Share" → "Embed a map"
  4. Copy the iframe URL
  5. Update `data.json` → `school_info.map_embed_url`

### 5. Testing

Before going live:
- [ ] Test on desktop browser
- [ ] Test on mobile device
- [ ] Test all navigation links
- [ ] Test WhatsApp contact form
- [ ] Test dark mode toggle
- [ ] Verify all images load correctly
- [ ] Check contact information accuracy
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)

### 6. Deployment

- [ ] Choose hosting platform:
  - GitHub Pages (free)
  - Netlify (free)
  - Vercel (free)
  - Traditional web hosting
- [ ] Configure custom domain (optional)
- [ ] Set up SSL certificate (HTTPS)
- [ ] Submit to Google Search Console
- [ ] Create sitemap.xml
- [ ] Test website speed (PageSpeed Insights)

## 🔒 Security & Privacy

- [x] .gitignore protects data.json from being committed
- [ ] Review privacy policy needs
- [ ] Ensure photo consent forms are signed
- [ ] Consider GDPR/privacy compliance if collecting data

## 📱 Social Media

After launch:
- [ ] Share on Facebook page
- [ ] Update Facebook "About" with website link
- [ ] Add website to Google My Business
- [ ] Share with parent community
- [ ] Consider creating social media graphics using og-image.jpg

## 📞 Contact Information Summary

Update these in `data.json`:
- Email: info@autismschool.edu.np ✓
- WhatsApp: 9779847157110 ✓
- Facebook: ❌ Needs update
- Address: ❌ Needs complete address
- Location: ❌ Fix Butwal/Kathmandu mismatch

## 🎨 Customization Tips

### Colors
To change brand colors, edit CSS variables in `index.html` (around line 25-45):
- `--accent-teal`: Main brand color
- `--accent-blue`: Secondary accent
- `--accent-green`: Success/highlight color

### Fonts
Current fonts (Google Fonts):
- Headings: Lora (serif)
- Body: Nunito (sans-serif)

To change, update the Google Fonts link and CSS variables.

### Content
All content is in `data.json` - no need to edit HTML files!

## 🆘 Need Help?

Common issues:
1. **Images not showing:** Check file names match exactly (case-sensitive)
2. **WhatsApp not working:** Verify number format (country code without +)
3. **Map not loading:** Get fresh embed code from Google Maps
4. **Data not updating:** Clear browser cache, check data.json syntax

---

**Next Steps:**
1. Start with updating `data.json` contact information
2. Add founder photo
3. Generate and add favicons
4. Test the website locally
5. Add gallery photos
6. Update testimonials with real feedback
7. Deploy to hosting

Good luck! 🌸
