//#region Actions
const ADD_UNIT = 'cart/ADD_UNIT';
const REMOVE_UNIT = 'cart/REMOVE_UNIT';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const CLEAR = 'cart/CLEAR';
//#endregion

export const initialState = { items: {}, error: null };

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
export function addUnit(name, unitPrice) {
  return { type: ADD_UNIT, name, unitPrice };
}

export function removeUnit(name) {
  return { type: REMOVE_UNIT, name };
}

export function removeItem(name) {
  return { type: REMOVE_ITEM, name };
}

export function clear() {
  return { type: CLEAR };
}
//#endregion

//#region Action Logic
function handleAddUnit(state, { name, unitPrice }) {
  const item = state.items[name];

  if (item) {
    // Just increase quantity and recalculate total if item already exists
    const q = item.quantity + 1;
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
          quantity: q,
          total: q * item.unitPrice,
        },
      },
    };
  }

  // Add a new entry if the item has not yet been previously added
  return {
    error: null,
    items: {
      // Copy over unmodified items
      ...state.items,

      // Overwrite specific item
      [name]: {
        name,
        unitPrice,
        quantity: 1,
        total: unitPrice,
      },
    },
  };
}

function handleRemoveUnit(state, { name }) {
  const item = state.items[name];

  if (!item) {
    return {
      // Copy over everything
      ...state,

      // Add error message
      error: {
        msg: `${name} is not in the cart.`,
      },
    };
  }

  const draftQuantity = item.quantity - 1;

  if (draftQuantity <= 0) {
    const { [name]: value, ...otherItems } = state.items;
    // Remove the entry if the quantity is going to be <= 0
    return {
      error: null,
      items: {
        ...otherItems,
      },
    };
  } else {
    // Just decrease quantity and recalculate total
    return {
      error: null,
      items: {
        // Copy over unmodified items
        ...state.items,

        // Overwrite specific item
        [name]: {
          // Copy over unmodified properties
          ...item,

          // Commit the quantity update
          quantity: draftQuantity,
          total: draftQuantity * item.unitPrice,
        },
      },
    };
  }
}

function handleRemoveItem(state, { name }) {
  const item = state.items[name];

  if (!item) {
    return {
      // Copy over everything
      ...state,

      // Add error message
      error: {
        msg: `${name} is not in the cart.`,
      },
    };
  }

  const { [name]: value, ...otherItems } = state.items;
  // Remove the entry if the quantity is going to be <= 0
  return {
    error: null,
    items: {
      ...otherItems,
    },
  };
}

function handleClear() {
  return {
    error: null,
    items: [],
  };
}
//#endregion
