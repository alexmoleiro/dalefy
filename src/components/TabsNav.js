import React from 'react';
import {withStyles} from "material-ui/styles";
import Tabs, { Tab } from 'material-ui/Tabs';

const styles = {
    root: {
        flexGrow: 1,
    },
};

const TabsNav=() => {
    return(<Tabs
            value={0}
            // onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered >
            <Tab label="My Products" />
            <Tab label="Their products" />
            <Tab label="Favourites" />
        </Tabs>
    )
};
export default withStyles(styles)(TabsNav);