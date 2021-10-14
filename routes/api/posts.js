const express = require('express');
const router = express.Router();
const passport = require('passport');
const Post = require('../../models/Post');
const Plant = require('../../models/Plant');
const validatePostInput = require('../../validation/posts');

router.get('/plants/:plantId', (req, res) => {
  Post.find( {plantId: req.params.plantId} )
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(404).json({ noPostFound: 'No posts found from this plant'})
    );
});

router.get('/index', (req, res) => {

  Plant.find({
      $or:[
        {"name": {'$regex': req.query.keyword, '$options': 'i'}},
        {"type": {'$regex': req.query.keyword, '$options': 'i'}},
        {"info": {'$regex': req.query.keyword, '$options': 'i'}},
        {"species": {'$regex': req.query.keyword, '$options': 'i'}}
      ]})
    .then(plants => {
      let relativePosts = [];
      plants.forEach(plant => {
        relativePosts = Object.assign(relativePosts, plant.plantPosts);
      });

      Post.find({
        _id: { $in: relativePosts }
      }).then(posts => res.json(posts))

    });

});

router.post('/:plantId/create',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const { errors, isValid} = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      plantId: req.params.plantId,
      userId: req.user.id,
      caption: req.body.caption,
      imageUrl: req.body.imageUrl
    });

    
    let postObj = null;
    newPost.save()
      .then(post => {
        
        postObj = post.toJSON();
        
        Plant.findOneAndUpdate(
          { _id: req.params.plantId },
          {
            $push: { plantPosts: postObj._id }
          }
        ).then(() => res.json(post))
        .catch(err => res.json(err));
        
      })
  }
);

router.patch('/:postId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid} = validatePostInput(req.body);

    if (!isValid) {
      return res.status(422).json(errors);
    }

    Post.findOneAndUpdate(
      { _id: req.params.postId },
      {
        caption: req.body.caption
      },
      { new: true }
    )
    .then(post => {return res.json(post)})
    .catch(err => {res.json(err)});

  }
);

router.delete('/:postId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Post.findByIdAndDelete(req.params.postId)
      .then(post => res.json(post.id))
      .catch(err => res.status(404).json({ noPostFound: "This post does not exist"}))
  }
);

module.exports = router;