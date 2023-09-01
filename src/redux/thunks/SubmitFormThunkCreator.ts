
import { SignupFormValidator } from "../../components/SignupLayout/SignupFormValidator"


export const SubmitFormThunkCreator = (data: any) => {
        return (dispatch: any) => {
            SignupFormValidator.submitForm(data, dispatch)
            
    }
}