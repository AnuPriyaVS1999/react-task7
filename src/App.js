import logo from './logo.svg';
import './App.css';
import NavBar from './components/includes/NavBar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Accounting from './components/screens/Accounting';
import Delivery from "./components/screens/Delivery"



function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<NavBar/>}/>
        <Route path="/navbar" element={<NavBar/>}/>
        <Route path="/commingsoon" element={<Delivery/>}/>
       
      </Routes>
    </Router>
  
  )
}

export default App;
