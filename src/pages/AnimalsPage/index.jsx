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

  const cols = location.pathname === "/animals" ? "col" : "col-md-4";
  return (
    <div>
      {location.pathname !== "/animals" &&
      !location.pathname.includes("/animals/edit") &&
      !location.pathname.includes("/animals/new") ? (
        <div className="row">
          <div className="col">
            <Route path="/animals/:id">
              <AnimalPage />
            </Route>
          </div>
        </div>
      ) : (
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
      )}
      <div className="row">
        {props.user.token && props.user.role === "admin" ? (
          <div className={cols !== "col" ? "col-md-7" : ""}>
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
        {location.pathname === "/animals" ||
        location.pathname.includes("/animals/edit") ||
        location.pathname.includes("/animals/new") ? (
          <div className={cols}>
            {loading ? <Spinner /> : <AnimalsList animals={animals} />}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default withRouter(AnimalsPage);
