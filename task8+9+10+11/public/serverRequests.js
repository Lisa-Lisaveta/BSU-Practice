const serverReq = (function () {
  return {
    get(path, params) {
      let fullPath;
      if (params && Object.keys(params).length !== 0) {
        fullPath = path + '?' + Object.keys(params)
          .filter(element => typeof params[element] !== 'undefined')
          .reduce((accumulator, element, index) => accumulator + (index === 0 ? '' : '&') + element + '=' + params[element], '');
      } else {
        fullPath = path;
      }
      return fetch(fullPath, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      });
    },

    post(path, params, reqBody) {
      let fullPath;
      if (params && Object.keys(params).length !== 0) {
        fullPath = path + '?' + Object.keys(params)
          .filter(element => typeof params[element] !== 'undefined')
          .reduce((accumulator, element, index) => accumulator + (index === 0 ? '' : '&') + element + '=' + params[element], '');
      } else {
        fullPath = path;
      }
      return fetch(fullPath, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: reqBody ? JSON.stringify(reqBody) : reqBody,
      });
    },

    put(path, params, reqBody) {
      let fullPath;
      if (params && Object.keys(params).length !== 0) {
        fullPath = path + '?' + Object.keys(params)
          .filter(element => typeof params[element] !== 'undefined')
          .reduce((accumulator, element, index) => accumulator + (index === 0 ? '' : '&') + element + '=' + params[element], '');
      } else {
        fullPath = path;
      }
      return fetch(fullPath, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: reqBody ? JSON.stringify(reqBody) : reqBody,
      });
    },

    delete(path, params) {
      let fullPath;
      if (params && Object.keys(params).length !== 0) {
        fullPath = path + '?' + Object.keys(params)
          .filter(element => typeof params[element] !== 'undefined')
          .reduce((accumulator, element, index) => accumulator + (index === 0 ? '' : '&') + element + '=' + params[element], '');
      } else {
        fullPath = path;
      }
      return fetch(fullPath, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' },
      });
    },
  };
}());
