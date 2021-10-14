import React from "react";

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ""
    }
    
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPosts(this.state);
  }

  updateKeyword (e) {
    this.setState({ keyword: e.target.value });
  }

  onSubmitSearch(e) {
    e.preventDefault();
    const { history, fetchAllPosts } = this.props;
    console.log(this.state);
    // history.push(`/newsfeed?keyword=${this.state.keyword}`);
    fetchAllPosts(this.state.keyword);
    this.setState({keyword: this.state.keyword});
  }

  render() {
    const { posts } = this.props;
    if (!posts) return null;

    const displayPosts = posts.map((post, i) => {
      let newDate = new Date(post.createdAt);
      const time = newDate.toLocaleTimeString("en-US", {timeZone: "America/Los_Angeles"});
      const date = newDate.toDateString();
      if (i < 19) {
        return (
          <div>
            <img src={post.imageUrl} alt="" width="150px" height="auto" />
            <div>
              {date} {time}
            </div>
            <div>
              {post.caption}
            </div>
          </div>
        )
      }
    });

    return(
      <div>
        <form onSubmit={this.onSubmitSearch}>
          <input
            type="text"
            onChange={(e) => this.updateKeyword(e)}
            value={this.state.keyword}
            placeholder="...Look up a plant"
          />
          <button>Search</button>
        </form>
        { displayPosts }
      </div>
    )
  }
}

export default NewsFeed;