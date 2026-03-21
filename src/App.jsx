import { ThemeProvider } from './hooks/useTheme';
import Cosmos from './components/Cosmos';
import QuickNav from './components/QuickNav';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import SummarySection from './components/SummarySection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import PublicationsSection from './components/PublicationsSection';
import ProjectsSection from './components/ProjectsSection';
import AwardsSection from './components/AwardsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <Cosmos />
      <a href="#main" id="skip-link">Skip to main content</a>
      <QuickNav />
      <ThemeToggle />
      <Header />

      <main className="container" id="main" tabIndex={-1} role="main">
        <AboutSection />
        <SummarySection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <PublicationsSection />
        <ProjectsSection />
        <AwardsSection />
      </main>

      <Footer />
    </ThemeProvider>
  );
}
