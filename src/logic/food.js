import data from '../data/items';

//#region Actions
const LOAD = 'food/LOAD';
const ADD_TO_CART = 'food/ADD_TO_CART';
const REMOVE_FROM_CART = 'food/REMOVE_FROM_CART';
//#endregion

export const initialState = { inventory: {}, cart: {}, error: null };

//#region Reducer
export function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD:
      return handleLoad();
    case ADD_TO_CART:
      return handleAddToCart(state, action);
    case REMOVE_FROM_CART:
      return handleRemoveFromCart(state, action);
    default:
      return state;
  }
}
//#endregion

//#region Action Creators
export function load() {
  return { type: LOAD };
}

export function addToCart(name) {
  return { type: ADD_TO_CART, name };
}

export function removeFromCart(name) {
  return { type: REMOVE_FROM_CART, name };
}
//#endregion

//#region Action Logic
function handleLoad() {
  return {
    error: null,
    cart: {},
    inventory: data.reduce((map, item) => {
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

function handleAddToCart(state, { name }) {
  const inventoryItem = state.inventory[name];
  const cartItem = state.cart[name] || {
    name,
    unitPrice: inventoryItem.unitPrice,
    quantity: 0,
    total: 0,
  };

  // Check if there is still stock available
  if (inventoryItem.units === 0) {
    return {
      // Copy over everything
      ...state,

      // Add error message
      error: {
        text: `${name} is out of stock.`,
      },
    };
  }

  return {
    error: null,
    inventory: {
      // Copy over unmodified items
      ...state.inventory,

      // Overwrite specific item
      [name]: {
        // Copy over unmodified properties
        ...inventoryItem,

        // Commit the stock update
        units: inventoryItem.units - 1,
      },
    },
    cart: {
      // Copy over unmodified items
      ...state.cart,

      // Overwrite specific item
      [name]: {
        // Copy over unmodified properties
        ...cartItem,

        // Commit the changes
        quantity: cartItem.quantity + 1,
        total: (cartItem.quantity + 1) * inventoryItem.unitPrice,
      },
    },
  };
}

function handleRemoveFromCart(state, { name }) {
  const inventoryItem = state.inventory[name];
  const cartItem = state.cart[name];

  if (!cartItem) {
    return {
      // Copy over everything
      ...state,

      // Add error message
      error: {
        text: `${name} is not in the cart.`,
      },
    };
  }

  if (cartItem.quantity === 1) {
    const { [name]: value, ...otherCartItems } = state.cart;
    return {
      error: null,
      inventory: {
        // Copy over unmodified items
        ...state.inventory,

        // Overwrite specific item
        [name]: {
          // Copy over unmodified properties
          ...inventoryItem,

          // Commit the stock update
          units: inventoryItem.units + 1,
        },
      },
      cart: {
        ...otherCartItems,
      },
    };
  }

  return {
    error: null,
    inventory: {
      // Copy over unmodified items
      ...state.inventory,

      // Overwrite specific item
      [name]: {
        // Copy over unmodified properties
        ...inventoryItem,

        // Commit the stock update
        units: inventoryItem.units + 1,
      },
    },
    cart: {
      // Copy over unmodified items
      ...state.cart,

      // Overwrite specific item
      [name]: {
        // Copy over unmodified properties
        ...cartItem,

        // Commit the changes
        quantity: cartItem.quantity - 1,
        total: (cartItem.quantity - 1) * inventoryItem.unitPrice,
      },
    },
  };
}
//#endregion
