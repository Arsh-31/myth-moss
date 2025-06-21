import { Container } from "./Main";
import { Footer } from "./Footer";
import { Header } from "./Header";

function Newspaper() {
  return (
    <div className="p-4 font-cormorant">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default Newspaper;
