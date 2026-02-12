import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
    <nav>
      <Navbar/>
    </nav>
    <main>
      <Landing/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
  );
}
