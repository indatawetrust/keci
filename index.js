const deep = require('deep-get-set');

const setIn = function(array, selector, keys, replacement) {
  if (!replacement) {
    replacement = keys;
    keys = selector;
    selector = array;
    array = this;
  }

  const self = array.slice();

  for (let index = 0; index < self.length; index++) {
    const item = self[index];
    let is = false;

    for (const key in selector) {
      if (item[key] === selector[key]) {
        is = true;
        break;
      }
    }

    if (is) {
      deep(self[index], keys, replacement);

      break;
    }
  }
};

const getIn = function(array, selector) {
  if (!selector) {
    selector = array;
    array = this;
  }

  const self = array.slice();

  for (let index = 0; index < self.length; index++) {
    const item = self[index];
    let is = false;

    for (const key in selector) {
      if (item[key] === selector[key]) {
        is = true;
        break;
      }
    }

    if (is) {
      return self[index];

      break;
    }
  }
};

const filterIn = function(array, selector) {
  if (!selector) {
    selector = array;
    array = this;
  }

  const self = array.slice();

  return self.filter(item => {
    let is = false;

    for (const key in selector) {
      if (item[key] === selector[key]) {
        is = true;
        break;
      }
    }

    return is;
  });
};

const updateIn = function(array, selector, replacement) {
  if (!replacement) {
    replacement = selector;
    selector = array;
    array = this;
  }

  const self = array.slice();

  for (let index = 0; index < self.length; index++) {
    let item = self[index];
    let is = false;

    for (const key in selector) {
      if (item[key] === selector[key]) {
        item = Object.assign(item, replacement);
        is = true;
        break;
      }
    }

    if (is) {
      array.splice(index, 1, item);
      break;
    }
  }
};

const deleteIn = function(array, selector) {
  if (!selector) {
    selector = array;
    array = this;
  }

  const self = array.slice();

  for (let index = 0; index < self.length; index++) {
    const item = self[index];
    let is = false;

    for (const key in selector) {
      if (item[key] === selector[key]) {
        is = true;
        break;
      }
    }

    if (is) {
      array.splice(index, 1);
      break;
    }
  }
};

module.exports = {
  setIn: setIn,
  getIn: getIn,
  filterIn: filterIn,
  updateIn: updateIn,
  deleteIn: deleteIn,
};
