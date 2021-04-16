import * as m from '../components/models';

export default [
  {
    name: 'Burger',
    price: 2449,
    units: 10,
    view: {
      model: m.Burger,
      position: [0, -0.2, 0],
      scale: 1.7,
      rotation: [Math.PI * 0.05, Math.PI * 0.3, Math.PI * 0.0],
    },
  },
  {
    name: 'Double Burger',
    price: 4999,
    units: 10,
    view: {
      model: m.BurgerDouble,
      position: [0, -0.25, 0],
      scale: 1.7,
      rotation: [Math.PI * 0.05, Math.PI * 0.3, Math.PI * 0.0],
    },
  },
  {
    name: 'Pizza',
    price: 9999,
    units: 10,
    view: {
      model: m.Pizza,
    },
  },
  {
    name: 'Taco',
    price: 1999,
    units: 10,
    view: {
      model: m.Taco,
      position: [0, -0.08, 0],
      scale: 1.5,
      rotation: [Math.PI * 0.3, Math.PI * 0.35, Math.PI * 0.07],
    },
  },
  {
    name: 'Cake',
    price: 19949,
    units: 10,
    view: {
      model: m.CakeBirthday,
      position: [0, -0.1, 0],
    },
  },
  {
    name: 'Donut',
    price: 949,
    units: 10,
    view: {
      model: m.DonutSprinkles,
      position: [0, -0.1, 0],
      scale: 2.5,
      rotation: [Math.PI * 0.1, Math.PI * 0.4, Math.PI * 0.07],
    },
  },
  {
    name: 'Mocha Frappe',
    price: 11999,
    units: 10,
    view: {
      model: m.Frappe,
      position: [0, -0.35, 0],
      scale: 1.4,
      rotation: [Math.PI * 0.1, Math.PI * -0.3, Math.PI * 0.02],
    },
  },
];
