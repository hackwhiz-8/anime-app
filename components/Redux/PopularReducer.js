

const initialState = [];

export const Popular_reducer = (state = initialState, action) => {
  return [
    ...state,
    action.data
  ]
}