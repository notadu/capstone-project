const timeReducer = (
  state: string[],
  action: { type: "SET_DATE_TIMES"; payload: string[] },
) => {
  switch (action.type) {
    case "SET_DATE_TIMES":
      return action.payload ?? [];
    default:
      return state;
  }
};

export default timeReducer;
