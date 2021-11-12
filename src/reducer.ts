const initialState = {
  count: 0,
};

export function reducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}
