// import ApiRoutes from '@enums/ApiRoutes';
// import getTokens from './getTokens';
// import saveTokens from './saveTokens';
// import clearTokens from './clearTokens';

// interface RefreshTokenResponse {
//   accessToken: string;
//   sessionToken: string;
//   refreshToken?: string;
// }

// const refreshToken = async (): Promise<{ accessToken: string; sessionToken: string } | null> => {
//   const { refreshToken } = getTokens();

//   if (!refreshToken) {
//     return null;
//   }
//   try {
//     const response = await fetchHandlerWithoutToken(ApiRoutes.POST_TOKEN_REFRESH, 'POST', {
//       body: { refreshToken },
//     });

//     if (!response.ok) {
//       clearTokens();
//       throw new Error('Failed to refresh tokens');
//     }
//     const tmp = response.data.data;
//     const data: RefreshTokenResponse = {
//       accessToken: tmp.accessToken,
//       sessionToken: tmp.sessionToken,
//     };

//     if (!data.accessToken || !data.sessionToken) {
//       clearTokens();
//       return null;
//     }

//     saveTokens(data);

//     return {
//       accessToken: data.accessToken,
//       sessionToken: data.sessionToken,
//     };
//   } catch (error) {
//     console.error('Error refreshing token:', error);
//     return null;
//   }
// };

// export default refreshToken;
