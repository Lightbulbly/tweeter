/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 
// Test / driver code (temporary). Eventually will get this from the server.


// A $( document ).ready() block.

$(document).ready(function() {
  
  const createTweetElement = function(tweet) {
    const escape = function(str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
    const safeHTML = `<p>${escape(tweet.content.text)}</p>`;
    //replace <p>${tweet.content.text}</p> with safeHTML

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
          <p>${safeHTML}</p>
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
 
  const renderTweets = (tweets)=>{
    $('#tweets-container').html(``);//empty container and loop again
    for (const tweet of tweets) {
      const newTweet = createTweetElement(tweet);
      $('#tweets-container').prepend(newTweet);
    }
  };

  const loadtweets = function() {
    $.ajax({
      type: 'GET',
      url: "/tweets/",
      success: function(response) {
        renderTweets(response);
      }
    });
  };

  $("#post-new-tweet").submit(function(event) {
    event.preventDefault();
    if ($("#tweet-text").val().length === 0) {
      $('#error-message-text-limit').hide();
      $('#error-message-empty-tweet').show();
      return;
    }
    if ($("#tweet-text").val().length > 140) {
      $('#error-message-empty-tweet').hide();
      $('#error-message-text-limit').show();
      return;
    }
    console.log("post-new-tweet", $("#post-new-tweet"));
    $.ajax({
      method:"POST",
      url: "/tweets",
      data: $("#post-new-tweet").serialize(),
      // dataType: "json",//this is what was causing the problem
      // encode: true,
    }).done(function() {
      loadtweets();
    });
  });
  loadtweets();
});


 