import * as actionTypes from './actions';
import { getNextId, toggleButtons } from '../lib/helpers';

const initialState = {
  genre: null,
  subgenre: null,
  newSubgenre: null,
  subgenres: [],
  selectedDate: null,
  descriptionRequired: false,
  nextId: 0,
  nextStep: 4,
  buttonText: "...",
  modalShow: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_APP:
      return {
        ...initialState,
        nextId: getNextId()
      };

    case actionTypes.UPDATE_DATE:
      return {
        ...state,
        selectedDate: action.selectedDate
      };

    case actionTypes.SELECT_GENRE:
      toggleButtons(action.event);
      const subgenres = action.data.genres.find(genre => genre.id === action.genreId).subgenres;

      return {
        ...state,
        genre: action.genreId,
        subgenre: null,
        newSubgenre: null,
        buttonText: "...",
        subgenres: subgenres
      };

    case actionTypes.SELECT_SUBGENRE:
      toggleButtons(action.event);
      const descriptionRequired = action.data.genres.find(genre => genre.id === state.genre).subgenres.find(subgenre => subgenre.id === action.subgenreId).isDescriptionRequired;

      return {
        ...state,
        subgenre: action.subgenreId,
        nextStep: 4,
        buttonText: 3,
        newSubgenre: null,
        descriptionRequired
      };

    case actionTypes.NEXT_BUTTON_CLICK:
        return {
          ...state,
          newSubgenre: null
        };

    case actionTypes.SELECT_ADD_SUBGENRE:
      toggleButtons(action.event);

      return {
        ...state,
        newSubgenre: {
          id: null,
          name: "",
          isDescriptionRequired: false
        },
        nextStep: 3,
        buttonText: 4,
        subgenre: null
      };

    case actionTypes.SUBGENRE_FORM_CHANGE:
      const form = action.form;
      const input = form.newName;

      if (state.subgenres.map(e => e.name).includes(input.value)) {
        input.setCustomValidity("Subgenre already exists.");
        input.setAttribute("isvalid", "false");
      } else {
        input.setCustomValidity("");
        input.setAttribute("isvalid", "true");
      }

      return {
        ...state,
        newSubgenre: {
          id: state.nextId,
          name: input.value,
          isDescriptionRequired: form.description.checked
        },
      };

    case actionTypes.SUBGENRE_FORM_SUBMIT:
        return {
          ...state,
          subgenre: state.newSubgenre.id,
          nextId: state.nextId + 1,
          subgenres: action.subgenres,
          descriptionRequired: state.newSubgenre.isDescriptionRequired
        };

    case actionTypes.SHOW_MODAL:
        return {
          ...state,
          modalShow: true
        };

    default:
      return state;
  }
};

export default reducer;
