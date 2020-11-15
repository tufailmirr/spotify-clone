import React, {useEffect} from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './Datalayer'


const spotify = new SpotifyWebApi();


function App() {
  // const clientID = " f82fa3930a2e41a7a5e1604fa30aa540"
  //Run a Code based on a given condition

  // const [token, setToken] = useState(null);
  const [{user, token}, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type : 'SET_TOKEN',
        token : _token
      });
      spotify.setAccessToken(_token)
      spotify.getMe().then(user=>{
        // console.log(user);
        dispatch ({
          type: "SET_USER",
          user :user
        });

      
      }).catch(error =>{
        console.log(error.response);
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type : "SET_PLAYLISTS",
          playlists : playlists
        })
      });
      spotify.getPlaylist("37i9dQZEVXbMDoHDwVN2tF").then( response => {
        dispatch({
          type : 'SET_DISCOVER_DAILY',
          discover_daily : response
        })
      })
    }

    // console.log(_token);
  },[])
  
  
  console.log('=>>>>>',user);
  console.log('===>>>>',token);
  return (
    <>
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login/>
        )
      }
  
    </div>
    
    </>
  );
}

export default App;
