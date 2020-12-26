import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from "@material-ui/icons/Shuffle"
import RepeatIcon from "@material-ui/icons/Repeat"
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'


function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img className="footer__albumLogo" src="data:image/jpeg;base64,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" alt='' />
                <div className="footer__songInfo">
                    <h4>Song is playing</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className='footer__center'>
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className='footer__right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer