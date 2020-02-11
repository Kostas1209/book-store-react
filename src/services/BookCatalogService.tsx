import axios from "axios";

export function getBooks () {
    return axios.get( `${process.env.REACT_APP_API_URL}/api/book_catalog/`)
};