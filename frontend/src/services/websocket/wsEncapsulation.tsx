import getTokens from '@api/tokens/getTokens';
import ApiURL from '@utils/ApiURL.json';

const { WS_URL } = ApiURL;

const initWs = async (scopes: string[]): Promise<WebSocket> => {
  const ws = new WebSocket(WS_URL);
  if (!ws) {
    throw new Error('WebSocket not initialized');
  }

  const { accessToken } = getTokens();

  return new Promise((resolve, reject) => {
    ws.onopen = () => {
      ws.send(JSON.stringify({ action: '/WS/auth', Authorization: `Bearer ${accessToken}`, scopes }));
      resolve(ws);
    };
    ws.onerror = (error) => {
      reject(error);
    };
  });
};

export default initWs;
