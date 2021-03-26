// Action Types
const ADD_FAV = "ADD_FAVORITE"
const GET_FAVORITE = "GET_FAVORITE"


// Action Creators

 const addFav = (favorites) =>({
   type: ADD_FAV,
   favorites
 });

 const getFavorite = (favorites) =>({
   type: GET_FAVORITE,
   favorites
 })


 // Thunks

 export const createFavorites = (favoriteObject) => async (dispatch) => {

    const response = await fetch('/api/favorites/', {
     method: "POST",
      headers: {
         'Content-Type': 'application/json'
       },
      body: JSON.stringify(favoriteObject),
     });
     if (response.ok) {

      const data = await response.json();
      dispatch(addFav(data));
  }

  return response;
  }


  // export const getFavorites = () => async (dispatch) => {

  //   const response = await fetch('/api/favorites/')
  //   if (response.ok) {
  //     const res = await response.json();
  //     dispatch(getFavorite(res.favorite));
  // }

  // return response;

  // };


  // Reducer Creators


  const initialState = {}
  const FavoritesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_FAV:
          newState = JSON.parse(JSON.stringify(state))
          newState[action.favorites.id] = action.favorites
          return newState
        default:
          return state

    }
}

export default FavoritesReducer
