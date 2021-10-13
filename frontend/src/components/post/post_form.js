import React from 'react';
import { uploadImage } from '../../actions/post_actions';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
      caption: "",
      file: ""
    }

    this.handleImageSubmit = this.handleImageSubmit.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.fileSelected = this.fileSelected.bind(this);
  }

  async handleImageSubmit(e) {
    e.preventDefault();
    const {file, description} = this.state;
    const result = await uploadImage({image: file, description});
    console.log(result);
    this.setState( {imageUrl: result.imagePath} )
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
    this.props.createPost(this.state);
  }

  render () {
    const { imageUrl, caption } = this.state;
    const displayImage = (imageUrl) ?
      <img src={`/api/uploads/${imageUrl}`} alt="" width="400px" height="400px"></img>
      : 
      <div></div>;

    return(
      <div>
        <form onSubmit={this.handleImageSubmit}> 
          <input onChange={e => this.setCaption(e)} type="text" value={caption} placeholder="...Enter a caption"></input>
          <br/><br/>
          <input onChange={this.fileSelected} type="file" accept="image/*"></input>
          <br/><br/>
          <button type="submit">Upload Image</button>
        </form>

        <button onClick={this.handlePostSubmit}> Create Post </button>

        { displayImage }
      </div>
    )
  }
}

export default PhotoForm;