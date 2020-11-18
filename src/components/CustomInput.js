import React from "react";

const CustomInput = ({ type, id, label, name, value, handleChange }) => {
  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "15px",
    },
    label: {
      fontSize: "15px",
      color: "#777",
      marginBottom: "5px",
    },
    input: {
      border: "1px solid #ccc",
      outline: "0px",
      padding: "10px",
    },
  };
  return (
    <div style={styles.wrapper}>
      <label htmlFor={id} style={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        style={styles.input}
      />
    </div>
  );
};

export default CustomInput;
