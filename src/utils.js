const dominoes = [
  [6, 1],
  [4, 3],
  [5, 1],
  [3, 4],
  [1, 1],
  [3, 4],
  [1, 2],
];
export const sortAscending = (dominoes) => {
  return (sortAZ = [...dominoes].sort((a, b) => {
    const sumA = a[0] + a[1];
    const sumB = b[0] + b[1];
    if (sumA !== sumB) {
      return sumA - sumB;
    } else {
      return Math.min(...a) - Math.min(...b);
    }
  }));
};

export const sortDescending = (dominoes) => {
  return (sortZA = [...dominoes].sort((a, b) => {
    const sumA = a[0] + a[1];
    const sumB = b[0] + b[1];
    if (sumA !== sumB) {
      return sumB - sumA;
    } else {
      return Math.max(...b) - Math.max(...a);
    }
  }));
};

export const countDoubleNumber = (dominoes) => {
  const doubleNumber = dominoes.filter(([a, b]) => a === b).length;
  return doubleNumber;
};

export const flipDominoes = (dominoes) => {
  return dominoes.map(([a, b]) => [b, a]);
};

export const removeDuplicate = (dominoes) => {
  const seen = new Set();
  return dominoes.filter(([a, b]) => {
    const key = a < b ? `${a},${b}` : `${b},${a}`;
    if (seen.has(key)) {
      return false;
    }
    if (seen.add(key)) {
      return true;
    }
  });
};

export const resetToDefault = (defaultDominoes) => {
  return [...dominoes];
};
