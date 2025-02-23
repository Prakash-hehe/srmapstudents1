import React, { Component } from 'react';
import Input from './Input';
import Joi from 'joi-browser';

class Form extends Component {
    state = { 
        data: {},
        errors:{}
    }
    validate = () => {
        const options = { abortEarly: false }
        const { error } = Joi.validate(this.state.data, this.schema, options)
        if (!error) return null;
        const errors = {}
        for (let item of error.details)
            errors[item.path[0]] = item.message
        return errors; 
    }
    validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
    };
    handleChange = ({ currentTarget:input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const data = { ...this.state.data }
        
        data[input.name] = input.value
        this.setState({ data, errors })
    }
    handleSubmit = event => {
        event.preventDefault();
        const errors = this.validate()
        this.setState({ errors:errors || {} })
        if (errors) return;
        
        // call server
        this.doSubmit()
    }
    renderButton(label, classN='lr-btn'){
        return <button className={classN} >{label}</button>
    }
    renderInput(name, placeholder="", classy="input", type = "text") {
        const { data, errors } = this.state;
        
    return (
        <Input
        classy={classy}
        type={type}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        placeholder={placeholder}
      />
    );
  }
}

export default Form;