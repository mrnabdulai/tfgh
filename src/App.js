import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Members from "./Members";
import Member from "./Member";
import NewMember from "./NewMember";
import EditMember from "./EditMember";
function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <Switch>
            <Route path='/' exact>
              <Login />
            </Route>
            <Route path='/members' exact>
              <Members />
            </Route>

            <Route path='/members/:memberId' exact>
              <Member />
            </Route>

            <Route path='/new-member' exact>
             <NewMember />
            </Route>

            <Route path='/edit-member/:memberId' exact>
             <EditMember />
            </Route>

          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
