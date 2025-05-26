import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export const useUser = () => {
    const {
        users,
        GetUsersContext,
        PostCreateUserContext,
        PutUpdateUserContext,
        
    } = useContext(UserContext);
    if (!users ||
        !GetUsersContext ||
        !PostCreateUserContext ||
        !PutUpdateUserContext
    ) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return {
        users,
        GetUsersContext,
        PostCreateUserContext,
        PutUpdateUserContext,
        
    };
};
