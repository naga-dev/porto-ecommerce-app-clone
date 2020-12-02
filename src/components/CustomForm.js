import React from "react";

const CustomForm = ({ handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {children}
    </form>
  );
};

export default CustomForm;
