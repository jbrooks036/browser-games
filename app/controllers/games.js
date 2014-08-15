'use strict';

exports.colors = function(req, res){
  res.render('games/colors');
};

exports.painter = function(req, res){
  res.render('games/painter');
};

exports.pacman = function(req, res){
  res.render('games/pacman');
};

