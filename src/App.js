import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Layout from './containers/Layout'
import Actors from './Pages/Actors'
import Series from './Pages/Series'

const App = () => {
  return (
    <Router>
      <Menu/>
      <Route exact path="/" component={Layout}/>
      <Route path="/series" component={Series}/>
      <Route path="/Actors" component={Actors}/>
    </Router>
  )
}
export default App