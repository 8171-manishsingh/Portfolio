# Manish Das Portfolio

A modern, responsive developer portfolio built with React and Tailwind CSS.
It showcases my MERN stack profile, projects, resume, and contact details in a clean single-page layout.

## Live Features
- Hero section with profile image and social links
- Resume view and download buttons
- Project cards with pagination for future scalability
- Contact section with email, phone, GitHub, and LinkedIn
- Smooth section-based navigation
- Mobile responsive UI

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Project Structure
```text
src/
  assets/               # Images and resume file
  components/           # Reusable UI sections
  data/portfolioData.js # Personal details + project data
  App.jsx               # Main app layout
```

## Getting Started
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
5. Preview production build:
   ```bash
   npm run preview
   ```

## Customize Portfolio Content
Update all personal information and project entries in:

`src/data/portfolioData.js`

You can replace:
- Name, role, location, email, phone
- Social profile links
- Resume file path
- Project titles, descriptions, stacks, and repo/live links

## Resume Setup
Current resume file:

`src/assets/Resume/Manish Das – Resume.pdf`

If you change the file name or location, update the import in:

`src/data/portfolioData.js`

## Deployment (Vercel)
This project includes a `vercel.json` rewrite rule so route refreshes do not break.

Deploy steps:
1. Push code to GitHub
2. Import repository into Vercel
3. Use default Vite build settings
4. Deploy

## License
This project is open for personal use and customization.
