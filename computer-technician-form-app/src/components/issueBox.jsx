import React, { Component } from 'react'
import {Checkbox, TextField, FormControlLabel, Box } from '@mui/material'

const styles ={
    TextField: {
        left: '60px',
        position: 'relative',
        bottom: '90px',
        width: '550px',
    }

}

class Problem extends Component {
    render() {
        return (
            <div>
                <TextField id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value" style={styles.TextField}/>
            </div>

        )
    }
}
export default Problem;