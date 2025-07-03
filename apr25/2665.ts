type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let number = init;
  return {
    increment: () => {
      number++;
      return number;
    },
    decrement: () => {
      number--;
      return number;
    },
    reset: () => {
      number = init;
      return number;
    },
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */