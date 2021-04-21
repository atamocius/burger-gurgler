import * as m from '~/components/models';

export default [
  {
    name: 'Burger',
    unitPrice: 2449,
    units: 10,
    view: {
      model: m.Burger,
      position: [0, -0.2, 0],
      scale: 1.7,
      rotation: [Math.PI * 0.05, Math.PI * 0.3, Math.PI * 0.02],
      physics: {
        collider: 'cylinder',
        colliderArgs: [0.65, 0.69, 1.05],
        modelPosition: [0, -0.54, 0],
      },
    },
  },
  {
    name: 'Double Burger',
    unitPrice: 4999,
    units: 10,
    view: {
      model: m.BurgerDouble,
      position: [0, -0.25, 0],
      scale: 1.7,
      rotation: [Math.PI * 0.05, Math.PI * 0.3, Math.PI * 0.02],
      physics: {
        collider: 'cylinder',
        colliderArgs: [0.65, 0.69, 1.33],
        modelPosition: [0, -0.68, 0],
      },
    },
  },
  {
    name: 'Hot Dog',
    unitPrice: 1949,
    units: 10,
    view: {
      model: m.HotDog,
      scale: 1.6,
      rotation: [Math.PI * 0.2, Math.PI * 0.34, Math.PI * 0.05],
      physics: {
        collider: 'cylinder',
        colliderArgs: [0.32, 0.32, 2.0],
        modelPosition: [0.33, 0, 0],
        modelRotation: [0, 0, Math.PI * 0.5],
      },
    },
  },
  {
    name: 'Pizza',
    unitPrice: 9999,
    units: 10,
    view: {
      model: m.Pizza,
      position: [0, 0.07, 0],
      scale: 1.1,
      rotation: [Math.PI * 0.2, Math.PI * 0.0, Math.PI * 0.07],
      physics: {
        collider: 'cylinder',
        colliderArgs: [1.68, 1.68, 0.16],
        modelPosition: [0, -0.09, 0],
      },
    },
  },
  {
    name: 'Fries',
    unitPrice: 1499,
    units: 10,
    view: {
      model: m.Fries,
      position: [0, -0.29, 0],
      scale: 1.6,
      rotation: [Math.PI * 0.0, Math.PI * 0.41, Math.PI * 0.09],
      physics: {
        collider: 'box',
        colliderArgs: [0.58, 1.15, 0.95],
        modelPosition: [0, -0.58, 0],
      },
    },
  },
  // {
  //   name: 'Taco',
  //   unitPrice: 1999,
  //   units: 10,
  //   view: {
  //     model: m.Taco,
  //     position: [0, -0.04, 0],
  //     scale: 1.5,
  //     rotation: [Math.PI * 0.3, Math.PI * 0.35, Math.PI * 0.07],
  //     physics: {
  //       collider: 'box',
  //       colliderArgs: [1.45, 0.97, 0.45],
  //       modelPosition: [0, -0.5, 0],
  //     },
  //   },
  // },
  // {
  //   name: 'Salad',
  //   unitPrice: 4999,
  //   units: 10,
  //   view: {
  //     model: m.Salad,
  //     position: [0, -0.08, 0],
  //     scale: 1.17,
  //     rotation: [Math.PI * 0.17, Math.PI * 0.4, Math.PI * 0.07],
  //     physics: {
  //       collider: 'cylinder',
  //       colliderArgs: [1.12, 0.82, 0.94],
  //       modelPosition: [0, -0.48, 0],
  //     },
  //   },
  // },
  // {
  //   name: 'Cake',
  //   unitPrice: 19949,
  //   units: 10,
  //   view: {
  //     model: m.CakeBirthday,
  //     position: [0, -0.1, 0],
  //     scale: 1.1,
  //     physics: {
  //       collider: 'cylinder',
  //       colliderArgs: [1.27, 1.27, 1.0],
  //       modelPosition: [0, -0.52, 0],
  //     },
  //   },
  // },
  {
    name: 'Donut',
    unitPrice: 949,
    units: 10,
    view: {
      model: m.DonutSprinkles,
      position: [0, -0.05, 0],
      scale: 2.5,
      rotation: [Math.PI * 0.17, Math.PI * 0.4, Math.PI * 0.07],
      physics: {
        collider: 'cylinder',
        colliderArgs: [0.5, 0.5, 0.33],
        modelPosition: [0, -0.18, 0],
      },
    },
  },
  {
    name: 'Sundae',
    unitPrice: 1999,
    units: 10,
    view: {
      model: m.Sundae,
      position: [0, -0.36, 0],
      scale: 1.1,
      rotation: [Math.PI * 0.05, Math.PI * 0.4, Math.PI * 0.07],
      physics: {
        collider: 'cylinder',
        colliderArgs: [0.4, 0.4, 2.2],
        modelPosition: [0, -1.1, 0],
      },
    },
  },
  // {
  //   name: 'Mocha Frappe',
  //   unitPrice: 11999,
  //   units: 10,
  //   view: {
  //     model: m.Frappe,
  //     position: [0, -0.35, 0],
  //     scale: 1.4,
  //     rotation: [Math.PI * 0.1, Math.PI * -0.3, Math.PI * 0.02],
  //     physics: {
  //       collider: 'cylinder',
  //       colliderArgs: [0.43, 0.37, 1.45],
  //       modelPosition: [0, -0.74, 0],
  //     },
  //   },
  // },
  {
    name: 'Soda',
    unitPrice: 1149,
    units: 10,
    view: {
      model: m.SodaCan,
      position: [0, -0.25, 0],
      scale: 1.6,
      rotation: [Math.PI * 0.1, Math.PI * 0.4, Math.PI * 0.07],
      physics: {
        collider: 'cylinder',
        colliderArgs: [0.43, 0.43, 1.32],
        modelPosition: [0, -0.66, 0],
      },
    },
  },
];
