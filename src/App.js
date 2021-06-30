import Frontpage from "./Frontpage/Frontpage"
import Bio from "./Description/Bio"
import CV from "./CV/CV"
import { HashRouter, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <><HashRouter>
      <Switch>

        <Route exact path='/'>
          <Bio />
          <Frontpage />
        </Route>


        <Route exact path='/cv'>
          <CV />
        </Route>

      </Switch>
    </HashRouter>

    </>
  );
}

export default App;
