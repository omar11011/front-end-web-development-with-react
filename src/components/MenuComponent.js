import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDeatail from './DishDetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
        }
    }

    onDishSelected(dish) {
        this.setState({ selectedDish: dish })
    }

    renderDish(dish) {
        if(dish != null) {
            return (
                <DishDeatail dish={dish}/>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const menu = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelected(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                
                {this.renderDish(this.state.selectedDish)}
            </div>
        );
    }

}

export default Menu;