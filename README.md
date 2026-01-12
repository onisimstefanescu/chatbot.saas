# Chat Inteligent - Website MVP

Chatbot B2B pentru firme de servicii din România. Abordare demo-first, fără prețuri afișate.

## 📁 Structura Site

### Pagini Core (5)
- `index.html` - Homepage cu hero, problems, solutions, benefits
- `functionalitati.html` - 7 funcționalități detaliate
- `cum-functioneaza.html` - 5 pași proces + tehnologie + FAQ
- `integrari.html` - Platforme compatibile + integrări disponibile
- `cazuri-utilizare.html` - 4 industrii + 6 scenarii

### Pagini Companie (2)
- `despre.html` - Despre produs (200 cuvinte, MVP transparent)
- `contact.html` - Formular contact + info + FAQ

### Pagini Legal (3)
- `termeni.html` - Termeni și condiții (limbaj clar)
- `confidentialitate.html` - GDPR compliant
- `cookie.html` - Politică cookie cu tabele

### Assets
- `styles.css` - Styling complet responsive
- `script.js` - JavaScript pentru formulare
- `contact.js` - JavaScript pentru pagina contact
- `images/` - Logo și icon-uri

### SEO
- `sitemap.xml` - Toate paginile cu priorități
- `robots.txt` - Configurare crawling
- `.htaccess` - Optimizări server (opțional)

## 🚀 Deployment

### 1. Actualizare Domeniu
Înlocuiește `chatinteligent.ro` în:
- `sitemap.xml` (toate URL-urile)
- `robots.txt` (URL sitemap)
- `index.html` (canonical link)

### 2. Configurare Email (Google Apps Script)
Actualizează URL-ul în:
- `script.js` linia 20
- `contact.js` linia 20

### 3. Upload Files
Upload toate fișierele pe hosting via FTP/cPanel:
```
/
├── index.html
├── functionalitati.html
├── cum-functioneaza.html
├── integrari.html
├── cazuri-utilizare.html
├── despre.html
├── contact.html
├── termeni.html
├── confidentialitate.html
├── cookie.html
├── styles.css
├── script.js
├── contact.js
├── sitemap.xml
├── robots.txt
├── .htaccess
└── images/
```

### 4. SSL Certificate
- Activează HTTPS pe hosting
- Decomentează liniile HTTPS redirect în `.htaccess`

### 5. Google Search Console
- Adaugă proprietatea site-ului
- Submit `sitemap.xml`
- Verifică indexare

## 🎨 Design

### Colors
- Primary: `#4F46E5` (Indigo)
- Success: `#10B981` (Green)
- Dark: `#0F172A` (Navy)
- Text: `#475569` (Slate)

### Typography
- Font: System fonts (Inter, Segoe UI, Roboto)
- Headings: 700-800 weight
- Body: 400 weight

### Breakpoints
- Desktop: 1280px max-width
- Tablet: 768px
- Mobile: 480px

## ✅ Caracteristici

### MVP Approach
- ✓ Demo-first (zero prețuri afișate)
- ✓ Transparent despre stadiu MVP
- ✓ CTA principal: "Programează Demo"
- ✓ Limbaj B2B profesional

### SEO
- ✓ Meta descriptions pe toate paginile
- ✓ Semantic HTML
- ✓ Responsive design
- ✓ Fast loading
- ✓ Sitemap.xml
- ✓ Robots.txt

### Legal
- ✓ GDPR compliant
- ✓ Cookie policy
- ✓ Termeni clari
- ✓ Politică confidențialitate

## 📊 Analytics (To Add)

### Google Analytics
Adaugă în `<head>` pe toate paginile:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Tag Manager (Recomandat)
Adaugă în `<head>`:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
```

## 🔧 Menținerе

### Update Content
- `lastmod` în `sitemap.xml` când modifici pagini
- Data "Ultima actualizare" în paginile legal

### Integrări Noi
- Actualizează `integrari.html` cu statusuri
- Marchează "În dezvoltare" → "Disponibilă"

### Monitorizare
- Google Search Console: indexare + erori
- Analytics: trafic + conversii demo
- Form submissions: Google Sheets

## 📞 Contact Development

Pentru modificări sau întrebări tehnice:
- Email: contact@chatinteligent.ro

---

**Versiune:** 1.0 MVP
**Data:** 12 ianuarie 2026
**Status:** Production Ready ✅
