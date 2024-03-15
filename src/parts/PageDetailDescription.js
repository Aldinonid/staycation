import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      {ReactHtmlParser(data.about)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
          return (
            <div key={index} className="col-3" style={{ marginBottom: 20 }}>
              <img
                src={`${process.env.REACT_APP_HOST}/${feature.image_url}`}
                alt={feature.name}
                className="d-block mb-2"
                width="38"
              />
              <span>{feature.qty}</span>{" "}
              <span className="text-gray-500 font-weight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
