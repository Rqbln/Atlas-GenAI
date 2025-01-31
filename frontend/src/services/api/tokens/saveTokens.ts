const saveTokens = (
  tokens: { accessToken: string; sessionToken?: string; refreshToken?: string },
  keepLogged = false,
) => {
  const savedInLocalStorage = 'accessToken' in localStorage;
  const storage = savedInLocalStorage || keepLogged ? localStorage : sessionStorage;

  Object.keys(tokens).reduce((_, key) => {
    const value = tokens[key as keyof typeof tokens];
    if (value) storage.setItem(key, value);
    return _;
  }, undefined);
};

export default saveTokens;
