import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };

    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPosts(this.state).then(() => this.props.fetchFollows());
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }

  updateKeyword(e) {
    this.setState({ keyword: e.target.value });
  }

  onSubmitSearch(e) {
    e.preventDefault();
    const { fetchAllPosts } = this.props;

    fetchAllPosts(this.state.keyword);
    this.setState({ keyword: this.state.keyword });
  }

  followPlantButton(e, plantId) {
    e.preventDefault();
    this.props.followPlant(plantId);
  }

  unfollowPlantButton(e, plantId) {
    e.preventDefault();
    this.props.unfollowPlant(plantId);
  }

  render() {
    const { posts, follows } = this.props;
    if (!posts) return null;

    const followUnfollowButton = (plantId) => {
      if (follows.includes(plantId)) {
        return (
          <button
            className='follow-btn'
            onClick={(e) => this.unfollowPlantButton(e, plantId)}
          >
            Following
          </button>
        );
      } else {
        return (
          <button
            className='follow-btn'
            onClick={(e) => this.followPlantButton(e, plantId)}
          >
            Follow
          </button>
        );
      }
    };

    const displayPosts = posts.map((post, i) => {
      let newDate = new Date(post.createdAt);
      const date = newDate.toDateString();
      if (i > 10) return null;
      return (
        <div className="white-box" key={i}>
          <div className="feed-heading flex-row-between">
            <Link to={`/plant/${post.plantId}`}>
              <p>{post.plantName}</p>
            </Link>
            {followUnfollowButton(post.plantId)}
          </div>
          <div className="img-container">
            <img className="feed-img" src={post.imageUrl} alt="" />
          </div>
          <div className="feed-caption">
            <p className="feed-date">{date}</p>
            <p className="feed-text">
              <Link to={`/user/${post.userId}`}>
                <strong>{post.owner}</strong> <br />
              </Link>
              {post.caption}
            </p>
          </div>
        </div>
      );
    });

    return (
      <main className='flex-col-center search-feed'>
        <form
          className='search-form flex-row-between'
          onSubmit={this.onSubmitSearch}
        >
          <input
            type='text'
            onChange={(e) => this.updateKeyword(e)}
            value={this.state.keyword}
            placeholder='Search'
            className='searchbar'
          />
          <button className='search-btn'>
            <ImSearch />
          </button>
        </form>
        {displayPosts}
      </main>
    );
  }
}

export default withRouter(NewsFeed);
