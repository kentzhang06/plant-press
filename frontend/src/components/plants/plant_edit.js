import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { ImLeaf } from "react-icons/im";

class EditPlant extends React.Component {
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
      .updatePlant(this.state)
      .then(this.props.history.push(`/user/${this.props.plant.userId}`));
  }

  render() {
    if (this.props.currentUserId !== this.props.plant.userId) {
      this.props.history.push(`/plant/${this.props.plant._id}`);
    }

    return (
      <main className="flex-col-center">
        <div className="d-flex justify-content-center space-above">
          <Link to="/">
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
          onSubmit={this.handleSubmit}
          id="plant-form"
        >
          <div className="d-flex justify-content-center">
            <h2 className="subtitle">Edit Plant</h2>
          </div>

          <div className="d-flex justify-content-center form-padding">
            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Edit your plant name"
              className="session-input"
            />
          </div>

          <div className="d-flex justify-content-center form-padding form-margin">
            <div className="pos-relative custom-select">
              <div className="d-flex justify-content-center">
                <h3>Edit Plant Type</h3>
              </div>
              <Select
                onChange={this.handleChange}
                options={this.options}
                defaultValue={{
                  label: this.state.type,
                  value: this.state.type,
                }}
                styles={this.customStyles}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center form-padding">
            <input
              type="text"
              value={this.state.species}
              onChange={this.update("species")}
              placeholder="Species (Optional)"
              className="session-input"
            />
          </div>

          <div className="d-flex justify-content-center form-padding">
            <input
              type="text"
              value={this.state.info}
              onChange={this.update("info")}
              placeholder="Short Bio (Optional)"
              className="session-input"
            />
          </div>

          <div className="d-flex justify-content-center form-padding form-margin">
            <button className="session-button">Edit Plant!</button>
          </div>
        </form>
      </main>
    );
  }
}

export default EditPlant;
