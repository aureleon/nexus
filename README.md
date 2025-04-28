# dhguzman-portfolio

A modern, fast, and minimal personal portfolio built with [Astro](https://astro.build/), [Svelte](https://svelte.dev/), and [Bun](https://bun.sh/).

## ✨ Features

- Lightning-fast static site generation with Astro
- Interactive UI powered by Svelte components
- SPA navigation using svelte-spa-router
- Custom theming with light/dark mode (WIP)

## 📁 Project Structure

```text
/
├── public/                # Static assets (images, icons, styles)
│   ├── style.css
│   ├── extra/             # Custom images and SVGs
│   ├── icons/             # Technology icons
│   ├── socials/           # Social media icons
│   └── term/              # Terminal UI assets
├── src/
│   ├── components/        # Svelte UI components (Icon, Tab, Theme)
│   ├── islands/           # Svelte components for partial hydration (Footer, Header, Term)
│   ├── layouts/           # Astro layout wrappers (Layout.astro)
│   ├── lib/               # Shared stores and utilities (ThemeStore.ts)
│   ├── pages/             # Astro entrypoints (index.astro)
│   └── routes/            # Svelte SPA route components (About, App, Contact, Home, Projects)
├── astro.config.mjs
├── svelte.config.js
├── tsconfig.json
├── package.json
├── bun.lock
└── LICENSE
```

## 🚀 Getting Started

1. **Install dependencies**
   ```sh
   bun install
   ```
2. **Start the development server**
   ```sh
   bun dev
   ```
   Visit [localhost:4321](http://localhost:4321) in your browser.

3. **Build for production**
   ```sh
   bun build
   ```

4. **Preview the production build**
   ```sh
   bun preview
   ```

## 🛠️ Customization

- Update your info and content in the Svelte route files under `src/routes/` (Home.svelte, About.svelte, Projects.svelte, Contact.svelte).
- Add or update components in `src/components/`.
- Change global styles in `public/style.css`.
- Add images or SVGs to `public/extra/` or `public/icons/`.
- Update social links in the relevant Svelte components.

## 🌗 Theming

- Theme switching is handled by `src/components/Theme.svelte` and `src/lib/ThemeStore.ts`.
- Light and dark icons are in `public/extra/`.

## 📦 Tech Stack

- [Astro](https://astro.build/) — Static site generator
- [Svelte](https://svelte.dev/) — UI framework
- [Bun](https://bun.sh/) — Fast JavaScript runtime & package manager

## 📄 License

MIT. Feel free to use, modify, and share.
