import React, { Component } from 'react'
import {Checkbox, TextField, Box,FormControlLabel} from'@mui/material'

const styles={
    container: {
        position: 'relative',
        border: '2px solid #000000',
        width: '190px',
        height: '250px',
        bottom: '90px',
        left: '80px',
    }
}
class Billing extends Component {
    render() {
        return (
            <div className="container" style={styles.container}>
                <div><FormControlLabel control={<Checkbox/>} label ='PayPal'/></div>
                <div><FormControlLabel control={<Checkbox/>} label ='ApplePay'/></div>
                <div><FormControlLabel control={<Checkbox/>} label ='Cash'/></div>
                <div><FormControlLabel control={<Checkbox/>} label ='Google Pay'/></div>
                <div><FormControlLabel control={<Checkbox/>} label ='Visa'/></div>
                <div><FormControlLabel control={<Checkbox/>} label ='Other Services'/></div>

            </div>

        )
    }
}
export default Billing