export const initialState = {
    isAlertVisible: false,
    isMessagesVisible: false,
    isUserMenuVisible: false,
    isSearchVisible: false
    
}

export const setAlertVisible = entity => val => {
    entity.setState({isAlertVisible : val});
}
export const setMessagesVisible = entity => val => {
    entity.setState({isMessagesVisible : val});
}
export const setUserMenuVisible = entity => val => {
    entity.setState({isUserMenuVisible : val});
}
export const setSearchVisible = entity => val => {
    entity.setState({isSearchVisible : val});
}
export const closeAllPopups = entity => () =>{
    entity.setState({isAlertVisible : false});
    entity.setState({isMessagesVisible : false});
    entity.setState({isUserMenuVisible : false});
    entity.setState({isSearchVisible : false});
}