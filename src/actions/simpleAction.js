export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SHOW_COMPLETED',
        filter: 'SHOW_COMPLETED'
    })
}