import React, { Component } from 'react'
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

export class Success extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <MuiThemeProvider>
                <>
                <Dialog
                open
                fullWidth
                maxWidth='sm'
                >
                    <AppBar title='Success' />
                    <h1>Gracias por suscribirse</h1>
                    <p>Recibira un E-Main con mas informacion.</p>
                </Dialog>
                </>
            </MuiThemeProvider>
        )
    }
}

export default Success
