import {useEffect} from "react";
import {Route, withRouter, Redirect, useLocation} from "react-router-dom";
import {BsChevronDoubleDown} from "react-icons/bs";
import PostForm from "pages/AnimalsPage/components/PostForm";
import AnimalsList from "pages/AnimalsPage/components/AnimalsList";
import AnimalPage from "pages/AnimalsPage/components/AnimalPage";

import Spinner from "components/Spinner";
import {useAnimals, loadAnimals} from "contexts/AnimalsContext";

const AnimalsPage = props => {
  const [{animals, loading}, dispatch] = useAnimals();
  const location = useLocation();

  useEffect(() => {
    loadAnimals(dispatch);
  }, [dispatch]);

  const cols = location.pathname === "/animals" ? "col" : "col-md-6";
  return (
    <div>
      <div className="row">
        <div className="col text-center">
          <div className="header">
            <h2 className="mt-4">
              <p>ANIMALS</p>
            </h2>
          </div>
          <div className="header_icon my-4">
            <BsChevronDoubleDown size={36} />
          </div>
        </div>
      </div>
      <div className="row">
        {location.pathname !== "/animals" ? (
          <div className="col-md-6">
            <Route path="/animals/:id">
              <AnimalPage />
            </Route>
          </div>
        ) : (
          ""
        )}
        {props.user.token && props.user.role === "user" ? (
          <div className={cols !== "col" ? "col-md-5" : ""}>
            <Route path="/animals/new">
              <PostForm />
            </Route>
            <Route path="/animals/edit/:id">
              <PostForm />
            </Route>
          </div>
        ) : (
          <Redirect to="/animals" />
        )}
        <div className={cols}>
          {loading ? <Spinner /> : <AnimalsList animals={animals} />}
        </div>
      </div>
    </div>
  );
};
export default withRouter(AnimalsPage);
