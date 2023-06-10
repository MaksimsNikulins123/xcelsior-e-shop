
import { LoginFormValidator } from "../../components/LoginLayout/LoginFormValidator"


export const LoginFormThunkCreator = (data) => {
        return (dispatch) => {
            LoginFormValidator.submitForm(data, dispatch)
            
    }
}