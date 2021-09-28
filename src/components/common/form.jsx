import React from "react";
import Joi from "joi-browser";
import Input from "./imput";
import Select from "./select";

class Form extends React.Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const option = { abortEarly: false };
    const errors = {};
    const { error } = Joi.validate(this.state.data, this.schema, option);

    if (!error) return null;
    // for (let item of error.details) errors[item.path[0]] = item.message;

    error.details.forEach((e) => {
      errors[e.path] = e.message;
    });
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //const data = { ...this.state.data };
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  validatePropety = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const data = { ...this.state.data };

    const errorMessage = this.validatePropety(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };
  renderSelect = (name, label, arr) => {
    const { data, errors } = this.state;
    return (
      <Select
        value={data[name]}
        name={name}
        label={label}
        arr={arr}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderInput = (name, label, type) => {
    const { data, errors } = this.state;
    return (
      <Input
        value={data[name]}
        name={name}
        type={type}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
