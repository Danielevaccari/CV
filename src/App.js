import Frontpage from "./Frontpage/Frontpage"
import Bio from "./Description/Bio"
import CV from "./CV/CV"
import Slider from "./CV/Slide/Slide"
import Platform from "./Platform/Platform"
import { HashRouter, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <><HashRouter>
      <Switch>

        <Route exact path='/'>
          <Bio />
          <Slider />
          <Frontpage />
          <Platform />
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
