# Portfolio Website

A modern, animated portfolio website built with React, Vite, and Tailwind CSS.

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── AnimatedBackground.jsx
│   ├── Hero.jsx         # Landing section
│   ├── About.jsx        # About me section
│   ├── Projects.jsx     # Projects grid
│   ├── ProjectCard.jsx  # Individual project card
│   ├── Skills.jsx       # Skills/Tech stack
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer with social links
│
├── data/                # Data and content
│   └── portfolioData.js # All editable content (projects, skills, personal info)
│
├── styles/              # Custom styles
│   └── animations.css   # Animation keyframes
│
├── Portfolio.jsx        # Main portfolio component
├── App.jsx             # App entry point
└── index.css           # Global styles
```

## 🎯 How to Edit Content

### 1. **Personal Information**
Edit `src/data/portfolioData.js`:
```javascript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername'
};
```

### 2. **Projects**
Add/edit projects in `src/data/portfolioData.js`:
```javascript
export const projects = [
  {
    title: 'Project Name',
    desc: 'Project description',
    tags: ['React', 'Node.js'],
    gradient: 'from-blue-500 to-cyan-500',
    demoUrl: 'https://demo-link.com',
    codeUrl: 'https://github.com/username/repo'
  }
];
```

### 3. **Skills**
Edit skills in `src/data/portfolioData.js`:
```javascript
export const skills = [
  { 
    category: 'Frontend', 
    items: ['React', 'Next.js', 'Tailwind'] 
  }
];
```

### 4. **About Section**
Edit `src/components/About.jsx` to change the about text.

### 5. **Styling**
- Colors and gradients: Edit Tailwind classes in components
- Animations: Edit `src/styles/animations.css`

## 🚀 Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📦 Component Overview

| Component | Purpose | Editable File |
|-----------|---------|---------------|
| **Hero** | Landing section with title | `components/Hero.jsx` |
| **About** | About me information | `components/About.jsx` |
| **Projects** | Project showcase grid | `data/portfolioData.js` |
| **Skills** | Tech stack display | `data/portfolioData.js` |
| **Contact** | Contact form | `components/Contact.jsx` |
| **Footer** | Social links & copyright | `components/Footer.jsx` |

## 🎨 Customization Tips

1. **Colors**: Change gradient classes like `from-blue-500 to-purple-600`
2. **Spacing**: Modify `py-24`, `px-4`, `gap-8` classes
3. **Animations**: Edit `src/styles/animations.css`
4. **Content**: All text is in `portfolioData.js` or component files

## 📝 License

MIT License - Feel free to use for your own portfolio!
