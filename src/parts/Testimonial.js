import React from "react";
import Fade from "react-reveal/Fade";

import TestimonyAccent from "../assets/images/testimonial-landingpages-frame.jpg";

import Star from "elements/Star";
import Button from "elements/Button";

export default function Testimonial({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <Fade bottom delay={500}>
          <div className="col-auto" style={{ marginRight: 60 }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={`${process.env.REACT_APP_HOST}/${data.image_url}`}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
              <img
                src={TestimonyAccent}
                alt="Testimonial"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px` }}
              />
            </div>
          </div>
        </Fade>

        <Fade bottom delay={1000}>
          <div className="col">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4}></Star>
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.family_name}, {data.family_occupation}
            </span>
            <div>
              <Button
                type="link"
                href={`/testimonial/${data._id}`}
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
