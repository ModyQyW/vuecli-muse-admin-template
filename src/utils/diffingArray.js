// https://github.com/livoras/blog/issues/13
// edit distance / Levenshtein distanc
// https://en.wikipedia.org/wiki/Levenshtein_distance
// https://www.cnblogs.com/sumuncle/p/5632032.html

/**
 * judge if item is Array type
 * @param { Any } item
 * @returns { Boolean }
 */
const isArray = item => Object.prototype.toString.call(item).slice(8, -1) === 'Array';

/**
 * turn array into key-index object
 * @param { Array<Object{key,x,y,time}> } arr
 * @returns { Object<key, index> }
 */
const toKeyIndexObject = (arr) => {
  const obj = {};
  for (let i = 0, len = arr.length; i < len; i += 1) {
    const ele = arr[i];
    const { key } = ele;
    if (!key) {
      throw Error('ele has no key');
    }
    obj[key] = i;
  }
  return obj;
};

const addRemove = (moves, index) => {
  moves.push({ type: 0, index });
};

const addInsert = (moves, index, ele) => {
  moves.push({ type: 1, index, ele });
};

const addUpdate = (moves, index, ele) => {
  moves.push({ type: 2, index, ele });
};

const getMoves = (newData, oldData, ...rest) => {
  // 1. judge arguments
  if (rest.length !== 0 || !isArray(newData) || !isArray(oldData)) { throw new Error('call error'); }
  // 2. vars declare
  // len
  const oldLen = oldData.length;
  const newLen = newData.length;
  // new and old data key-index objects
  const newKeyIndexObj = toKeyIndexObject(newData);
  const oldKeyIndexObj = toKeyIndexObject(oldData);
  // array to save moves
  const moves = [];
  // array to simulate
  const sim = [];
  // tmp vars
  let i = 0;
  let j = 0;
  // 3. traversal oldData and found what is and isn't in newData
  while (i < oldLen) {
    const { key: eleKey } = oldData[i];
    if (Object.prototype.hasOwnProperty.call(newKeyIndexObj, eleKey)) {
      // newData has the same key
      // means this is a ele of both datas
      sim.push(oldData[oldKeyIndexObj[eleKey]]);
    } else {
      // newData doesn't have the same key
      // means this is not a ele of newData
      // sim.push(null);
      addRemove(moves, i);
    }
    i += 1;
  }
  // 4. simulate inserting and removing in order to match sim and newData
  // i: index of newData
  // j: index of sim
  i = 0;
  while (i < newLen) {
    const newEle = newData[i];
    const { key: newEleKey } = newEle;
    const simEle = sim[j];
    if (simEle) {
      const { key: simEleKey } = simEle;
      // sim boundary not exceed
      if (newEleKey === simEleKey) {
        // same ele => update, sim moves to next ele
        console.log('in1');
        addUpdate(moves, i, newEle);
        j += 1;
      } else if (!Object.prototype.hasOwnProperty.call(oldKeyIndexObj, newEleKey)) {
        // new ele => insert
        console.log('in2');
        addInsert(moves, i, newEle);
      } else if (sim[j + 1] && sim[j + 1].key === newEleKey) {
        // old ele, but not same position => check next ele in sim
        // if remove this ele make next ele in the right place => remove
        console.log('in3');
        addRemove(moves, i);
        addUpdate(moves, i, newEle);
        // j += 2 means moves to next ele
        j += 2;
      } else {
        console.log('in4');
        addInsert(moves, i, newEle);
      }
    } else {
      // sim boundary exceeded
      // left eles are all new => insert all left eles
      console.log('in5');
      addInsert(moves, i, newEle);
    }
    i += 1;
  }
  // if j is not sim's end
  // remove all left eles
  const simLen = sim.length;
  while (j < simLen) {
    console.log('in6');
    j += 1;
    addRemove(moves, simLen - j + i);
  }

  return moves;
};

const operate = (oldData, moves) => {
  const newData = oldData.slice();
  const len = moves.length;
  for (let i = 0; i < len; i += 1) {
    switch (moves[i].type) {
      case 0: newData.splice(moves[i].index, 1); break;
      case 1: newData.splice(moves[i].index, 0, moves[i].ele); break;
      case 2: Object.assign(newData[moves[i].index], moves[i].ele); break;
      default: throw new Error('invalid operation');
    }
  }
  return newData;
};

const arr1 = [
  {
    key: 'b',
    x: 0,
    y: 1,
  },
  {
    key: 'f',
    x: 2,
    y: 3,
  },
  {
    key: 'g',
    x: 3,
    y: 4,
  },
  {
    key: 'i',
    x: 4,
    y: 5,
  },
];

const arr2 = [
  {
    key: 'a',
    x: 0,
    y: 1,
  },
  {
    key: 'b',
    x: 1,
    y: 2,
  },
  {
    key: 'c',
    x: 2,
    y: 3,
  },
  {
    key: 'd',
    x: 3,
    y: 4,
  },
  {
    key: 'e',
    x: 4,
    y: 5,
  },
  {
    key: 'h',
    x: 5,
    y: 6,
  },
  {
    key: 'i',
    x: 6,
    y: 7,
  },
  {
    key: 'f',
    x: 7,
    y: 6,
  },
  {
    key: 'g',
    x: 7,
    y: 8,
  },
  {
    key: 'k',
    x: 9,
    y: 10,
  },
];

// const moves = getMoves(arr1, arr2);
// const newData = operate(arr2, moves);
const moves = getMoves(arr2, arr1);
const newData = operate(arr1, moves);

console.log('moves', moves);
console.log('newData', newData);
