import "./App.css";
import Navbar from "./components/Navbar";
import CompanyInfo from "./components/CompanyInfo";
import Verification from "./components/Verification";
import Businesstype from "./components/Businesstype";
import FoodStep from "./components/FoodStep";
import InviteUser from "./components/InviteUser";
import { useState } from "react";
import BackForwardBtn from "./components/BackForwardBtn";
import Confirmation from "./components/Confirmation";

function App() {
  const [current, setCurrent] = useState(0);
  const handleNext = () => {
    if (current === 5) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  const onFinish = (values) => {
    console.log(values);
    setCurrent(current + 1);
  };
  const section = [
    <CompanyInfo onFinish={onFinish} />,
    <Verification handleNext={handleNext} />,
    <Businesstype />,
    <FoodStep />,
    <InviteUser onFinish={onFinish} />,
    <Confirmation />,
  ];

  const handlePrev = () => {
    setCurrent(current - 1);
  };
  return (
    <div className="App" style={{ width: "90%", margin: "auto" }}>
      <Navbar setCurrent={setCurrent} current={current} />
      {section[current]}
      <BackForwardBtn
        current={current}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default App;
