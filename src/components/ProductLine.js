import React from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});
const ProductLine = (props) => {
    const {product, onClick} = props;

    return (
        <div>
            <ListItem>
                <Grid container spacing={24}>
                    <Grid item sm={3}>
                        <img alt="" src={product.thumbnailLink}/>
                    </Grid>
                    <Grid item sm={8}>
                        <Typography variant="headline">{product.name}</Typography>
                        <Typography variant="subheading" color="textSecondary">No hay mucho texto
                        </Typography>
                        <Button variant="raised" onClick={() => onClick(product.id)} component="span">
                            View more
                        </Button>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider/>
        </div>)
}

export default withStyles(styles)(ProductLine);