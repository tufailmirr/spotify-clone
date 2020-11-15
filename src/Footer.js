import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className="footer">
           <div className="footer__left">
               <img className="footer__albumLogo" src="data:image/jpeg;base64,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"
                alt="albumLogo"></img>
                <div className="footer__songInfo">
                    <h4>Pillow Talk</h4>
                    <p>Zayn Malick</p>
                </div>
           </div>
           <div className="footer__center">
               <ShuffleIcon className="footer__green"></ShuffleIcon>
               <SkipPreviousIcon className="footer__icon"/>
               <PlayCircleOutlineIcon fontSize="large" 
               className="footer__green"></PlayCircleOutlineIcon>
               <SkipNextIcon className="footer__icon"></SkipNextIcon>
               <RepeatIcon className="footer__green"></RepeatIcon>
               <p>
                   {/* Player Controls */}
               </p>
           </div>
           <div className="footer__right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon/>
                </Grid>
                <Grid item>
                    <VolumeDownIcon/>
                </Grid>
                <Grid item xs>
                    <Slider aria-labelleddby=""></Slider>
                </Grid>
            </Grid>
           </div>
        </div>
    )
}

export default Footer
