const clearTokens = () => {
  const storages = [localStorage, sessionStorage];
  const keysToClear = ['accessToken', 'refreshToken'];

  storages.reduce((_, storage) => {
    keysToClear.map((key) => storage.removeItem(key));
    return _;
  }, undefined);
};

export default clearTokens;
