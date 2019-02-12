import React from "react";

class DropDownSelect extends React.Component {
  renderSelectOptions = writer => (
    <option key={writer} value={writer}>
      {writer}
    </option>
  );

  render() {
    const { input } = this.props;
    return (
      <div>
        <select {...input}>
          <option value="">Select</option>
          {this.props.writers.map(this.renderSelectOptions)}
        </select>
      </div>
    );
  }
}

DropDownSelect.propTypes = {
  writers: React.PropTypes.array,
  input: React.PropTypes.object,
  label: React.PropTypes.string
};

export default DropDownSelect;
