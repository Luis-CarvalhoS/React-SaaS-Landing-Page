import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { Hero } from "./components/sections/Hero";
import { Princing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <Layout title="NeoAI">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Princing
    </Layout>
  );
}

export default App;
