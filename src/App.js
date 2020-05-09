import React, { Component, Fragment } from "react";
import Layout from "./components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Images from "./components/images/Images";
import Image from "./components/images/Image";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Pagination from "react-js-pagination";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  state = {
    images: [],
    image: {},
    loading: false,
    section: "",
    viral: false,
    activePage: 1,
    totalImages: 0,
    showNavbar: true,
    showPagination: true,
  };
  componentDidMount() {
    this.getImages();
  }

  fillStore = () => this.props.saveImges(this.state.images);
  // Get image details

  getImage = (id) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Client-ID e3453d3a4c55237",
      Accept: "application/json",
    };
    this.setState({ loading: true });

    axios
      .get("https://api.imgur.com/3/image/" + id, { headers: headers })
      .then((res) => {
        this.setState({
          image: res.data.data,
          loading: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  getImages = () => {
    this.setState({ images: [] });
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Client-ID e3453d3a4c55237",
      Accept: "application/json",
    };
    this.setState({ loading: true });
    axios

      .get(
        "https://api.imgur.com/3/gallery/" +
          `${this.state.section}` +
          "/top/day/" +
          `/${this.state.activePage}`,

        { headers: headers, params: { showViral: this.state.viral } }
      )
      .then((res) =>
        res.data.data.map((item) => {
          if (item.images) {
            if (item.images[0].type === "image/jpeg") {
              let title = item.title ? item.title : "NO TITLE";
              let desc = item.images[0].desc
                ? item.images[0].description
                : "NO DESCRIPTION";
              this.state.images.push({
                link: item.images[0].link,
                title: title,
                desc: desc,
                id: item.images[0].id,
                datetime: item.images[0].datetime,
                views: item.images[0].views,
                ups: item.ups,
                downs: item.downs,
                score: item.score,
              });
              this.setState({ loading: false });
              this.fillStore();
              this.setState({ totalImages: this.state.images.length });
            }
          } else {
            // console.log("else")
            // console.log(item)
          }
        })
      );
  };
  setSection = (sectionValu) => {
    this.setState({ section: sectionValu }, () => {
      this.getImages();
    });
  };
  setShowNavbar = () => {
    this.setState({ showNavbar: false, showPagination: false });
  };
  disableShowNavbar = () => {
    this.setState({ showNavbar: true });
    this.setState({ showPagination: true });
  };
  setViral = (b) => {
    this.setState({ viral: b }, () => {
      this.getImages();
    });
  };
  getSortedImages = (imagesValue) => {
    this.setState({ images: imagesValue });
  };
  iteming = () => {};
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.getImages();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Layout
            setSection={this.setSection}
            setViral={this.setViral}
            getSortedImages={this.getSortedImages}
            showNavbar={this.state.showNavbar}
          >
            <Container>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Images
                        loading={this.state.loading}
                        images={this.state.images}
                        disableShowNavbar={this.disableShowNavbar}
                      />
                    </Fragment>
                  )}
                />

                <Route
                  exact
                  path="/image"
                  render={(props) => (
                    <Image
                      {...props}
                      getImage={this.getImage}
                      image={this.state.image}
                      loading={this.state.loading}
                      setShowNavbar={this.setShowNavbar}
                    />
                  )}
                />
              </Switch>
              <div className="row">
                <div className="Pagination">
                  {this.state.showPagination === true ? (
                    <Pagination
                      itemClass="page-item"
                      linkClass="page-link"
                      activePage={this.state.activePage}
                      itemsCountPerPage={3}
                      totalItemsCount={this.state.totalImages}
                      pageRangeDisplayed={5}
                      onChange={this.handlePageChange.bind(this)}
                    />
                  ) : null}
                </div>
              </div>
            </Container>
          </Layout>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveImges: (imgs) => dispatch({ type: "SaveImages", value: imgs }),
  };
};
export default connect(null, mapDispatchToProps)(App);
