import React from "react";

const CustomForm = ({ handleSubmit, children }) => {
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default CustomForm;
