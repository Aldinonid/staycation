import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";

export default function Categories({ data, itemId }) {
  if (data.length === 0) return null;
  return (
    <Fade bottom>
      <section className="container">
        <h4 className="mb-3 font-weight-medium">Activities</h4>
        <div className="container-grid">
          {data.length > 0 &&
            data.map((item, index2) => {
              return (
                <div className="item column-3 row-1" key={`activity-${index2}`}>
                  <Fade bottom delay={300 * index2}>
                    <div className="card">
                      {item.is_popular && (
                        <div className="tag">
                          Popular{" "}
                          <span className="font-weight-light">Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          href={`/properties/${itemId}`}
                          className="stretched-link d-block text-gray-800"
                        >
                          <h4>{item.name}</h4>
                        </Button>
                        <span className="text-gray-500">{item.type}</span>
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
