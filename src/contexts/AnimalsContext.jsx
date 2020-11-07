import React, {createContext, useContext, useReducer} from "react";
import {prop, sort, ascend} from "ramda";
import {animals as animalsApi} from "../api";


const AnimalCoxtext = createContext();

const initState = {
    animals: [],
    loading: false,
    error: null,
  };

const animalsReducer = (state, action) => {
    let newAnimals;
    let idx;
    switch (action.type) {
        case "loadAnimals":
            return {...state, animals: sortAnimals(action.animals)};
        case "addAnimal":
            newAnimals = [...state.animals];
            newAnimals.push(action.animal)
            return {...state, animals: sortAnimals(newAnimals)};
        case "updateAnimal":
            newAnimals = [...state.animals];
            idx = state.animals.findIndex(animal => animal.id === action.animal.id);
            newAnimals[idx] = action.animal;
            return {...state, animals: sortAnimals(newAnimals)};
        case "deleteAnimal":
            newAnimals = state.animals.filter(a => a.id !== action.animal.id);
            return {...state, animals: sortAnimals(newAnimals)};
        case "setError": 
            return {...state, error: action.error};
        case "setLoading":
            return {...state, loading: action.loading};
        default:
            throw Error("no found cases")
    }
}

const sortAnimals = animals =>
  sort(ascend(prop("name")), animals);

export function AnimalsProvider(props) {
    const [state, dispatch] = useReducer(animalsReducer, initState);
    const value = [state, dispatch];
    return <AnimalCoxtext.Provider value={value} {...props} />
}

export function useAnimals() {
    const context = useContext(AnimalCoxtext);
    if (!context) throw Error("useAnimals must be render within AnimalContext");
  return context;
}

export const loadAnimals = dispatch => {
    animalsApi.fetchAll().then(animals => dispatch({type: "loadAnimals", animals}));
}

export const addAnimal = (dispatch, animalData) => {
    return animalsApi.create(animalData).then(animal => dispatch({type: "addAnimal", animal}));
}

export const updateAnimal = (dispatch, animalData) =>{
    return animalsApi.update(animalData).then(animal => dispatch({type: "updateAnimal", animal}));
}

export const saveAnimal = (dispatch, animal) => {
    return animal.id ? updateAnimal(dispatch, animal) : addAnimal(dispatch, animal)
}

export const deleteAnimal = (dispatch, animal) => {
    animalsApi.delete(animal).then(() => dispatch({type: "deleetAnimal", animal}))
}

export default AnimalCoxtext;



