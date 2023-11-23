import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// initialize the context
const AppContext = createContext();


// create a provider
export const AppProvider = ({children}) => {

    const navigate = useNavigate();
    // get user data from session and convert to JS using 'JSON.parse()' 
    // and store in state
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

    const [loggedIn, setLoggedIn] = useState(currentUser !==null ? true : false);

    const logout = () => {
        sessionStorage.removeItem('user');
        setCurrentUser(null);
        setLoggedIn(false);
        navigate('/login');
    }

    return <AppContext.Provider value={{loggedIn, setLoggedIn, logout}} >
        {children}
    </AppContext.Provider>
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;