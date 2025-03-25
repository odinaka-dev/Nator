import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Define the shape of the authentication context
interface AuthContextType {
  loggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

// Create context with a default undefined value (to be provided later)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define props for AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setLoggedIn(!!token);
  }, []);

  const login = (token: string) => {
    localStorage.setItem("authToken", token);
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
