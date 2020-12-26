export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // discover_weekly:null,
    // token: 'BQDvPzxtvgXqUAJ3GHE9iU8Vf9PPPbhlIhP-Tt7iE5HWLVxLR4ES64Rky_OqHTrEqrv4RkLoedR0imaOMb3GFJyqzwUP_iTt15jnRRMgkNuuMud9hG6Q3UEHUxmn2gsU_p0GHooo__G9JpBkwPZLCACVFGTgQQ',
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;