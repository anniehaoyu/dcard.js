// Demo program for Dcard data retriever.
// Author: John-Lin(https://github.com/John-Lin), lockys(https://github.com/lockys)
// For all forum name refer to:
// https://github.com/lockys/0card/blob/master/dacrdAPI.md#forum-list
var DcardJS = require('dcard');
var dcard = new DcardJS();

/**
 * Get Dcard Posts ID by forum name and forum page number
 * @param {String} forum name
 * @param {Number} forum page number
 * @return {Number} post ID Number
 */

dcard.getPostIdByForum('funny', 4, function(err, postArr) {
  if (!err) {
    for (var i = 0, len = postArr.length; i < len; i++) {
      console.log('[Title] ' + postArr[i].title + ', [gender] ' + postArr[i].gender + ', [school] ' + postArr[i].school + ', [department] ' + postArr[i].department);
    }
  } else {
    console.log(err);
  }
});
