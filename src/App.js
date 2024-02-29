import './App.css';
import Navbar from './components/Navbar';
import CompanyInfo from './components/CompanyInfo';
import Verification from './components/Verification';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CompanyInfo/>
      <Verification/>
    </div>
  );
}

export default App;
