/**
 * AlbumController
 *
 * @description :: Server-side logic for managing albums
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function(req,res) {
    // res.send(req.body);
    Album.create({
      name: req.body.name,
      artist: req.body.artistId
    }).then(function(album){
      res.redirect('artist/'+album.artist);
    }).catch(function(err){
      res.send(err);
    });
  }

};

