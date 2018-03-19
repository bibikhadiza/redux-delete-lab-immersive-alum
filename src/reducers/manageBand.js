var counter = 0;

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      counter++
      action.band["id"] = counter
      return { bands: state.bands.concat(action.band) }
    case 'DELETE_BAND':
      const newState = state.bands.filter(e => e.id !== action.id);
      return {bands: newState}
    default:
      return state;
  }
};
