import React from "react";

export default function Loading(Component) {
  return function isLoading({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p style={{ textAlign: "center", fontSize: "30px" }}>Loading...</p>;
  };
}
