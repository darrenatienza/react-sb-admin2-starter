export const initialState = {
    itemID: -1,
    toggled: false
    
}

export const setItemID = sideBarEntity => id => {
    sideBarEntity.setState({itemID : id});
}
export const setToggled = sideBarEntity => isToggle =>{
    sideBarEntity.setState({toggled: isToggle})
}