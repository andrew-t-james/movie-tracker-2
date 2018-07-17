export const fetchInitialMovies = movies => ({
  type: 'FETCH_INITIAL_MOVIES',
  movies
});

export const userLogin = user => ({
  type: 'USER_LOGIN',
  id: user.id,
  name: user.name,
  loggedIn: user.loggedIn
});

export const userSignUp = newUserData => ({
  type: 'USER_SIGN_UP',
  id: newUserData.id
});

export const userSignOut = () => ({
  type: 'USER_SIGN_OUT'
});

export const clearUserFavorites = ( ) => ({
  type: 'CLEAR_USER_FAVORITES'
});

export const addFavorite = (movie, userId) => ({
  type: 'ADD_FAVORITE',
  favorite: movie,
  userId
});

export const addExistingFavorites = (existingUserFavorites) => {
  console.log(existingUserFavorites)
  return {
    type: 'ADD_EXISTING_FAVORITES',
    favorites : existingUserFavorites
  };
};