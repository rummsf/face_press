import React from "react";
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
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      // title: "Arcobat",
      // poet: "Jefferson Toal",
      // image: "https://i.imgur.com/AFmPvTHm.jpg",
      // year: 2012,
      // pages: 16,
      // price: 5,
      // availability: 0,
      // description: "Edition of 200 copies",
      // publisher: "",
      // review: "",
      // contributor: ""
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Title:" />
        <Field name="poet" component={this.renderInput} label="Poet:" />
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
        <Field name="thoughts" component={this.renderInput} label="Thoughts:" />
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
  if (!formValues.thoughts) {
    errors.thoughts = "We would like to know your thoughts";
  }
  return errors;
};

export default reduxForm({
  form: "bookForm",
  validate
})(BookForm);
