import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {updateFile} from './../actions/googleDriveActions';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});
class ProductLine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: props.product.name,
                description: props.product.description,
            }
        }
    }

    handleChange(event, field) {
        const {name, description} = this.state.form;

        if (field === "name")
        {
            this.setState({form: {name: event.target.value, description}})
        }

        if (field === "description"){
            this.setState({form: {description: event.target.value, name}})
        }
    }

    render() {
        const {product, updateFile} = this.props;

        return (
            <div>
                <ListItem>
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={3} className="picture">
                            <img alt="" src={product.thumbnailLink}/>
                        </Grid>
                        <Grid item xs={12} sm={9} className="productbody">
                            <TextField value={this.state.form.name}
                                       onChange={(event) => this.handleChange(event, "name")}/>
                            <TextField value={this.state.form.description}
                                       onChange={(event) => this.handleChange(event, "description")}/>
                            <Button variant="raised" component="span"
                                    onClick={() => updateFile(product.id, this.state.form)}>
                                Update
                            </Button>
                        </Grid>
                    </Grid>
                </ListItem>
                <Divider/>
            </div>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFile: (fileId, form) => dispatch(updateFile(fileId, form)),
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(ProductLine));