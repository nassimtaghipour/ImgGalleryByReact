const initialState = {
  currentImages: [],
};
const reducer = (state = initialState, action) => {
  if (action.type === "SaveImages") {

    return { ...state, currentImages:action.value } 
  
    // return {
    //   currentImages: action.value,
      
    // };
  }
  return state;
};
export default reducer;
