import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [ userInfo, setUserInfo ] = useState({});

    const putUserData = (userInfo) => {
        setUserInfo(userInfo)
        localStorage.setItem('devburger:userData', JSON.stringify(userInfo));
    };

    const logOut = () => {
        setUserInfo({});
        localStorage.removeItem('devburger:userData');
    }

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem('devburger:userData');

        if(userInfoLocalStorage){
            setUserInfo(JSON.parse(userInfoLocalStorage));
        }
    }, [])

    return(
        <UserContext.Provider value={{userInfo, putUserData, logOut}}>{children}</UserContext.Provider>
    )
};

export const useUser = () => {
    const context = useContext(UserContext);

    if(!context){
        throw new Error("useUser must a be valid context");
    }
    return context;
}