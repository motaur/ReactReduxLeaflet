import React from "react";

interface IProps {
  name: string,
  label: string,
  onChange: any,
  defaultOption: string,
  value: any
  error: string,
  options: any
}

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options
}: IProps) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map((option: { value: string | number | string[] | undefined; text: React.ReactNode; }) => {
            return (
              <option value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default SelectInput;
