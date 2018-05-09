import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {updateFile} from './../actions/googleDriveActions';
import List, {ListItem} from 'material-ui/List';

class ProductLine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: props.product.name,
                description: props.product.description,
            },
            showUpdateButton:false
        }
    }

    handleChange(event, field) {
        const {name, description} = this.state.form;

        if (field === "name") {
            this.setState({form: {name: event.target.value, description},showUpdateButton:true})
        }

        if (field === "description") {
            this.setState({form: {description: event.target.value, name}, showUpdateButton:true})
        }
    }

    sendAction(fileId) {
        const {name, description} = this.state.form;
        this.props.updateFile(fileId, this.state.form);
        this.setState({form: {description, name}, showUpdateButton:false})

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
                            <List>
                                <ListItem >
                                    <TextField label="Name" value={this.state.form.name}
                                               onChange={(event) => this.handleChange(event, "name")}/>
                                </ListItem>
                                <ListItem>
                                    <TextField label="Description" multiline rowsMax="4" fullWidth value={this.state.form.description}
                                               onChange={(event) => this.handleChange(event, "description")}/>
                                </ListItem>
                                <ListItem >
                                    { this.state.showUpdateButton && <Button variant="raised" component="span"
                                            onClick={() => this.sendAction(product.id)}>
                                        Update
                                    </Button> }
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </ListItem>
                <Divider/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFile: (fileId, form) => dispatch(updateFile(fileId, form)),
    }
}

// export default connect(null, mapDispatchToProps)(withStyles(styles)(ProductLine));
export default connect(null, mapDispatchToProps)(ProductLine);