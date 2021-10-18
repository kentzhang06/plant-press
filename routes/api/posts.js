const express = require('express');
const router = express.Router();
const passport = require('passport');
const Post = require('../../models/Post');
const Plant = require('../../models/Plant');
const User = require('../../models/User')
const validatePostInput = require('../../validation/posts');

router.get('/plants/:plantId', (req, res) => {
  Post.find( {plantId: req.params.plantId} )
    .sort({updatedAt: -1})
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
        relativePosts.push(...plant.plantPosts);
      });

      Post.find({
        _id: { $in: relativePosts }
      })
      .sort({updatedAt: -1})
      .then(posts => res.json(posts))
      

    });

});

router.get('/following', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Post.find({
      plantId: { $in : req.user.plantsFollowed } 
    })
    .sort({updatedAt: -1})
    .then(posts => res.json(posts))
    .catch(err => res.json({noPosts: "No posts found"}))
  })

router.post('/:plantId/create',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const { errors, isValid} = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Plant.findOne({ id: req.params.plantId })
      .then(plant => {

        const newPost = new Post({
          plantId: req.params.plantId,
          plantName: plant.name,
          userId: req.user.id,
          owner: req.user.handle,
          caption: req.body.caption,
          imageUrl: req.body.imageUrl
        });
        
        console.log(newPost)
    
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
    )
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