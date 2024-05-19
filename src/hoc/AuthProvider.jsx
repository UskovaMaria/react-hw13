import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signin = async (username, password, callback) => {
    try {
      const response = await axios.get('http://localhost:5000/users', {
        params: {
          username,
          password,
        },
      });

      if (response.data.length > 0) {
        setUser(response.data[0]);
        callback();
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  };

  const signout = (callback) => {
    setUser(null);
    callback();
  };

  const value = { user, signin, signout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;