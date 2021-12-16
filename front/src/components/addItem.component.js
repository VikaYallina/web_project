import { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { addVideo } from '../actions/video';
import PropTypes from 'prop-types';

class AddItem extends Component {
    state = {
        title: '',
        description: '',
        category: '',
        price: '',
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault();
        

        const newItem = {
            title: this.state.title,
            description: this.state.description,
            category: this.state.category,
            price: this.state.price
        }
        console.log(newItem);
        await this.props.addVideo(newItem);

        alert('Item added successfully');
    }

    render(){
        return(
            <div>
                <Container>
                    <h2 className="text-center mb-3">Add a new Item</h2>
                    { this.props.isAuthenticated ?
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Title of the item"
                                onChange={this.onChange}
                            />
                            <br/>
                            <Label for="description">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Description of the item"
                                onChange={this.onChange}
                            />
                            <br/>
                            <Label for="category">Category</Label>
                            <Input 
                                type="text"
                                name="category" 
                                id="category"
                                placeholder="Category of the item"
                                onChange={this.onChange}
                                >
                            </Input>
                            <br/>
                            <Label for="price">Price</Label>
                            <Input
                                type="number"
                                name="price"
                                id="price"
                                placeholder="Price of the item"
                                onChange={this.onChange}
                            />
                            
                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                            >Add Item</Button>
                        </FormGroup>
                    </Form> : 
                    <Alert className="text-center" color="danger">Login to add items!</Alert>
                    }
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isLoggedIn,
});

export default connect(mapStateToProps,{addVideo})(AddItem);