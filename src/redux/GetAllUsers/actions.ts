import { User } from "../../components/GetAllUsers";
import { AnyAction } from "redux";
import { Dispatch } from "react";
import axios from 'axios';

export function itemsHasError(bool : boolean) {
    return {
        type: 'ITEMS_HAS_ERROR',
        hasError: bool
    };
}

export function itemsIsLoading(bool : boolean) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsAxiosDataSuccess(items : User[] ) {
    return {
        type: 'ITEMS_AXIOS_DATA_SUCCESS',
        items
    };
}

export function itemsAxiosData(url : string) {
    return (dispatch: Dispatch<AnyAction>) => {
        dispatch(itemsIsLoading(true));

        axios(url)
            .then((response :any ) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                 dispatch(itemsHasError(false));
                 dispatch(itemsIsLoading(false));

                return response.data;
            })
            .then((items) => dispatch(itemsAxiosDataSuccess(items)))
            .catch((error) => {
                console.log(error);
                dispatch(itemsHasError(true))
            });
    };
}