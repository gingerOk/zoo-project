import React, {createContext, useContext, useReducer} from "react";
import {prop, sort, ascend, descend} from "ramda";

const AnimalCoxtext = createContext();

export default AnimalCoxtext;

// const sortAnimals = animals =>
//   sort(ascend(prop("name")), animals);

// // const sortAnimals = animals =>
// //   sortWith([descend(prop("name")), ascend(prop("title"))], animals);

// const initState = {
//     animals: [],
//     loading: false,
//     error: null,
//   };

//   const animalsReducer = (state, action) => {
//     let newAnimal;
//     let idx;
//     switch (action.type) {
//       case "loadAnimals":
//         return {...state, animals: sortAnimals(action.animals)};
//       case "addAnimal":
//         newAnimal = [...state.animals];
//         newAnimal.push(action.animal);
//         return {...state, animals: sortAnimals(newAnimal)};
//       case "updateAnimal":
//         newAnimal = [...state.animals];
//         idx = state.films.findIndex(animal => animal.id === action.animal.id);
//         newAnimal[idx] = action.animal;
//         return {...state, animals: sortAnimals(newAnimal)};
//       case "deleteAnimal":
//         newAnimal = state.animals.filter(f => f.id !== action.animal.id);
//         return {...state, animals: sortAnimals(newAnimal)};
//       case "setError":
//         return {...state, error: action.error};
//       case "setLoading":
//         return {...state, loading: action.loading};
//       default:
//         throw Error("no found cases");
//     }
//   };
