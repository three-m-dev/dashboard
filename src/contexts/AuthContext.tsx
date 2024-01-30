import { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
	isAuthenticated: boolean;
	loading: boolean;
	setIsAuthenticated: (value: boolean) => void;
	setLoading: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	return (
		<AuthContext.Provider value={{ isAuthenticated, loading, setIsAuthenticated, setLoading }}>
			{children}
		</AuthContext.Provider>
	);
};
