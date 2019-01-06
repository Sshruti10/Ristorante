import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments) {
        if(comments != null){
            const commentList = comments.map((selectedComment) => {
                return(
                    <ul  key={selectedComment.id} class="list-unstyled">
                        <li>{selectedComment.comment}</li>
                        <li>--{selectedComment.author},{selectedComment.date}</li>
                    </ul>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    <div>
                    {commentList}
                    </div>
                    
                </div>
            )

        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        if(this.props.dish != null) {
        return(
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)} 
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
        
    }
        else{
            return(
                <div></div>
            );
        }

    }

}

export default DishDetail;