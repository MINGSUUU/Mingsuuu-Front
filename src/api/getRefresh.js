// import { TokenReissue } from "api/auth";
// import getToken from "./getToken";

// export const getRefresh = async (config) => {
//   if (typeof window !== "object" || !config.headers) return config;

//   const { accessToken, refreshToken } = await getToken();

//   if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
//   else if (!accessToken && config.url?.includes("/auth")) {
//     const { newAccessToken } = await TokenReissue(refreshToken || "");
//     config.headers["Authorization"] = `Bearer ${newAccessToken}`;
//   }

//   return config;
// };
