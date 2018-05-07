import React from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
};

const Header = () => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    Dalefy.com, segunda mano solo con amigos
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(Header);