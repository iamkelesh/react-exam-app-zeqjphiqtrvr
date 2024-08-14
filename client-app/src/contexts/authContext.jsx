import { createContext } from "react"
import { useNavigate } from "react-router"
import { login, register } from "../services/authService"
import { useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()
    const [authState, setAuthState] = useState({})

    const registerSubmitHandler = async (data) => {

        try {
            const result = await register(data)
            setAuthState(result)
            navigate('/')

        } catch (error) {
            console.log(error)
            alert(error.message)
        }

    }

    const loginSubmitHandler = async (data) => {
        try {
            const result = await login(data)
            console.log('everything should be fine')
            setAuthState(result)
            navigate('/')
        } catch (error) {
            console.log(error)
            alert(error.message)
        }

    }

    const logoutHandler = () => {
        setAuthState({});
    };

    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutHandler,
        isAuthenticated: !!authState.accessToken,
        fullName: authState.fullName,
        email: authState.email,
        userId: authState._id,
        accessToken: authState.accessToken

    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext