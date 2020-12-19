import React from "react";

export const DetailComponent = ({ Title, Poster, information }) => {
  const infoRender = [];
  for (const [key, value] of Object.entries(information)) {
    infoRender.push(
      <li key={key}>
        <div className="key">{key}: </div>
        <div className="value">{value}</div>
      </li>
    );
  }
  return (
    <div className="detail-container">
      <div>
        <img src={Poster} alt={Title} />
      </div>
      <ul>{infoRender}</ul>
    </div>
  );
};
