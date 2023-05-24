import "./App.css";
import CardInfo from "./components/homepage/CardInfo";
import FormSection from "./components/homepage/FormSection";
import Navbar from "./components/homepage/Navbar";
import "./styles/styles.scss";

function App() {
  return (
    <main>
      <Navbar />
      <div className="main-content">
        <section>
          <FormSection />
        </section>
        <aside>
          <CardInfo />
        </aside>
      </div>
    </main>
  );
}

export default App;
