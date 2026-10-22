# StarPlus Restaurant – React + Vite

## Run karne ka tarika
```bash
npm install
npm run dev      # development server
npm run build    # production build (dist/ folder)
```

## Folder structure
```
StarPlus-restaurant/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/data.js            # meals, categories, gallery, testimonials
    ├── components/             # har section ka alag .jsx
    │   ├── Navbar.jsx, Hero.jsx, Features.jsx, Menu.jsx, About.jsx
    │   ├── Gallery.jsx, Popular.jsx, Chef.jsx, WhyChoose.jsx
    │   ├── Testimonials.jsx, Reservation.jsx, CtaBanner.jsx, Footer.jsx
    │   └── Toast.jsx, VideoModal.jsx, GalleryModal.jsx,
    │       ReservationModal.jsx, CartDrawer.jsx
    └── styles/                 # har component ki alag .css
        ├── global.css          # colors (CSS variables), reset, buttons
        └── Navbar.css, Hero.css, ... CartDrawer.css, Modal.css
```

Colors badalne ho to `src/styles/global.css` ke `:root` variables edit karein.
