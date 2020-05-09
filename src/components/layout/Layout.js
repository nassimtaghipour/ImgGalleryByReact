import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
export class Layout extends Component {
  setSection = (selectedValue) => {
    this.props.setSection(selectedValue);
  };
  setViralvalu = () => {
    let checkBox = document.getElementById("isviralCheck");
    if (checkBox.checked === true) {
      this.props.setViral(true);
    } else {
      this.props.setViral(false);
    }
  };
  waterFallThumbnail() {
    let card = document.getElementsByClassName("card");
    for (let [, value] of Object.entries(card)) {
      value.querySelector("img").style.maxHeight = "initial";
    }
  }
  uniformThumbnail() {
    let card = document.getElementsByClassName("card");
    for (let [, value] of Object.entries(card)) {
      value.querySelector("img").style.maxHeight = "220px";
      value.querySelector("img").style.minHeight = "220px";
    }
  }
  sortToNewest = () => {
    let img = this.props.crtImages.sort((a, b) => {
      return b.datetime - a.datetime;
    });
    this.props.getSortedImages(img);
  };
  popularSort = () => {
    let img = this.props.crtImages.sort((a, b) => {
      return b.views - a.views;
    });
    this.props.getSortedImages(img);
  };
  randomSort = () => {
    let img = this.props.crtImages.sort(() => Math.random() - 0.5);
    this.props.getSortedImages(img);
  };
  render() {
    return (
      <div className="wrapper">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Link to={"/"} style={{ color: "white" }}>
            <h2>imgur</h2>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {this.props.showNavbar === true ? (
            <Navbar.Collapse id="menu-Navbar">
              <Nav className="mr-auto">
                <Nav.Link href="" onClick={(e) => this.setSection("hot")}>
                  Hot
                </Nav.Link>
                <Nav.Link href="" onClick={(e) => this.setSection("top")}>
                  Top
                </Nav.Link>
                <Nav.Link href="" onClick={(e) => this.setSection("user")}>
                  User
                </Nav.Link>
                <NavDropdown title="filter" id="collasible-nav-dropdown">
                  <NavDropdown.Item
                    href=""
                    onClick={(e) => this.sortToNewest()}
                  >
                    Newest
                  </NavDropdown.Item>
                  <NavDropdown.Item href="" onClick={(e) => this.popularSort()}>
                    papular
                  </NavDropdown.Item>
                  <NavDropdown.Item href="" onClick={(e) => this.randomSort()}>
                    Random
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                  <Form>
                    <Form.Check
                      type="switch"
                      id="isviralCheck"
                      label="Show Viral Images"
                      onChange={this.setViralvalu}
                    />
                  </Form>
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  href="#memes"
                  onClick={this.waterFallThumbnail}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                  >
                    <rect
                      id="backgroundrect"
                      width="100%"
                      height="100%"
                      x="0"
                      y="0"
                      fill="none"
                      stroke="none"
                    ></rect>
                    <g>
                      <g>
                        <g id="svg_10">
                          <polygon points="6.178707122802734,0 1.1573245525360107,0 0.15306150913238525,0 0.15306150913238525,1.2756938815360286 0.15306150913238525,7.654227611753868 0.15306150913238525,8.929917633937634 1.1573245525360107,8.929917633937634 6.178707122802734,8.929917633937634 7.182987213134766,8.929917633937634 7.182987213134766,7.654227611753868 7.182987213134766,1.2756938815360286 7.182987213134766,0 "></polygon>
                        </g>
                      </g>
                      <g>
                        <g id="svg_34">
                          <polygon points="6.278707504272461,12.099999867934457 1.25732421875,12.099999867934457 0.25306129455566406,12.099999867934457 0.25306129455566406,12.804268837391646 0.25306129455566406,16.325651648036 0.25306129455566406,17.029918670654297 1.25732421875,17.029918670654297 6.278707504272461,17.029918670654297 7.282987594604492,17.029918670654297 7.282987594604492,16.325651648036 7.282987594604492,12.804268837391646 7.282987594604492,12.099999867934457 "></polygon>
                        </g>
                      </g>
                      <g>
                        <g id="svg_38">
                          <polygon points="15.978708267211914,8.100003717719119 10.957324981689453,8.100003717719119 9.953062057495117,8.100003717719119 9.953062057495117,9.361411389385012 9.953062057495117,15.66851682793822 9.953062057495117,16.929922103881836 10.957324981689453,16.929922103881836 15.978708267211914,16.929922103881836 16.982988357543945,16.929922103881836 16.982988357543945,15.66851682793822 16.982988357543945,9.361411389385012 16.982988357543945,8.100003717719119 "></polygon>
                        </g>
                      </g>
                      <g>
                        <g>
                          <polygon points="15.878707885742188,-0.10000000149011612 10.857324600219727,-0.10000000149011612 9.85306167602539,-0.10000000149011612 9.85306167602539,0.6185544841542594 9.85306167602539,4.2113652655988005 9.85306167602539,4.929918346846392 10.857324600219727,4.929918346846392 15.878707885742188,4.929918346846392 16.88298797607422,4.929918346846392 16.88298797607422,4.2113652655988005 16.88298797607422,0.6185544841542594 16.88298797607422,-0.10000000149011612 "></polygon>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  href="#memes"
                  onClick={this.uniformThumbnail}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="17"
                    height="17"
                  >
                    <rect
                      id="backgroundrect"
                      width="100%"
                      height="100%"
                      x="0"
                      y="0"
                      fill="none"
                      stroke="none"
                    ></rect>
                    <g>
                      <g>
                        <g>
                          <polygon points="6.17870715566179,0 1.1573245256338325,0 0.15306144952774048,0 0.15306144952774048,1.0042672515679527 0.15306144952774048,6.0256540079346905 0.15306144952774048,7.02991762439467 1.1573245256338325,7.02991762439467 6.17870715566179,7.02991762439467 7.18298727747689,7.02991762439467 7.18298727747689,6.0256540079346905 7.18298727747689,1.0042672515679527 7.18298727747689,0 "></polygon>
                        </g>
                      </g>
                      <g>
                        <g>
                          <polygon points="6.278707504272461,10 1.25732421875,10 0.25306129455566406,10 0.25306129455566406,11.004266738891602 0.25306129455566406,16.025653839111328 0.25306129455566406,17.029918670654297 1.25732421875,17.029918670654297 6.278707504272461,17.029918670654297 7.282987594604492,17.029918670654297 7.282987594604492,16.025653839111328 7.282987594604492,11.004266738891602 7.282987594604492,10 "></polygon>
                        </g>
                      </g>
                      <g>
                        <g>
                          <polygon points="15.978708267211914,9.900003053247929 10.957324981689453,9.900003053247929 9.953062057495117,9.900003053247929 9.953062057495117,10.90426979213953 9.953062057495117,15.925656892359257 9.953062057495117,16.929921723902225 10.957324981689453,16.929921723902225 15.978708267211914,16.929921723902225 16.982988357543945,16.929921723902225 16.982988357543945,15.925656892359257 16.982988357543945,10.90426979213953 16.982988357543945,9.900003053247929 "></polygon>
                        </g>
                      </g>
                      <g>
                        <g>
                          <polygon points="15.878707885742188,-0.10000000149011612 10.857324600219727,-0.10000000149011612 9.85306167602539,-0.10000000149011612 9.85306167602539,0.9042667374014854 9.85306167602539,5.925653837621212 9.85306167602539,6.929918669164181 10.857324600219727,6.929918669164181 15.878707885742188,6.929918669164181 16.88298797607422,6.929918669164181 16.88298797607422,5.925653837621212 16.88298797607422,0.9042667374014854 16.88298797607422,-0.10000000149011612 "></polygon>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          ) : null}
        </Navbar>

        <main style={{ paddingTop: "85px", paddingBottom: "50px" }}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    crtImages: state.currentImages,
  };
};
export default connect(mapStateToProps, null)(Layout);
