const initialState = {
  people: [
    { name: 'Genard', id: 0 },
    { name: 'Vova', id: 1 },
    { name: 'Dor', id: 2 },
    { name: 'Kuan', id: 3 },
    { name: 'Khavazh', id: 4 },
    { name: 'Magamed', id: 5 },
  ],
  friends: [],
};

const friends = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      return {
        ...state,
        people: state.people.filter((el) => el.id !== action.payload.id),
        friends: [...state.friends, action.payload],
      };
    case 'DELETE_FRIEND':
      return {
        ...state,
        friends: state.friends.filter((el) => el.id !== action.payload.id),
        people: [...state.people, action.payload],
      };
    default:
      return state;
  }
};

export default friends;
