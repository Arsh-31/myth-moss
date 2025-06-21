import { Container } from "./Main";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Paper from "./Paper";

function Newspaper() {
  return (
    <Paper>
      <Header />
      <Container />
      <Footer />
    </Paper>
  );
}

export default Newspaper;
