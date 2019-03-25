import { isArray } from './utils';

// https://github.com/livoras/blog/issues/13
const diff = (newData, oldData, ...rest) => {
  if (rest.length !== 0 || !isArray(newData) || !isArray(oldData)) { throw new Error('call error'); }
  // edit distance / Levenshtein distanc
  // https://en.wikipedia.org/wiki/Levenshtein_distance
  // https://www.cnblogs.com/sumuncle/p/5632032.html
};

export default diff;
