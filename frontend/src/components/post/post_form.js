import React from "react";
import { uploadImage } from "../../actions/post_actions";
import { Link } from "react-router-dom";
import { ImLeaf } from "react-icons/im";

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
      caption: "",
      file: "",
      userId: this.props.currentUserId,
      plantId: this.props.match.params.plantId,
    };

    this.handleImageSubmit = this.handleImageSubmit.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.fileSelected = this.fileSelected.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    const { fetchPlantPosts, formType, match } = this.props;

    if (formType === "Update Post") {
      fetchPlantPosts(match.params.plantId).then(() => {
        this.setState(this.props.post);
        this.setState({ id: match.params.postId });
      });
    }
  }

  componentWillUnmount() {
    this.props.clearPostErrors();
  }

  async handleImageSubmit(e) {
    e.preventDefault();
    const { file, description } = this.state;
    let result = null;

    if (file) {
      result = await uploadImage({ image: file, description });
      this.setState({ imageUrl: `/api/uploads/${result.imagePath}` });
    }
  }

  fileSelected(e) {
    const file = e.target.files[0];
    this.setState({ file: file });
  }

  setCaption(e) {
    this.setState({ caption: e.target.value });
  }

  handlePostSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state)
      .then(() => {
        if (this.state.imageUrl) {
          this.props.clearPostErrors();
          this.props.history.push(`/newsfeed`);
        }
      })
  }

  renderErrors() {
    return (
      <div className="row">
        <ul className="session-errors">
          {Object.keys(this.props.errors).map((error, i) => (
            <li key={`error-${i}`}>{this.props.errors[error]}</li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { imageUrl, caption } = this.state;
    const { formType } = this.props;

    const displayImage = imageUrl ? (
      <div className="d-flex justify-content-center form-padding">
        <img src={imageUrl} alt="" width="400px" height="400px"></img>
      </div>
    ) : (
      <div></div>
    );

    const displayImageButton =
      formType === "Create Post" ? (
        <div>
          <div
            className="d-flex justify-content-center form-padding form-margin"
            id="form-text-tips"
          >
            1. Choose an image file
          </div>
          <div className="d-flex justify-content-center form-padding form-margin">
            <input
              className="session-button"
              onChange={this.fileSelected}
              type="file"
              accept="image/*"
              required
            ></input>
          </div>
          <div
            className="d-flex justify-content-center form-padding form-margin"
            id="form-text-tips"
          >
            2. Click 'Upload Image'
          </div>
          <div className="d-flex justify-content-center form-padding form-margin">
            <button className="session-button" type="submit">
              Upload Image
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      );

    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center space-above">
          <Link to="/dashboard">
            <h1 className="title">
              PlantPress
              <span className="leaf-icon">
                <ImLeaf />
              </span>
              &nbsp;&nbsp;
            </h1>
          </Link>
          &nbsp;&nbsp;
        </div>
        <form className="session-form" onSubmit={this.handleImageSubmit}>
          {displayImageButton}
          {displayImage}
          <div className="d-flex justify-content-center form-padding">
            <input
              onChange={(e) => this.setCaption(e)}
              type="text"
              value={caption}
              placeholder="...Enter a caption (optional)"
              className="session-input"
            />
          </div>
        </form>
        <div
          className="d-flex justify-content-center form-padding form-margin"
          id="form-text-tips"
        >
          Click '{formType}'
        </div>

        <div className="d-flex justify-content-center form-padding form-margin">
          <button onClick={this.handlePostSubmit} className="session-button">
            {" "}
            {formType}{" "}
          </button>
        </div>
        {this.renderErrors()}
        <div className="row-end"></div>
      </div>
    );
  }
}

export default PhotoForm;
