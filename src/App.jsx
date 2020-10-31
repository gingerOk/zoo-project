import {Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnimalsPage from "./pages/AnimalsPage";
import TopNavigation from "./components/TopNavigation";

function App() {
  return (
    <>
      <TopNavigation />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/animals">
        <AnimalsPage />
      </Route>

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
