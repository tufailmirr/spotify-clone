// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint = 
"https://accounts.spotify.com/authorize"

const redirectUri = "http://localhost:3000/";
const clientID = "f82fa3930a2e41a7a5e1604fa30aa540";
//  const accesToken= "BQDU3kn60-lbVaFxILw1uA_3QToxTLNEPLm41Q8AoInzDRRG2hTPfcEvo7mG-iFKm1ynKFu6uQIG1DNVvczApm0bvR2BgYzLWIdb9s78pLjG8jyVbPVJVc0yT_LXc_PVHvz-O4k_8c-8YgECs6kb4ZCSzCL55D2ylMfFNCXsyDQ1oOEh_0M"

const scopes =[
     "user-read-currently-playing",
     "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
    
];

export const getTokenFromUrl  = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((intial, item) =>{
        let parts = item.split('=');
        intial[parts[0]] = decodeURIComponent(parts[1])
        return intial
    }, {});
} 
 

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20"
)}&response_type=token&show_dialog=true`