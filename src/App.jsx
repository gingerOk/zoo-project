import {Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnimalsPage from "./pages/AnimalsPage";
import TopNavigation from "./components/TopNavigation";
import Switch from "react-bootstrap/esm/Switch";
import EmptyPage from "./components/EmptyPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <>
      <TopNavigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/animals">
          <AnimalsPage />
        </Route>
        <Route path="/animals/:category">
          <EmptyPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
      </Switch>
      {/* <Route path="/signup">
          <SignupPage setMessage={setMessage} />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route> */}
    </>
  );
}

export default App;
