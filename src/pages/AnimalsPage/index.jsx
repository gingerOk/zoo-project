import {useEffect, useState} from "react";
import {Route, withRouter, Redirect} from "react-router-dom";
import _find from "lodash/find";
import { prop, sort, ascend, descend } from "ramda";
import {BsChevronDoubleDown} from "react-icons/bs";
//import animalsData from "../../data"
import {Link} from "react-router-dom";
import AddBtn from "../../components/AddBtn";
import PostForm from "../../components/PostForm";
import AnimalsList from "./components/AnimalsList";
import Spinner from "../../components/Spinner";
import AnimalsContext from "../../contexts/AnimalsContext";
import axios from "axios"
import {animals as animalsApi} from "../../api"

const AnimalsPage = (props) => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);

// const url = "https://my-json-server.typicode.com/gingerOk/zoo-project/animals"
//   axios.get(url)
//   .then((response) => {
//     console.log("ss",response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   });

animalsApi.fetchAll()
            .then(animalsData => setAnimals(sortAnimals(animalsData)))

  function sortAnimals(animals) {
    return sort(ascend(prop("name")), animals);
  }
// const addAnimal = animalData => animalsData.create(animalData)
//         .then(animal => setAnimals(sortAnimals([...animals, animal])
//         ));

// const updateAnimal = animalData => animalsData.update(animalData).then(animal => setAnimals(sortAnimals(animals.map(f => (f.id === animal.id ? animal : f)))
//       ));
  
//   const saveItem = animal => (animal.id ? updateAnimal(animal) : addAnimal(animal));

//   const deleteAnimal = animal => animalsData.delete(animal).then(() => setAnimals(animal => setAnimals(sortAnimals(animals.map(f => (f.id !== animal.id ? animal : f))))))

const saveItem = item => {}
const deleteAnimal = item => {}
  const handleClick = e => {};

  const cols = props.location.pathname === "/animals" ? "col" : "col-md-6";

  return (
    <AnimalsContext.Provider value={animals}>
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
              <PostForm item={{}} saveItem={saveItem} />
            </Route>
            <Route
              path="/animals/edit/:_id"
              render={({match}) => (
                <PostForm
                  saveItem={saveItem}
                  film={_find(animals, {id: match.params.id}) || {}}
                />
              )}
            />
          </div>
        ) : (
          // <AddBtn text="Add Card" handleClick={handleClick} />
          <Redirect to="/animals" />
        )}
        
       <div className={cols}>{loading ?" <Spinner />" : <AnimalsList animals={animals} deleteAnimal={deleteAnimal} />}</div></div>
   </AnimalsContext.Provider>
  );
};
export default withRouter(AnimalsPage);
