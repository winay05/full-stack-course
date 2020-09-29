import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetail extends Component{

	

	renderComments(comments){
		if(comments!=null)
			{	
				const list= comments.map((c) => {
						var tm=(new Date(c.date)).toDateString();

						return (
							<li key={c.id}>
								<p>{c.comment}</p>
								<p>--{c.author}, {tm.slice(4,10)+", "+tm.slice(10)}</p>
							</li>
							);
						});
				return list;
			}
		else
			{
				return (<div></div>)
			}
	}

	render()
	{
		if(this.props.dish!=null)
		{
			return (
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					<Card>
            			<CardImg width="100%" src={this.props.dish.image} alt ={this.props.dish.name} />
            			<CardBody>
              				<CardTitle> {this.props.dish.name}</CardTitle>
              				<CardText> {this.props.dish.description}</CardText>
            			</CardBody>
          			</Card>	
				</div>
				<div className="col-12 col-md-5 m-1">
					<h4>Comments</h4>
					<ul className="list-unstyled">
						{this.renderComments(this.props.dish.comments)}
					</ul>
					
				</div>
					
			</div>
         
          	
          	);
		}
		else
		{
			return (<div></div>);
		}
	}
}
export default DishDetail;