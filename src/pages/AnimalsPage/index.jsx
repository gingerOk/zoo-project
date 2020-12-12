import {useEffect, useState} from "react";
import {Route, withRouter, Redirect, useLocation} from "react-router-dom";
import {BsChevronDoubleDown} from "react-icons/bs";
import PostForm from "pages/AnimalsPage/components/PostForm";
import AnimalsList from "pages/AnimalsPage/components/AnimalsList";
import AnimalPage from "pages/AnimalsPage/components/AnimalPage";
import Spinner from "components/Spinner";
import SearchInput from "components/SearchInput";
import {useAnimals, loadAnimals} from "contexts/AnimalsContext";
import {BsSearch} from "react-icons/bs";

const AnimalsPage = props => {
  const [{animals, loading}, dispatch] = useAnimals();
  const [results, setResults] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const location = useLocation();

  const handleChange = e => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    if (!searchItem) {
      loadAnimals(dispatch);
    }
  }, [dispatch, searchItem]);

  useEffect(() => {
    if (searchItem) {
      const results = animals.filter(person =>
        person.name.toLowerCase().includes(searchItem),
      );
      setResults(results);
    }
  }, [animals, searchItem]);

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
            <div className="col-lg-3 d-block mx-auto my-3">
              <div className="row">
                <div className="col-1 pr-1">
                  <BsSearch size={35} />
                </div>
                <div className="col-11 pl-0">
                  <SearchInput
                    searchItem={searchItem}
                    handleChange={handleChange}
                  />
                </div>
              </div>
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
            {loading ? (
              <Spinner />
            ) : (
              <AnimalsList animals={searchItem ? results : animals} />
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default withRouter(AnimalsPage);
