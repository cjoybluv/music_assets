/**
 * ArtistController
 *
 * @description :: Server-side logic for managing artists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  index: function(req,res) {
    Artist.find().then(function(artists){
      res.view('artist/index',{
        artists:artists
      });

    });
  },

  new: function(req,res) {
    res.view('artist/new');
  },

  create: function(req,res) {
    Artist.create({
      name: req.body.name,
      genre: req.body.genre
    }).then(function(artist){
      res.redirect('/artist');
    }).catch(function(err){
      res.send(err);
    });

  },

  edit: function(req,res) {
    Artist.findOne(req.params.id)
    .populate('albums')
    .then(function(artist){
      res.view('artist/show',{artist:artist});
    });
  },

  update: function(req,res) {
    // res.send(req.body);
    Artist.update(
      {id:req.body.id},
      {
        name:req.body.name,
        genre:req.body.genre
      }
      ).then(function(artist){
        res.redirect('/artist');
      }).catch(function(err){
        res.send(err);
      });
  },

  destroy: function(req,res) {
    Artist.destroy({id:req.params.id}).then(function(destroyed){
        res.redirect('/artist');
      }).catch(function(err){
        res.send(err);
      });
  },

  newAlbum: function(req,res) {
    Artist.findOne(req.params.id).then(function(artist){
      res.view('album/new',{artist:artist});
    });
  }

};

