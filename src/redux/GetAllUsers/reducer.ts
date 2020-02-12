export function itemsHasError(state = false, action : any) {
    switch (action.type) {
        case 'ITEMS_HAS_ERROR':
            return action.hasError
        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action : any) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading
            

        default:
            return state;
    }
}

export function items(state = [], action :any) {
    switch (action.type) {
        case 'ITEMS_AXIOS_DATA_SUCCESS':
            return action.items
            

        default:
            return state;
    }
}