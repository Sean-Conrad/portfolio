import Header from "./Header";
import Bio from "./Bio";
import Experience from "./Experience";
import Resume from "./Resume";
import Projects from "./Projects";
import Footer from "./Footer";

//Getting background from transparent textures . com

export default function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Experience />
      <Projects />

      <Resume />
      <Footer />
    </div>
  );
}
