import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
class Image extends Component {
  state = {
    sample: {},
    id: "",
    title: "",
    link: "",
    ups: "",
    downs: "",
  };

  getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  componentWillMount() {
    let id = this.getParameterByName("id", this.props.location.search);
    this.setState({ id: id });
    let title = this.getParameterByName("title", this.props.location.search);
    this.setState({ title: title });
    let link = this.getParameterByName("link", this.props.location.search);
    this.setState({ link: link });
    let ups = this.getParameterByName("ups", this.props.location.search);
    this.setState({ ups: ups });
    let downs = this.getParameterByName("downs", this.props.location.search);
    this.setState({ downs: downs });
    const sample = this.props.crtImages.find((tmp) => tmp.id === id);
    this.setState({ sample: sample });
    this.props.getImage(id);
    this.props.setShowNavbar();
  }
  componentDidMount() {
    let id = this.getParameterByName("id", this.props.location.search);
    this.setState({ id: id });
    let title = this.getParameterByName("title", this.props.location.search);
    this.setState({ title: title });
    let link = this.getParameterByName("link", this.props.location.search);
    this.setState({ link: link });
    let ups = this.getParameterByName("ups", this.props.location.search);
    this.setState({ ups: ups });
    let downs = this.getParameterByName("downs", this.props.location.search);
    this.setState({ downs: downs });
    const sample = this.props.crtImages.find((tmp) => tmp.id === id);
    this.setState({ sample: sample });
    this.props.getImage(id);
    this.props.setShowNavbar();
  }

  render() {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={this.state.link}
          style={{ minHeight: "600px" }}
        />
        <Card.Body className="text-center">
          <Card.Title>{this.state.title}</Card.Title>
          <Card.Text>{this.props.image.description}</Card.Text>
        </Card.Body>
        <Card.Body className="text-center">
          <span style={{ paddingLeft: "20px" }}>
            <i className="fa fa-thumbs-down" style={{ fontSize: "20px" }}>
              {this.state.downs}
            </i>
          </span>
          <span style={{ paddingLeft: "20px" }}>
            <i className="fa fa-thumbs-up" style={{ fontSize: "20px" }}>
              {this.state.ups}
            </i>
          </span>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    crtImages: state.currentImages,
  };
};

export default connect(mapStateToProps, null)(Image);
