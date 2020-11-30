import React, {useState, lazy, Suspense} from "react";
import {Route} from "react-router-dom";
import HomePage from "pages/HomePage";
import TopNavigation from "components/TopNavigation";
import Switch from "react-bootstrap/esm/Switch";
import {useUser} from "contexts/UserContext";
import Spinner from "components/Spinner";
import RegisterPage from "pages/RegisterPage";
import {MdClose} from "react-icons/md";

const AnimalsPage = lazy(() => import("pages/AnimalsPage"));
const BlogPage = lazy(() => import("pages/BlogPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));

function App() {
  const [message, setMessage] = useState("");
  const [user] = useUser();
  return (
    <Suspense fallback={<Spinner />}>
      <TopNavigation />
      {message && (
        <div className="alert-info">
          <MdClose onClick={() => setMessage("")} />
          {message}
        </div>
      )}
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
        <Route path="/register">
          <RegisterPage setMessage={setMessage} />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
