import React from 'react';
import './Body.css';
import Header from './Header';
import SongRow from './SongRow';
import { useDataLayerValue } from './Datalayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body() {
    const [{discover_daily}, dispatch] = useDataLayerValue();

    return (
        <div className="body">
           <Header/>
           <div 
           className="body__info">
               <img 

                src={discover_daily?.images[0]?.url}></img>

                <div
                className="body__infoText">
                    <strong>PLAYLISTS</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_daily?.description}</p>
                </div>
           </div>
           <div className="body__songs">
               <div className="body__icons">
                   <PlayCircleFilledIcon 
                   className="body__shuffle"/>
                   <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
               </div>
               {/* list of songs */}
               {discover_daily?.tracks.items.map(item => (
                   <SongRow track={item.track} />
               ))}
           </div>
        </div>
    )
}

export default Body
