import './App.css';
import Navbar from './components/Navbar';
import CompanyInfo from './components/CompanyInfo';
import Verification from './components/Verification';
import Businesstype from './components/Businesstype';
import FoodStep from './components/FoodStep';
import InviteUser from './components/InviteUser';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CompanyInfo/>
      <Verification/>
      <Businesstype/>
      <FoodStep/>
      <InviteUser/>
    </div>
  );
}

export default App;
