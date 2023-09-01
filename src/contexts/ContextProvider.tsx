import { createContext, useContext,  useState } from "react"

const StateContext = createContext({
    color: false,
    user: '',
    token: '',
    setUser: () => {},
    setToken: () => {},
    setColor: () => {},
})

export const ContextProvider = ({children}) => {

    const [color, setColor] = useState(false)
    const [user, setUser] = useState('guest');
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (token: any) => {
        _setToken(token)
      
        if(token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
    return(
        <StateContext.Provider value={{
            color,
            user,
            token,
            setColor,
            setUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)