import React from "react";
import { DropdownList } from "react-widgets";
import "react-widgets/dist/css/react-widgets.css";
import { Field, reduxForm } from "redux-form";

class BookForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    console.log("a");
    this.props.onSubmit(formValues);
    console.log("b");
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Title:" />
        <Field
          name="writer"
          component={DropdownList}
          data={this.props.writers.map(writer => writer.name)}
          valueField="value"
          label="Writer:"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Description:"
        />
        <Field name="image" component={this.renderInput} label="Image URL:" />
        <Field
          name="publisher"
          component={this.renderInput}
          label="Publisher:"
        />
        <Field name="review" component={this.renderInput} label="Thoughts:" />
        <Field name="user" component={this.renderInput} label="Who are you?" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "A new book needs a title";
  }
  if (!formValues.description) {
    errors.description = "A new book needs a description";
  }
  if (!formValues.review) {
    errors.review = "We would like to know your thoughts";
  }
  return errors;
};

export default reduxForm({
  form: "bookForm",
  validate
})(BookForm);
