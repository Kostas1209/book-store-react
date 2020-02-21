import axios from "axios";

export function getBooks (pageNumber : number) {
    return axios.get( `${process.env.REACT_APP_API_URL}/api/books/${pageNumber}`)
};