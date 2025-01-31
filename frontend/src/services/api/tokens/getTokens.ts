const getTokens = () => {
  const savedInLocalStorage = 'accessToken' in localStorage;
  const storage = savedInLocalStorage ? localStorage : sessionStorage;
  const keysToRetrieve = ['accessToken', 'refreshToken'];

  const filteredEntries = Object.entries(storage).filter(([key, _]) => keysToRetrieve.includes(key));
  const tokensObject = Object.fromEntries(filteredEntries);

  return tokensObject;
};

export default getTokens;
