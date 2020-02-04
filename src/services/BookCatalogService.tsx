export function getBooks () {
    return fetch( `${process.env.REACT_APP_API_URL}/api/book_catalog/`)
};