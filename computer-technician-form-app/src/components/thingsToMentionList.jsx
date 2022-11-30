import React, { Component } from 'react'
import {Checkbox, TextField, FormControlLabel, Box} from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const styles ={
    mention: {
        position: 'relative',
        left: '30px',
        top: '10px',

    }

}

class Mentions extends Component {
    render() {
        return (
            <div>
                <h3 style={styles.mention}>Things to mention</h3>
            <ul>
           <div><li>Crashes or system freezes</li></div>
           <div><li>Error messages</li></div>
            <div><li>New program installed</li></div>
            <div><li>New hadrware and accessible installed</li></div>
           <div><li>Anything you may have tried to repair the problem</li></div>
            


            </ul>
            </div>

        )
    }
}

export default Mentions;