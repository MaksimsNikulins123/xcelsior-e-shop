import { SetLoginUserAccessTokenActionCreator, ToggleLoginSeccessActionCreator, ToggleLoginUserRightsActionCreator } from "../loginform-reducer"

export const LogoutThunkCreator = () => {
    return (dispatch) => {
        dispatch(ToggleLoginSeccessActionCreator(false)),
        dispatch(ToggleLoginUserRightsActionCreator("guest")),
        dispatch(SetLoginUserAccessTokenActionCreator(null))
   
        
}
}