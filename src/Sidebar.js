import React from 'react'
import  './Sidebar.css';
import SidebarOption from './SidebarOption';
// import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue } from './Datalayer'


function Sidebar() {
const [{playlists }, dispatch] = useDataLayerValue();



    return (
        <div className="sidebar">
<img 
className="sidebar__logo"
src="https://getheavy.com/wp-content/
uploads/2019/12/spotify2019-830x350.jpg" alt="spotify logo"></img>
        <SidebarOption Icon={HomeIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search"/>
        <SidebarOption  Icon={LibraryMusicIcon} title="Your Library"/>
        <br></br>
        <strong
         className="sidebar__title">
             PLAYLIST</strong>
        <hr></hr>
        {playlists?.items?.map(playlist => (
    
             <SidebarOption title={playlist.name} key={playlist}></SidebarOption>
        ))}
       
        {/* <SidebarOption title="HARRY Styles"></SidebarOption>
        <SidebarOption title="Zayn"></SidebarOption> */}
        </div>
    )
}
export default Sidebar
