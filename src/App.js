import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './components/Home/Home'
import CreateArticle from './components/CreateArticle/createArticle'
import Login from './components/Users/Login/Login'
import Signup from './components/Users/Signup/Signup'

import './App.css';

function App() {
  return (
    <Router>
      <div className="container app-container">
        <NavigationBar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/createArticle" component={CreateArticle} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
  );
}

export default App;
