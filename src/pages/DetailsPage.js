import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

import { checkoutBooking } from "store/actions/checkout";

import { fetchPage } from "store/actions/page";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Activities from "parts/Activities";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";
import Loading from "elements/Loading";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `/detail/${this.props.match.params.id}`,
        this.props.match.params.id
      );
  }

  render() {
    const { page, match } = this.props;

    if (!page[match.params.id]) return <Loading />

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
        <FeaturedImage data={page[match.params.id].item.images} />

        <Fade bottom>
          <section className="container">
            <div className="row">
              <div className="col-7 pr-5">
                <PageDetailDescription data={page[match.params.id].item} />
              </div>
              <div className="col-5">
                <BookingForm
                  itemDetails={page[match.params.id].item}
                  startBooking={this.props.checkoutBooking}
                />
              </div>
            </div>
          </section>
        </Fade>

        <Activities data={page[match.params.id].item.activities} itemId={page[match.params.id].item.id} />
        <Testimonial data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
