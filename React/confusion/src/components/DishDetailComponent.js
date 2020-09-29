import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


  function RenderComments(comments) {
    if (comments != null) {
      const list = comments.map((c) => {
        var tm = new Date(c.date).toDateString();

        return (
          <li key={c.id}>
            <p>{c.comment}</p>
            <p>
              --{c.author}, {tm.slice(4, 10) + ", " + tm.slice(10)}
            </p>
          </li>
        );
      });
      return list;
    } else {
      return <div></div>;
    }
  }

  const DishDetail = (props) => {
    if (props.dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                width="100%"
                src={props.dish.image}
                alt={props.dish.name}
              />
              <CardBody>
                <CardTitle> {props.dish.name}</CardTitle>
                <CardText> {props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {RenderComments(props.dish.comments)}
            </ul>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

export default DishDetail;
