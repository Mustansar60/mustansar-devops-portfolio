import { Hero, Experience, Skills, Projects, Certifications, Footer } from './components';
import portfolioData from './data/portfolio.json';
import './App.css';

function App() {
  return (
    <main className="bg-gradient-to-b from-dark-bg via-dark-bg to-dark-card min-h-screen">
      {/* Hero section */}
      <Hero profile={portfolioData.profile} />

      {/* Experience section */}
      <Experience experience={portfolioData.experience} />

      {/* Skills section */}
      <Skills skills={portfolioData.skills} />

      {/* Projects section */}
      <Projects projects={portfolioData.projects} />

      {/* Certifications section */}
      <Certifications certifications={portfolioData.certifications} />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;
