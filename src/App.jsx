import React, {lazy, Suspense} from 'react';
import {Route} from "react-router-dom";
import HomePage from "pages/HomePage";
import TopNavigation from "components/TopNavigation";
import Switch from "react-bootstrap/esm/Switch";
import EmptyPage from "components/EmptyPage";
import {useUser} from "contexts/UserContext";
import {userData} from "data"
import Spinner from "components/Spinner"



const AnimalsPage = lazy(() => import("pages/AnimalsPage"));
const BlogPage = lazy(() => import("pages/BlogPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));

function App() {
  const user = userData[1];

  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  );
}

export default App;
