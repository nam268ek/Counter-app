import React from "react";

class Select extends React.Component {
  render() {
    const { name, label, error, arr, nameProperty, valueProperty,...rest } = this.props;
    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <div className="input-group mb-3">
          <select {...rest} name={name} id={name} className="form-select">
            <option></option>
            {arr.map((name) => (
              <option key={name[nameProperty]} value={name[nameProperty]}>
                {name[valueProperty]}
              </option>
            ))}
            {error && <div className="alert alert-danger">{error}</div>}
          </select>
        </div>
      </div>
    );
  }
}

Select.defaultProps = {
  nameProperty: "_id",
  valueProperty: "name",
};

export default Select;
