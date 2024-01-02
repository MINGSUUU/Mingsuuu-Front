import { AccessToken, RefreshToken } from './localStorage';

const getToken = () => {
  const accessToken = localStorage.getItem(AccessToken);
  const refreshToken = localStorage.getItem(RefreshToken);

  return { accessToken, refreshToken };
};

export default getToken;