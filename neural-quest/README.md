# 🧠 The Neural Quest - AI Portfolio

An immersive RPG-themed portfolio website showcasing the work of **Adhithyan Aravind** in AI, Robotics, and Game AI.

## 🌟 Features

- **Landing Zone**: Animated boot sequence with neural network visualization
- **About Zone**: Interactive terminal interface displaying education and background
- **Projects Zone**: Holographic project archive with 3D cube interactions
- **Skills Zone**: Visual skill tree with progress indicators
- **Achievements Zone**: Connected node network displaying certifications
- **Contact Zone**: Futuristic command panel with contact form
- **AI Chatbot**: Interactive assistant powered by AI to answer questions

## 🚀 Tech Stack

- **Framework**: Next.js 16 (React 19)
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **State Management**: Zustand
- **Language**: TypeScript

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd neural-quest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Deploy with one click

### Manual Deployment

```bash
npm run build
npm start
```

## 🔧 Configuration

### OpenAI API Integration (Optional)

To enable the AI chatbot with real responses:

1. Create a `.env.local` file in the root directory
2. Add your OpenAI API key:
   ```
   NEXT_PUBLIC_OPENAI_API_KEY=your_api_key_here
   ```
3. Update the `ChatbotZone.tsx` component to use the actual API

**Note**: Currently using mock responses for the chatbot. Uncomment and configure the OpenAI integration in the component.

## 📁 Project Structure

```
neural-quest/
├── app/
│   ├── components/
│   │   ├── AchievementsZone/
│   │   ├── AboutZone/
│   │   ├── ChatbotZone/
│   │   ├── ContactZone/
│   │   ├── LandingZone/
│   │   ├── ProjectsZone/
│   │   ├── SkillsZone/
│   │   └── common/
│   ├── data/
│   │   └── personalData.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── lib/
│   └── store.ts
├── public/
│   ├── images/
│   └── resume/
├── next.config.ts
├── package.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `app/data/personalData.ts` to update:
- Education details
- Work experience
- Skills and technologies
- Projects
- Certifications
- Contact information

### Styling

- Main theme colors are defined in `app/globals.css`
- Customize neon colors, fonts, and animations
- Modify component styles in individual zone files

## 🎮 Zones Overview

### 1. Landing Zone - The Awakening Protocol
Animated boot sequence introducing the portfolio.

### 2. About Zone - The Origin Terminal
Terminal-style interface showing education and background.

### 3. Projects Zone - The Research Archives
Interactive project cards with hover effects and details.

### 4. Skills Zone - The Robotics Core
Visual skill display with progress bars and category grouping.

### 5. Achievements Zone - The Neural Network
Connected node network representing certifications and milestones.

### 6. Contact Zone - The Command Chamber
Contact form and social links.

### 7. Chatbot Zone - The Core Interface
AI-powered interactive assistant.

## 🔐 Environment Variables

Create a `.env.local` file (optional):

```env
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
```

## 📝 License

This project is private and proprietary.

## 👤 Author

**Adhithyan Aravind**
- Email: adhithyan245@gmail.com
- LinkedIn: [linkedin.com/in/adhithyan-aravind-8a9393249](https://linkedin.com/in/adhithyan-aravind-8a9393249)
- GitHub: [github.com/Adhithyan245](https://github.com/Adhithyan245)

## 🎯 Future Enhancements

- [ ] Real-time 3D models using React Three Fiber
- [ ] Particle physics interactions
- [ ] Sound effects and background music
- [ ] Dark/Light theme toggle
- [ ] Multiple language support
- [ ] Performance analytics
- [ ] Contact form backend integration

## 🛠️ Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

### Three.js Issues
Make sure all required dependencies are installed:
```bash
npm install three @react-three/fiber @react-three/drei
```

## 📞 Support

For questions or issues, please contact:
- Email: adhithyan245@gmail.com
- GitHub Issues: Open an issue in the repository

---

**Built with ❤️ and 💻 by Adhithyan Aravind**
