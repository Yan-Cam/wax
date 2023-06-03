import './App.css'
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/home'
import { Switch } from 'react-router-dom/cjs/react-router-dom'
import sap_implementation from './pages/sap_implementation'
import solution from './pages/solution'
import cases from './pages/cases'
import about from './pages/about'
import join from './pages/join'
function App() {
  return (
      <div className="App">
        <Header />
        <Switch>
          <Route path={'/home'} component={Home}/>
          <Route path={'/sap_implementation'} component={sap_implementation}/>
          <Route path={'/solution'} component={solution}/>
          <Route path={'/cases'} component={cases}/>
          <Route path={'/about'} component={about}/>
          <Route path={'/join'} component={join}/>
          <Redirect to={'/home'}/>
        </Switch>
        <Footer />
      </div>

  );
}

export default App;
