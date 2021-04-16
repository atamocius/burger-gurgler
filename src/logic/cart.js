//#region Actions
const ADD_UNIT = 'cart/ADD_UNIT';
const REMOVE_UNIT = 'cart/REMOVE_UNIT';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const CLEAR = 'cart/CLEAR';
//#endregion

export const initialState = { items: [], error: null };

//#region Reducer
export function reducer(state = {}, action = {}) {
  switch (action.type) {
    case ADD_UNIT:
      return handleAddUnit(state, action);
    case REMOVE_UNIT:
      return handleRemoveUnit(state, action);
    case REMOVE_ITEM:
      return handleRemoveItem(state, action);
    case CLEAR:
      return handleClear();
    default:
      return state;
  }
}
//#endregion

//#region Action Creators
export function addUnit(name) {
  return { type: ADD_UNIT, name };
}

export function removeUnit(name) {
  return { type: REMOVE_UNIT, name };
}

export function clear() {
  return { type: CLEAR };
}
//#endregion

//#region Action Logic
function handleAddUnit(state, { name, price }) {
  const itemsCopy = state.items.slice();
  const matchIndex = itemsCopy.findIndex(i => i.name === name);

  if (matchIndex === -1) {
    // Add a new entry if the item has not yet been previously added
    itemsCopy.push({
      name,
      unitPrice,
      quantity: 1,
      total: price,
    });
  } else {
    // Just increase quantity and recalculate total if item already exists
    const matchedItem = itemsCopy[matchIndex];
    matchedItem.quantity++;
    matchedItem.total = matchedItem.quantity * matchedItem.unitPrice;
  }

  return {
    error: null,
    items: itemsCopy,
  };
}

function handleRemoveUnit(state, { name }) {
  const itemsCopy = state.items.slice();
  const matchIndex = itemsCopy.findIndex(i => i.name === name);

  if (matchIndex === -1) {
    return {
      // Copy over everything
      ...state,

      // Add error message
      error: {
        msg: `${name} is not in the cart.`,
      },
    };
  }

  const matchedItem = itemsCopy[matchIndex];

  const draftQuantity = matchedItem.quantity - 1;

  if (draftQuantity <= 0) {
    // Remove the entry if the quantity is going to be <= 0
    itemsCopy.splice(matchIndex, 1);
  } else {
    // Just decrease quantity and recalculate total
    matchedItem.quantity--;
    matchedItem.total = matchedItem.quantity * matchedItem.unitPrice;
  }

  return {
    error: null,
    items: itemsCopy,
  };
}

function handleRemoveItem(state, { name }) {
  const itemsCopy = state.items.slice();
  const matchIndex = itemsCopy.findIndex(i => i.name === name);

  if (matchIndex === -1) {
    return {
      // Copy over everything
      ...state,

      // Add error message
      error: {
        msg: `${name} is not in the cart.`,
      },
    };
  }

  itemsCopy.splice(matchIndex, 1);

  return {
    error: null,
    items: itemsCopy,
  };
}

function handleClear() {
  return {
    error: null,
    items: [],
  };
}
//#endregion
