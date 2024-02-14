import './App.css'
import Footer from './components/Footer/Footer';

import About from './components/About/About';
import Header from './components/Header/Header';
import FinancialSolutions from './components/FinancialSolutions/FinancialSolutions';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <FinancialSolutions/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
