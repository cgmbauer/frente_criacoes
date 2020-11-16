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
  const [failAdmin, setFailAdmin] = useState(false);
  const [failArtist, setFailArtist] = useState(false);

  const adminSign = useCallback(
    (id, name, login, password) => {
      const adminLog = {
        id,
        name,
        user: {
          login,
          password,
        },
        permission: 'admin',
      };

      const checkAdminData = adminData.map(admin =>
        admin.id === adminLog.id ? adminLog : admin,
      );

      if (checkAdminData.includes(adminLog)) {
        setAdminData([...checkAdminData]);
        localStorage.setItem(
          '@Remote: admin',
          JSON.stringify([...checkAdminData]),
        );
      } else {
        setAdminData([...checkAdminData, adminLog]);
        localStorage.setItem(
          '@Remote: admin',
          JSON.stringify([...checkAdminData, adminLog]),
        );
      }
    },
    [adminData],
  );

  const signIn = useCallback(async ({ email, password }) => {
    setFailArtist(false);
    setFailAdmin(false);

    const userResponse = await api.get('/actress/list');

    let isUserValid = [];
    if (userResponse.data) {
      isUserValid = userResponse.data.filter(
        userList => userList.user.login === email,
      );
    }

    let localStorageAdminData = localStorage.getItem('@Remote: admin');

    let isAdminValid = [];

    if (localStorageAdminData) {
      localStorageAdminData = [...JSON.parse(localStorageAdminData)];
      setAdminData(localStorageAdminData);

      isAdminValid = localStorageAdminData.filter(
        adminList => adminList.user.login === email,
      );
    }

    if (isUserValid.length > 0) {
      isUserValid.permission = 'none';
      setData(isUserValid[0]);
      localStorage.setItem('@Remote: user', JSON.stringify(isUserValid[0]));
    } else if (isAdminValid.length > 0) {
      setData(isAdminValid[0]);
      localStorage.setItem('@Remote: user', JSON.stringify(isAdminValid[0]));
    } else if (isAdminValid.length === 0) {
      setFailAdmin(true);
    } else if (isUserValid.length === 0) {
      setFailArtist(true);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Remote: user');

    setData({});
  }, []);

  const updateUser = useCallback(user => {
    localStorage.setItem('@Remote: user', JSON.stringify(user));

    setData(user);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data,
        signIn,
        signOut,
        updateUser,
        adminSign,
        admin: adminData,
        failResponseAdmin: failAdmin,
        failResponseUser: failArtist,
      }}
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
