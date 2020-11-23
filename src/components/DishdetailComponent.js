import react, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });

    renderDish() {
        return(
            <Card>
                <CardImg width="100%" object src={this.props.dish.image} alt={this.props.dish.name}/>
                <CardBody>
                    <CardTitle tag="h5">{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        if (this.props.dish != null ){
            const comment = comments.map((comment) => {
                return(
                    <li key={comment.id}>
                        {comment.comment}<br/><br/>
                        -- {comment.author}, {this.formatter.format(new Date(comment.date))}
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

    render() {
        if (this.props.dish != null ){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish()}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
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

}

export default DishDetail;