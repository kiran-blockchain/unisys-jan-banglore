export const Counter = (state = { count: 0 }, action) => {
    console.log('Reducer called in Counter');
  switch (action.type) {
    case "INCREMENT":
       let counter = state.count;
      counter++;
      return { ...state, count:counter };
    case "DECREMENT":
            let dec = state.count;
            dec--;
      return { ...state, count: dec};
    default:
      return { ...state };
  }
};


export const CountryList = (state = { list: [] }, action) => {
    console.log('Reducer called in CountryList');
    switch (action.type) {
 
      default:
        return { ...state };
    }
  };
  