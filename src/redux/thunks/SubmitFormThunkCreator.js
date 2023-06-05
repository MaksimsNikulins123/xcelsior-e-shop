
import { SignupFormValidator } from "../../components/SignupLayout/SignupFormValidator"


export const SubmitFormThunkCreator = (data) => {
        return (dispatch) => {
            SignupFormValidator.submitForm(data, dispatch)
            
    }
}