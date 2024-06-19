
import './App.css';
import Button from "./components/Button"
import Footer from './components/Footer';
import Header from './components/Header';
import Item from './components/Item';

function App() {
  return (
    <>
   <Header />
   <Item section="MUSIC"/>
   <Item section="MERCH"/>
   <Button />
   <Footer />
    </>
  );
}

export default App;
