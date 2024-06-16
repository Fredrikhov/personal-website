import "./App.css";
import { Footer } from "./components/Footer";
import { Index } from "./components/Index";
import { Nav } from "./components/Nav";

export const App = () => {
  return (
    <div className="layout">
      <Nav />
      <main>
        <Index />
      </main>
      <Footer />
    </div>
  );
};
