import * as m from '../components/models';

export default [
  {
    name: 'Burger',
    model: m.Burger,
    position: [0, -0.2, 0],
    scale: 1.7,
    rotation: [Math.PI * 0.05, Math.PI * 0.3, Math.PI * 0.0],
  },
  {
    name: 'Double Burger',
    model: m.BurgerDouble,
    position: [0, -0.25, 0],
    scale: 1.7,
    rotation: [Math.PI * 0.05, Math.PI * 0.3, Math.PI * 0.0],
  },
  {
    name: 'Pizza',
    model: m.Pizza,
  },
  {
    name: 'Taco',
    model: m.Taco,
    position: [0, -0.08, 0],
    scale: 1.5,
    rotation: [Math.PI * 0.3, Math.PI * 0.35, Math.PI * 0.07],
  },
  {
    name: 'Cake',
    model: m.CakeBirthday,
    position: [0, -0.1, 0],
  },
  {
    name: 'Donut',
    model: m.DonutSprinkles,
    position: [0, -0.1, 0],
    scale: 2.5,
    rotation: [Math.PI * 0.1, Math.PI * 0.4, Math.PI * 0.07],
  },
  {
    name: 'Mocha Frappe',
    model: m.Frappe,
    position: [0, -0.35, 0],
    scale: 1.4,
    rotation: [Math.PI * 0.1, Math.PI * -0.3, Math.PI * 0.02],
  },
];
