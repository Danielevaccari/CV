import Frontpage from "./Frontpage/Frontpage"
import Bio from "./Description/Bio"
import CV from "./CV/CV"
import Slider from "./CV/Slide/Slide"
import Platform from "./Components/Platform/Platform"
import InfoList from "./Components/InfoList/InfoList"
import { HashRouter, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <><HashRouter>
      <Switch>

        <Route exact path='/'>
          <Bio />
          <InfoList />
          <Frontpage />
          <Slider />
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
