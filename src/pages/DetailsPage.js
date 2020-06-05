import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import itemDetails from "json/itemDetails.json";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
        <FeaturedImage data={itemDetails.imageUrls} />

        <Fade bottom>
          <section className="container">
            <div className="row">
              <div className="col-7 pr-5">
                <PageDetailDescription data={itemDetails} />
              </div>
              <div className="col-5">
                <BookingForm itemDetails={itemDetails} />
              </div>
            </div>
          </section>
        </Fade>

        <Categories data={itemDetails.categories} />
        <Testimonial data={itemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}