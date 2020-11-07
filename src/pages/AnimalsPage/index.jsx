import {useEffect, useState} from "react";
import {Route, withRouter, Redirect, useLocation} from "react-router-dom";
import _find from "lodash/find";
import {prop, sort, ascend, descend} from "ramda";
import {BsChevronDoubleDown} from "react-icons/bs";
//import animalsData from "../../data"
import {Link} from "react-router-dom";
import AddBtn from "../../components/AddBtn";
import PostForm from "../../components/PostForm";
import AnimalsList from "./components/AnimalsList";
import Spinner from "../../components/Spinner";
import {useAnimals, loadAnimals} from "../../contexts/AnimalsContext";
import axios from "axios";
import {animals as animalsApi} from "../../api";

const AnimalsPage = props => {
  const [{animals, loading}, dispatch] = useAnimals();
  const location = useLocation();

  useEffect(() => {
    loadAnimals(dispatch);
  }, [dispatch]);

  const cols = props.location.pathname === "/animals" ? "col" : "col-md-6";

  return (
    <>
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
        {props.user.token && props.user.role === "admin" ? (
          <div className="col-md-5">
            <Route path="/animals/new">
              <PostForm />
            </Route>
            <Route path="/animals/edit/:id">
              <PostForm />
            </Route>
          </div>
        ) : (
          // <AddBtn text="Add Card" handleClick={handleClick} />
          <Redirect to="/animals" />
        )}
        <div className={cols}>
          {loading ? " <Spinner />" : <AnimalsList animals={animals} />}
        </div>
      </div>
    </>
  );
};
export default withRouter(AnimalsPage);
