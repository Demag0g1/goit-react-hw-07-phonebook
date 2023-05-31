import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./contactsSlice.js"


axios.defaults.baseURL = "https://6475a363e607ba4797dc38d4.mockapi.io";


export const fetchContacts = () => async dispatch => {
    try {
        dispatch(fetchingInProgress());
        const response = await axios.get("/contacts");
        dispatch(fetchingSuccess(response.data));
    } catch (e) {
        dispatch(fetchingError(e.message));
    }
  };

