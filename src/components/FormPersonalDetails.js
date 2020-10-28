import React, { Component } from 'react'
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export class FormPersonalDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
      };

      back = (e) => {
        e.preventDefault();
        this.props.prevStep();
      };

    render() {
        const {values, handleChange } = this.props
        return (
            <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Ingresa informacion personal" />

            <TextField
              placeholder="Ingresa tu ocupacion"
              label="Ocupacion"
              onChange={handleChange("occupation")}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Ingresar tu ciudad"
              label="Ciudad"
              onChange={handleChange("city")}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Ingresar tu Bio"
              label="Bio"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            />
            <br />
            <Button color="secondary" variant="contained" onClick={this.back}>
              Anterior
            </Button>

            <Button color="primary" variant="contained" onClick={this.continue}>
              Continuar
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
        );
    }
}

export default FormPersonalDetails
