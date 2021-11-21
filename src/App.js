
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Clinic from './components/pages/Clinic';
import Doctors from './components/pages/Doctors';
import Home from './components/pages/Home';


function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Doctors" exact component={Doctors} />
        <Route path="/Clinic" exact component={Clinic} />
      </Switch>

      </Router>


    </>
  );
}

export default App;
