import data from '../data/items';

//#region Actions
const LOAD = 'inventory/LOAD';
const ADD_UNIT = 'inventory/ADD_UNIT';
const REMOVE_UNIT = 'inventory/REMOVE_UNIT';
//#endregion

export const initialState = { items: {}, error: null };

//#region Reducer
export function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD:
      return handleLoad();
    case ADD_UNIT:
      return handleAddUnit(state, action);
    case REMOVE_UNIT:
      return handleRemoveUnit(state, action);
    default:
      return state;
  }
}
//#endregion

//#region Action Creators
export function load() {
  return { type: LOAD };
}

export function addStock(name) {
  return { type: ADD_UNIT, name };
}

export function removeStock(name) {
  return { type: REMOVE_UNIT, name };
}
//#endregion

//#region Action Logic
function handleLoad() {
  return {
    error: null,
    items: data.reduce((map, item) => {
      map[item.name] = {
        name: item.name,
        unitPrice: item.unitPrice,
        units: item.units,
        view: {
          model: item.view.model,
          position: item.view.position,
          scale: item.view.scale,
          rotation: item.view.rotation,
        },
      };
      return map;
    }, {}),
  };
}

function handleAddUnit(state, { name }) {
  const item = state.items[name];

  return {
    error: null,
    items: {
      // Copy over unmodified items
      ...state.items,

      // Overwrite specific item
      [name]: {
        // Copy over unmodified properties
        ...item,

        // Commit the stock update
        units: item.units + 1,
      },
    },
  };
}

function handleRemoveUnit(state, { name }) {
  const item = state.items[name];

  const draftUnits = item.units - 1;

  if (draftUnits < 0) {
    return {
      // Copy over everything
      ...state,

      // Add error message
      error: {
        msg: `${name} is out of stock.`,
      },
    };
  }

  return {
    error: null,
    items: {
      // Copy over unmodified items
      ...state.items,

      // Overwrite specific item
      [name]: {
        // Copy over unmodified properties
        ...item,

        // Commit the stock update
        units: draftUnits,
      },
    },
  };
}
//#endregion
