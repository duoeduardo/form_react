import React, { Component } from 'react'
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export class Confirm extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
      };

      back = (e) => {
        e.preventDefault();
        this.props.prevStep();
      };

    render() {
        const {values: {firstName, lastName, email, occupation, city, bio}} = this.props
        return (
            <MuiThemeProvider>
            <>
              <Dialog open fullWidth maxWidth="sm">
                <AppBar title="Confirmar datos de usuario" />
                <List>
                    <ListItem>
                        <ListItemText primary='Nombre' secondary={firstName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Apellido' secondary={lastName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='E-mail' secondary={email} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Ocupacion' secondary={occupation} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Ciudad' secondary={city} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Bio' secondary={bio} />
                    </ListItem>
                </List>
               
                <br />
                <Button color="secondary" variant="contained" onClick={this.back}>
                  Anterior
                </Button>
    
                <Button color="primary" variant="contained" onClick={this.continue}>
                  Confirmar y Continuar
                </Button>
              </Dialog>
            </>
          </MuiThemeProvider>
        )
    }
}

export default Confirm
