import {Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnimalsPage from "./pages/AnimalsPage";
import TopNavigation from "./components/TopNavigation";
import Switch from "react-bootstrap/esm/Switch";
import EmptyPage from "./components/EmptyPage";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import {userInfo} from "./data"


function App() {
  const user = userInfo[1];

  return (
    <>
      <TopNavigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/animals">
          <AnimalsPage user={user} />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/login">
          <LoginPage />
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
