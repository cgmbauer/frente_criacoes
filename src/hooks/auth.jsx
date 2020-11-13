import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('@Remote: user');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {};
  });
  const [adminData, setAdminData] = useState([]);

  const adminSign = useCallback(
    ({ id, name, login, password }) => {
      const adminLog = {
        id,
        name,
        user: {
          login,
          password,
        },
        permission: 'admin',
      };

      setAdminData([...adminData, adminLog]);
    },
    [adminData],
  );

  const signIn = useCallback(
    async ({ email, password }) => {
      const userResponse = await api.get('/actress/list');

      const adminResponse = adminData;

      const isUserValid = userResponse.data.filter(
        userList => userList.user.login === email,
      );

      const isAdminValid = adminResponse.filter(
        adminList => adminList.user.login === email,
      );

      if (isUserValid.length > 0) {
        isUserValid.permission = 'none';
        setData(isUserValid);
        localStorage.setItem('@Remote: user', JSON.stringify(isUserValid));
      } else if (isAdminValid.length > 0) {
        setData(isAdminValid);
        localStorage.setItem('@Remote: user', JSON.stringify(isAdminValid));
      }
    },
    [adminData],
  );

  // const adminSign = useCallback(
  //   async ({ id, name, login, password }) => {
  //     const adminLog = {
  //       id,
  //       name,
  //       user: {
  //         login,
  //         password,
  //       },
  //       permission: 'admin',
  //     };

  //     setAdminData([...adminData, adminLog]);

  //     await signIn({
  //       email: adminLog.user.login,
  //       password: adminLog.user.password,
  //     });
  //   },
  //   [adminData, signIn],
  // );

  const signOut = useCallback(() => {
    localStorage.removeItem('@Remote: user');

    setData({});
  }, []);

  const updateUser = useCallback(user => {
    // VERIFICAR SE O USUÁRIO TEM PERMISSÃO PARA ROTA
    localStorage.setItem('@Remote: user', JSON.stringify(user));

    setData(user);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data, signIn, signOut, updateUser, adminSign }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro do AuthProvider!');
  }

  return context;
}
