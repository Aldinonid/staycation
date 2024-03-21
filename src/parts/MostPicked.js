import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";

export default function MostPicked(props) {
  return (
    <Fade bottom>
      <section className="container" ref={props.refMostPicked}>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostpicked-${index}`}
                className={`item column-4 row-1${
                  index === 0 ? " row-2" : " row-1"
                }`}
              >
                <Fade bottom delay={400 * index}>
                  <div className="card card-featured">
                    <div className="tag">
                      ${item.price}{" "}
                      <span className="font-weight-light">per {item.unit}</span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={item.images[0]?.image_url}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="stretched-link d-block text-white"
                        href={`/properties/${item.id}`}
                      >
                        <h4 className="h5">{item.title}</h4>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
}
