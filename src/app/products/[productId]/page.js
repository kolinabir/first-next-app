import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  return (
    <div>
      <h1>This is a dynamic page {params.productId}.</h1>

      <p>Search params: {searchParams.category}</p>
    </div>
  );
};

export default DynamicPage;
