const initialState = [{ text: 'Мой первый пост', id: 0 }];

let kayCounter = 1;
const createNewKey = () => {
  return kayCounter++;
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POSTS':
      return [{ text: action.payload, id: createNewKey() }, ...state];
    case 'DELETE_POSTS':
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};

export default posts;
