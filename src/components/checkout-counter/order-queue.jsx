import React, { useState, useEffect } from 'react';

import { wait } from '~/utils/promise-helpers';
import PhysicalFood from './physical-food';

const DEBUG = false;

export default function OrderQueue({ cart, claim }) {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    if (!claim) {
      return;
    }

    for (let value of orderSequence(cart)) {
      setItems(prevItems => [...prevItems, value]);
      await wait(600);
    }
  }, [claim]);

  return items;
}

function* orderSequence(cart) {
  const items = Object.values(cart).flatMap(({ name, quantity, physics }) =>
    Array.from({ length: quantity }, (_, i) => (
      <PhysicalFood key={`${name}_${i}`} debug={DEBUG} {...physics} />
    ))
  );

  for (let i = 0; i <= items.length; i++) {
    yield items[i];
  }
}
