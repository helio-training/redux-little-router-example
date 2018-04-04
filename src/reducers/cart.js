import { ADD_TO_CART } from '../actions'

export default (state = [], action) => {

  switch (action.type) {
    case ADD_TO_CART :
      return [...state, { ...action.product, ...action.quantity }]
  }

  return state
}
