const initialState = [];

const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE_FRIEND':
      const search = state.find((el) => el.id === action.payload.id);
      return search
        ? [
            {
              name: search.name,
              id: search.id,
              text: [...search.text, action.payload.text],
            },
            ...state.filter((el) => el.id !== action.payload.id),
          ]
        : [
            {
              name: action.payload.name,
              id: action.payload.id,
              text: [action.payload.text],
            },
            ...state,
          ];
    default:
      return state;
  }
};

export default messages;
