import logo from './logo.svg';
import Item from './component/item.js'
import Input from './component/input.js'
import DoneList from './component/doneList.js'
import TodoContainer from './component/todoContainer.js'
import './App.css';
import {useEffect} from 'react'
import {getTodo} from './api/todos.js'
import { INIT_TODO } from './constant/constant';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

	useEffect( () => {
		getTodo().then( (response) => {dispatch( {type: INIT_TODO , payload: response.data})} );
	}   );


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
