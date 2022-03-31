import { SET_CURRENCY } from "./index"

export const selectCurrency = (currency) => {
    return {
        type: SET_CURRENCY,
        payload: currency
    }
}