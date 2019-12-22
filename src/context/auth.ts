import { createContext, useContext } from 'react';

export const AuthContext = createContext({ authTokens: '', setAuthTokens: (data: any) => {} });

export function useAuth() {
  return useContext(AuthContext);
}