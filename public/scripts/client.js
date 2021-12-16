/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 
// Test / driver code (temporary). Eventually will get this from the server.


// A $( document ).ready() block.

$(document).ready(function() {
  // console.log("ready!");

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };
  
  const createTweetElement = function(tweet) {
    const $tweet = $(`
    
    <article>
          <header class="all-tweets-header">
            <div class="user-avatar-and-username">
                          <div class="avatar"><img src="${tweet.user.avatars}"></div>
                          <div class="username">${tweet.user.name}</div>
          </div>
          <div class="tweeterHandle">${tweet.user.handle}</div>
          </header>
          <div class="tweet-text">
          <p>${tweet.content.text}</p>
        </div>
            <footer>
              
              <div class="date-posted">${timeago.format(tweet.created_at)}</div>

              <div class="flag-retweet-like-icons">
                
                <div id="flag-tweet">
                <i class="fas fa-flag"></i>  
                </div>

                <div id="retweet-tweet">
                <i class="fas fa-retweet"></i>  
                </div>

                <div id="like-tweet">
                  <i class="fas fa-heart"></i>
                </div>
              </div>
</footer>
        </article>

    `);
    return $tweet;
  
  };

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  
});


 
 
