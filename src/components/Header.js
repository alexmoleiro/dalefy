import React from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


const styles = {
    root: {
        flexGrow: 1,
    },
};

const Header = ({logoutAction, isAuthenticated}) => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="title" color="inherit" style={{ flex: 1 }}>
                    Dalefy.com / learning React Js, Redux and so on.
                </Typography>
                {isAuthenticated && <Button variant="raised" color="secondary" onClick={logoutAction}>Log out</Button>}
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(Header);