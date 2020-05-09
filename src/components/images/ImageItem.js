import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ImageItem = ({ image }) => {
  return (
    
    <Link
    to={{
      pathname: "/image",
      search:
        "id=" +
        image.id +
        "&link=" +
        image.link +
        "&title=" +
        image.title +
        "&ups=" +
        image.ups +
        "&downs=" +
        image.downs,
    }}
  >
    <Card>
      <Card.Img variant="top" src={image.link} />
      <Card.Body>
        <Card.Title>{image.title}</Card.Title>

          {/* <Button variant="primary">Detail</Button> */}
       
      </Card.Body>
    </Card>
    </Link>
  );
};

export default ImageItem;
