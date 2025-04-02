/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import CreatableSelect from "react-select/creatable";

export const ReactSelect = (props) => {
  return (
    <CreatableSelect
      isMulti
      {...props}
      placeholder="Add Tags"
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          border:"2px solid #f1f1f1",
          height: 140,
          alignItems: "flex-start",
          padding:"8px 4px"
        }),
        indicatorsContainer: (baseStyles) => ({
          ...baseStyles,
          display: "none",
        }),
        multiValue: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "black",
          color: "white",
          borderRadius: "40px",
          padding: "0px 8px",
        }),
        multiValueLabel: (baseStyles) => ({
          ...baseStyles,
          color: "white",
        }),
        multiValueRemove: () => ({}),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          fontSize: 14,
        }),
      }}
    />
  );
};
