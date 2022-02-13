import {useContext, createContext, useState} from 'react';

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({children}) {
  const [userId, setUserId] = useState(null);

  return (
    <AuthContext.Provider value={{userId, setUserId}}>
      {children}
    </AuthContext.Provider>
  );
}
