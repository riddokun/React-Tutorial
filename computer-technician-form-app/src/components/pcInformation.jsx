import React, { Component } from 'react'
import { FormControlLabel, TextField } from '@mui/material'
import {Checkbox } from '@mui/material'

const styles ={
    pcInformation:{
        border: '2px solid #000000',
        width: '550px',
        height: '250px',
        position: 'relative',
        left: '60px',
        display: 'flex',
    },
    TextField: {
        position: 'relative',
        left: '10px',
        bottom: '15px',
    },
    modelLabel: {
        position: 'relative',
        right: '10px',
        top: '10px'
    },
    modelInput: {
        position: 'relative',
        top: '10px',
    },
    serialLabel: {
        position: 'relative',
        top: '10px',
        right: '5px',
    },
    serialInput: {
        position: 'relative',
        top: '13px',
        left: '5px'
    },
    operatingLabel: {
        position: 'relative',
        top: '20px',
        right: '5px',

    },
    operatingInput: {
        position: 'relative',
        width: '150px',
        top: '20px',
        left: '5px',
    },
    userLabel: {
        position: 'relative',
        top: '30px',
    },
    userInput:{
        position: 'relative',
        width: '150px',
        top: '25px',
        left: '5px'
    },
    passwordLabel: {
        position: 'relative',
        top: '40px',
    },
    passwordInput:{
        position: 'relative',
        width: '150px',
        top: '40px',
        left: '10px'
    }





}
class PC extends Component {
    render() {
        return (
            <div className="pc-information" style={styles.pcInformation}>
                <div className="left">
                    <div><FormControlLabel control={<Checkbox/>} label ='Desktop PC'/></div>
                    <div><FormControlLabel control = {<Checkbox/>} label ='Laptop PC'/></div>
                    <div><FormControlLabel control = {<Checkbox/>} label ='MAC'/></div>
                    <div><FormControlLabel control = {<Checkbox/>} label = 'Server'/></div>
                    <div><FormControlLabel control = {<Checkbox/>} label = 'Others (please specify below)'/></div>
                    <TextField id="standard-basic" label="Specify" variant="standard"  style={styles.TextField}/>
                </div>
                <div className="right">
                    <div>
                    <label style={styles.modelLabel}>Model #</label>
                    <TextField label="Model" size="small" className="model-input" style={styles.modelInput}/>
                    </div>
                    <div>
                    <label style={styles.serialLabel}>Serial #</label>
                    <TextField label="Serial" size="small" className="serial-input" style={styles.serialInput}/>
                    </div>
                    <div>
                        <label style={styles.operatingLabel}>Operating System</label>
                        <TextField label="Operating System" size="small" className="operating-system" style={styles.operatingInput}/>
                    </div>
                    <div>
                        <label style={styles.userLabel}>Admin usernames</label>
                        <TextField label="Username" size="small" className="username-input" style={styles.userInput}/>
                    </div>
                    <div>
                        <label style={styles.passwordLabel}>Admin password</label>
                        <TextField label="Password" size="small" className="username-input" style={styles.passwordInput}/>

                    </div>
                    
                </div>


            </div>
        )
    }

}
export default PC