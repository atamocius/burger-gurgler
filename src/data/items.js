import * as m from '../components/models';

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
        mass: 1,
        collider: 'cylinder',
        colliderArgs: [0.65, 0.69, 1.05],
        modelScale: 4,
        modelPosition: [0, -0.54, 0],
      },
    },
  },
  {
    name: 'Double Burger',
    unitPrice: 4999,
    units: 1,
    view: {
      model: m.BurgerDouble,
      position: [0, -0.25, 0],
      scale: 1.7,
      rotation: [Math.PI * 0.05, Math.PI * 0.3, Math.PI * 0.02],
      physics: {
        mass: 1,
        collider: 'cylinder',
        colliderArgs: [0.65, 0.69, 1.33],
        modelScale: 4,
        modelPosition: [0, -0.68, 0],
      },
    },
  },
  {
    name: 'Pizza',
    unitPrice: 9999,
    units: 10,
    view: {
      model: m.Pizza,
      physics: {
        mass: 1,
        collider: 'cylinder',
        colliderArgs: [1.68, 1.68, 0.16],
        modelScale: 4,
        modelPosition: [0, -0.09, 0],
      },
    },
  },
  {
    name: 'Taco',
    unitPrice: 1999,
    units: 10,
    view: {
      model: m.Taco,
      position: [0, -0.08, 0],
      scale: 1.5,
      rotation: [Math.PI * 0.3, Math.PI * 0.35, Math.PI * 0.07],
      physics: {
        mass: 1,
        collider: 'box',
        colliderArgs: [1.45, 0.97, 0.45],
        modelScale: 4,
        modelPosition: [0, -0.5, 0],
      },
    },
  },
  {
    name: 'Cake',
    unitPrice: 19949,
    units: 10,
    view: {
      model: m.CakeBirthday,
      position: [0, -0.1, 0],
      physics: {
        mass: 1,
        collider: 'cylinder',
        colliderArgs: [1.27, 1.27, 1.0],
        modelScale: 4,
        modelPosition: [0, -0.52, 0],
      },
    },
  },
  {
    name: 'Donut',
    unitPrice: 949,
    units: 10,
    view: {
      model: m.DonutSprinkles,
      position: [0, -0.1, 0],
      scale: 2.5,
      rotation: [Math.PI * 0.1, Math.PI * 0.4, Math.PI * 0.07],
      physics: {
        mass: 1,
        collider: 'cylinder',
        colliderArgs: [0.5, 0.5, 0.33],
        modelScale: 4,
        modelPosition: [0, -0.18, 0],
      },
    },
  },
  {
    name: 'Mocha Frappe',
    unitPrice: 11999,
    units: 10,
    view: {
      model: m.Frappe,
      position: [0, -0.35, 0],
      scale: 1.4,
      rotation: [Math.PI * 0.1, Math.PI * -0.3, Math.PI * 0.02],
      physics: {
        mass: 1,
        collider: 'cylinder',
        colliderArgs: [0.43, 0.37, 1.45],
        modelScale: 4,
        modelPosition: [0, -0.74, 0],
      },
    },
  },
];
