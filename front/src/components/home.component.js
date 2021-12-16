import React from 'react'
import { Component } from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getVideos } from '../actions/video';
import { addToCart } from '../actions/cart';

export class Home extends Component {

    componentDidMount(){
        this.props.getVideos();
    }

    static propTypes = {
        getVideos: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        addToCart: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }

    onAddToCart = async (id, productId) => {
        await this.props.addToCart(id, productId, 1);
        alert ('Item added to Cart');
    }

    render(){
        const { items } = this.props.item;
        const user = this.props.user;
        console.log(this.props);
        return (
            <div>
            <Container>
                <div className="row">
                {items.map((item)=>(
                    <div className="col-md-4" key={item.id}>
                    <Card className="mb-4">
                        <CardBody>
                            <CardTitle tag="h5">{item.title}</CardTitle>
                            <CardSubtitle tag="h6">{item.price} RUB</CardSubtitle>
                            <CardText>{item.category}</CardText>
                            {this.props.isAuthenticated ? 
                                <Button
                                    color="success"
                                    size="sm"
                                    onClick={this.onAddToCart.bind(this, user.id, item.id)}
                                    >Add To Cart</Button> :
                                    null}
                        </CardBody>
                    </Card>
                    </div>
                ))}
                 </div>
            </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isLoggedIn,
    user: state.auth.user
})

export default connect(mapStateToProps, {getVideos, addToCart})(Home);