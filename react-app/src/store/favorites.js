// Action Types
const ADD_FAV = "ADD_FAVORITE"
const SET_FAVORITE = 'favorite/setFavorite'
const REMOVE_FAVORITE = 'favorite/removeFavorite'


// Action Creators

 const addFav = (favorites) =>({
   type: ADD_FAV,
   favorites
 });

 const setFavorite = (favorite) => ({
  type: SET_FAVORITE,
  favorite
})
 const removeFavorite = () => ({
  type: REMOVE_FAVORITE,
})


 // Thunks
 export const getFavorite = () => async(dispatch) => {
  const res = await fetch('/api/favorites/')
  const data = await res.json()
  dispatch(setFavorite(data.favorite))
  return res
}





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



  export const deleteFavorite = () => async (dispatch) => {
    const res = await fetch('/api/favorites/', {
      method: 'DELETE',
    })
    dispatch(removeFavorite())
    return res
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
          case SET_FAVORITE:
            newState = {}
            action.favorite.forEach(item => {
              newState[item.id] = item
            })
            return newState;
          case REMOVE_FAVORITE:
            return {...state, favorite: null }
          default:
          return state


    }
}

export default FavoritesReducer
