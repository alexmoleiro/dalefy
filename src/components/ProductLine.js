import React from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

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
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={3} className="picture">
                        <img alt="" src={product.thumbnailLink}/>
                    </Grid>
                    <Grid item xs={12} sm={9} className="productbody">
                        <TextField value={product.name}/>
                        <Typography variant="subheading" color="textSecondary">I don't use it anymore. Anyone want it?
                        </Typography>
                        <Button variant="raised" onClick={() => onClick(product.id)} component="span">
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider/>
        </div>)
}

export default withStyles(styles)(ProductLine);