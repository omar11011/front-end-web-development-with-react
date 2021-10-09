import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as moment from 'moment';

function RenderComments(comments) {
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

const DishDetail = props => {
    if(props.dish !== undefined) {
        try {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={props.dish.image} alt={props.dish.name}/>
                                <CardBody>
                                    <CardTitle>{props.dish.name}</CardTitle>
                                    <CardText>{props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h3>Comentarios</h3>
    
                            {RenderComments(props.comments)}
                        </div>
                    </div>
                </div>
            )
        } catch(error) {
            console.log(error)
        }
    } else {
        return (
            <div></div>
        )
    }
};

export default DishDetail;