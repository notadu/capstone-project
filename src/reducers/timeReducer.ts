interface State {
  bookingDetails: {
    date: string;
    time: string[];
  };
}

type Action =
  | { type: "SET_DATE"; payload: string }
  | { type: "SET_TIMES"; payload: string[] };

const timeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_DATE":
      return {
        ...state,
        bookingDetails: {
          ...state.bookingDetails,
          date: action.payload,
        },
      };
    case "SET_TIMES":
      return {
        ...state,
        bookingDetails: {
          ...state.bookingDetails,
          time: action.payload,
        },
      };
    default:
      return state;
  }
};

export default timeReducer;
