export const util = {
  deHash(hash: string) {
    if (hash.substring(0, 1) === '#') {
      hash = hash.substring(1);
    }
    if (empty(hash)) {
      return {};
    } else {
      return hash.split('&').reduce(
        (res, h) => {
          const pos = h.indexOf('=');
          if (pos === -1) {
            res[h] = '';
          } else {
            res[h.substring(0, pos)] = h.substring(pos + 1);
          }
          return res;
        },
        {} as { [k: string]: string }
      );
    }
  },
};

export default util;
