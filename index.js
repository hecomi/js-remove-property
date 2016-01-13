'use strict';

var utils;
var self = this;

exports.removeProperty = function(del_key, elm) {
  var self = this;
  if(elm) {
    delete elm[del_key];
    if(Array.isArray(elm)) {
      elm.forEach(function(sub_elm) {
        self.deleteKey(del_key, sub_elm);
      });
    } else if(typeof elm === 'object') {
      Object.keys(elm).forEach(function(key) {
        if(key !== '__parentArray') {
          if(Array.isArray(elm[key])) {
            elm[key].forEach(function(sub_elm) {
              self.deleteKey(del_key, sub_elm);
            });
          } else if(typeof elm[key] === 'object') {
            self.deleteKey(del_key, elm[key]);
          }
        }
      });
    }
  }
};


