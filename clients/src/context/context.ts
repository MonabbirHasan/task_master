import { createContext } from "react";

interface AuthContextType {
    authUser: { id: string; name: string } | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
