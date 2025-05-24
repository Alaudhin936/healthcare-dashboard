// import logo from './logo.svg';
import './App.css';
import Appointments from './data/Appointments';
import { SideBar } from './scripts/SideBar';

function App() {
  return (
    <div className="App">
      <div></div>
      <div><SideBar Appointments={Appointments}/></div>
      <div></div>
    </div>
  );
}

export default App;
