import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";

import Login from "./components/Login/Login";
import OPB from "./components/OutPatientBilling/OPB";
import Patient_Register from "./components/Patient_Register/Patient_Register";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}

      {/* <Login /> */}
      {/* <Dashboard /> */}

      <Patient_Register />
      {/* <OPB /> */}
    </div>
  );
}

export default App;
