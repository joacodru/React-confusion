import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

    function RenderDish({dish}) {
        return(
            <Card>
                <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle tag="h5">{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function RenderComments({comments}) {
        if (comments != null ){
            const comment = comments.map((comment) => {
                return(
                    <li key={comment.id}>
                        {comment.comment}<br/><br/>
                        -- {comment.author}, {new Intl.DateTimeFormat("en-US", {year: "numeric", month: "long", day: "2-digit"}).format(new Date(comment.date))}
                        <br/><br/>
                    </li>
                );
            });
            return(
                <ul className="list-unstyled">
                    <h4>Comments</h4>
                    {comment}
                </ul>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        if (props.dish != null ){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.dish.comments} />
                        </div>      
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

export default DishDetail;