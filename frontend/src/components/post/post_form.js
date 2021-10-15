import React from 'react';
import { uploadImage } from '../../actions/post_actions';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      imageUrl: "",
      caption: "",
      file: "",
      userId: this.props.currentUserId,
      plantId: this.props.match.params.plantId
    }
    
    this.handleImageSubmit = this.handleImageSubmit.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.fileSelected = this.fileSelected.bind(this);
  }

  componentDidMount() {
    const { fetchPlantPosts, formType, match } = this.props;

    if (formType === 'Update Post') {
      fetchPlantPosts(match.params.plantId)
        .then(() => {

          this.setState(this.props.post);
          this.setState( {id: match.params.postId} );
        })
    }
  }

  async handleImageSubmit(e) {
    e.preventDefault();
    const {file, description} = this.state;
    let result = null;

    if (file) {
      result = await uploadImage({image: file, description});
      this.setState( {imageUrl: `/api/uploads/${result.imagePath}`} )
    }
  }

  fileSelected(e) {
    const file = e.target.files[0];
		this.setState( {file: file} );
	}

  setCaption (e) {
    this.setState({ caption: e.target.value });
  }

  handlePostSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state);
  }

  render () {
    const { imageUrl, caption } = this.state;
    const { formType } = this.props;

    const displayImage = (imageUrl) ?
      <img src={imageUrl} alt="" width="400px" height="400px"></img>
      : 
      <div></div>;

    const displayImageButton = (formType === 'Create Post') ?
      <div>
        <input onChange={this.fileSelected} type="file" accept="image/*"></input>
        <br/><br/>
        <button type="submit">Upload Image</button>
      </div>
      :
      <div></div>;

    return(
      <div>
        <form onSubmit={this.handleImageSubmit}> 
          <input onChange={e => this.setCaption(e)} type="text" value={caption} placeholder="...Enter a caption"></input>
          <br/><br/>
          { displayImageButton }
        </form>

        <button onClick={this.handlePostSubmit}> Create Post </button>

        { displayImage }
      </div>
    )
  }
}

export default PhotoForm;