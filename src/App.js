import logo from './logo.svg';
import Item from './component/item.js'
import Input from './component/input.js'
import DoneList from './component/doneList.js'
import TodoContainer from './component/todoContainer.js'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/done">Done</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <TodoContainer></TodoContainer>
            </Route>
            <Route exact path="/done">
              <DoneList></DoneList>
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}


export default App;
