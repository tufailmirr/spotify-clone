export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    // token : "BQAZQErPO0tXqPwQuOg5n8bK5u8ZF-tCQK59BnVDTJHp3eP4IoHYyyBTpCQk3HdIjCQF9b3lf-xunH7gKiSC1z_8jdRjLIlTOtTHsNRgTzkiLXKiUOPUbjPNQ_FrP776naQwDiveEvxhCAmhrf-fJmo5kwYvpTd_7flxt4ipByJL0L0i",
    discover_daily : null

};
 

const reducer = (state, action) => {
console.log(action);
switch(action.type){
    case "SET_USER":
        return{
            ...state,
            user: action.user,
        };
    case "SET_TOKEN":
        return{
            ...state,
            token : action.token
        };
    case "SET_PLAYLISTS":
        return{
            ...state,
            playlists : action.playlists
        };
    case "SET_DISCOVER_DAILY":
        return{
            ...state,
            discover_daily : action.discover_daily
        }
        default:
            return state;
}
}

export default reducer