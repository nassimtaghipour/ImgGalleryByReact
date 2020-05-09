import React, { useEffect } from "react";
import ImageItem from "./ImageItem";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import CardColumns from "react-bootstrap/CardColumns";
import CardGroup from "react-bootstrap/CardGroup";

const Images = ({ images, loading, disableShowNavbar }) => {
  useEffect(() => {
    disableShowNavbar();
  }, []);
  if (loading) {
    return <Spinner animation="grow" size="lg" />;
  } else {
    return (
      <Row>
        <CardColumns>
          {images.map((image) => (
            <ImageItem key={image.id} image={image} />
          ))}
        </CardColumns>
      </Row>
    );
  }
};

export default Images;
