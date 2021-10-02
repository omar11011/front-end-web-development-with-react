import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import * as moment from 'moment';

class DishDeatail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        let content = <p>Aún no hay comentarios</p>

        if(comments && comments.length > 0) {
            content = comments.map(e => {
                return (
                    <div>
                        <p>{e.comment}</p>
                        <p>-- {e.author}, {moment(e.date).format('LL')}</p>
                    </div>
                )
            })
        }

        return ( content )
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h3>Comentarios</h3>

                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        )
    }

}

export default DishDeatail;