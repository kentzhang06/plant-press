import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { ImLeaf } from "react-icons/im";

class PlantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.plant;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.options = [
      { value: "Fern", label: "Fern" },
      { value: "Flowering", label: "Flowering" },
      { value: "Foliage", label: "Foliage" },
      { value: "Succulent", label: "Succulent" },
      { value: "Tree", label: "Tree" },
      { value: "Unknown", label: "Unknown" },
      { value: "Unusual", label: "Unusual" },
    ];
    this.customStyles = {
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? "purple" : "green",
        backgroundColor: state.isSelected ? "lightgreen" : "white",
      }),
    };
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleChange = (selectedOption) => {
    this.setState({ type: selectedOption.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createPlant(this.state)
      .then(() => this.props.history.push(`/user/${this.props.currentUserId}`));
  }

  render() {
    let { name, info, species } = this.state;

    return (
      <main className="flex-col-center">
        <div className="d-flex justify-content-center space-above">
          <Link to="/dashboard">
            <h1 className="darkgreen">
              PlantPress
              <span className="leaf-icon">
                <ImLeaf />
              </span>
            </h1>
          </Link>
        </div>

        <form
          className="white-box flex-col-center"
          id="plant-form"
          onSubmit={this.handleSubmit}
        >
          <div className="d-flex justify-content-center">
            <h2 className="subtitle">Add a New Plant</h2>
          </div>

          <div className="d-flex justify-content-center form-padding">
            <input
              type="text"
              value={name}
              onChange={this.update("name")}
              placeholder="Name Your Plant"
              className="session-input"
            />
          </div>

          <div className="d-flex justify-content-center form-padding form-margin">
            <div className="pos-relative custom-select">
              <div className="d-flex justify-content-center">
                <h3>Add Plant Type</h3>
              </div>
              <Select
                onChange={this.handleChange}
                options={this.options}
                styles={this.customStyles}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center form-padding">
            <input
              type="text"
              value={species}
              onChange={this.update("species")}
              placeholder="Species (Optional)"
              className="session-input"
            />
          </div>

          <div className="d-flex justify-content-center form-padding">
            <input
              type="text"
              value={info}
              onChange={this.update("info")}
              placeholder="Short Bio (Optional)"
              className="session-input"
            />
          </div>

          <div className="flex-row-center">
            <button className="session-button">Add Plant!</button>
          </div>
        </form>
      </main>
    );
  }
}

export default PlantForm;
