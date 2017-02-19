var posts = [
  {text: "Post 1", comments:[
    { text: "Post 1, comment 1!"},
    { text: "Post 1, comment 2!"},
    { text: "Post 1, comment 3!"}
  ]},
  {text: "Post 2", comments:[
    { text: "Post 2, comment 1!"},
    { text: "Post 2, comment 2!"},
    { text: "Post 2, comment 3!"}
  ]},
  {text: "Post 3", comments:[
    { text: "Post 3, comment 1!"},
    { text: "Post 3, comment 2!"},
    { text: "Post 3, comment 3!"}
  ]}
];

var renderPosts = function () {
  $('.posts').empty();

  for (var i = 0; i < posts.length; i += 1) {
    var post = posts[i];

    var commentsContainer = '<div class="comments-container">' + '<div class=comments-list></div>' +
    '<input type="text" class="comment-name">' +
    '<button class="btn btn-primary add-comment">Post Comment</button> </div>';

    $('.posts').append('<div class="post">'
      + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' + post.text +
      commentsContainer + '</div>');
  };
};

var renderComments = function () {
  $('.comments').empty();

  for (var i = 0; i < posts.length; i += 1) {
    var post = posts[i];
    var $post = $('.posts').find('.post').eq(i);

    for(var j = i; j < post.comments.length ; j++){
      var comment = post.comments[j];
      $post.append('<div class="comment">'
      + '<a class="remove">remove</a> '+ post.comments[j].text + '</div>');
    }
  }

};

renderPosts();
renderComments();
