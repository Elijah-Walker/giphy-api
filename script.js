
topics = ["Life is Strange", "The Last of Us"];

// $.each(topics, document.createElement("BUTTON"));


$("#buttons").on("click", function() {

    var api_key = "api_key=RIljSjlAAG38a8qV3RQvuUkGoK771MSV";
    var game = $(this).attr("data-game");

    var queryURL = "https://api.giphy.com/v1/gifs/random?" + api_key + "&tag=" + "game";


    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          var results = response.data;

            var imageUrl = response.data.image_original_url;
            var gameImage = $("<img>");

            gameImage.attr("src", imageUrl);
            gameImage.attr("alt", "video game image");

            $("#gifs-here").prepend(gameImage);

            // can't find the rating location?!?
            // var rating = response.data.rating;
            // console.log(rating);
            // var p = $("<p>").text("Rating: " + rating);

        });
  });