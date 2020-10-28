import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Ingresa informacion de usuario" />

            <TextField
              placeholder="Ingresar nombre"
              label="Nombre"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Ingresar apellido"
              label="Apellido"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Ingresar E-Mail"
              label="E-Mail"
              onChange={handleChange("email")}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continuar
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
