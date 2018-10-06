$(document).ready(function(){
    $(".data-search").on("click", function(event){
        event.preventDefault();
        // alert ($("#inputSearch").val());
        // alert ($("#numberofrecords").val());
        // alert("saerch");
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        var input = $("#inputSearch").val();
        url += '?' + $.param({
        'api-key': "18f6498c38d446bba98c7f93f7e54659",
        'q': input
        });
        $.ajax({
        url: url,
        method: 'GET',
        }).then(function(response) {
        // console.log(response.response.docs);
            console.log(response);
            for (var i=0; i<response.response.docs.length; i ++){
                console.log(response.response.docs[i].headline.main);
                console.log(response.response.docs[i].section_name);
                console.log(response.response.docs[i].snippet);
                console.log(response.response.docs[i].web_url);
            };
        // console.log(response.response.docs[1].headline.main);
        // console.log(response.response.docs[1].section_name);
        // console.log(response.response.docs[1].snippet);
        // console.log(response.response.docs[1].web_url);
        var mainDiv = $("<div>");
        var p = ("<p>" + response.response.docs[1].headline.main + "</p>");
        p += ("<p>" + response.response.docs[1].section_name + "</p>");
        p += ("<p>" + response.response.docs[1].snippet + "</p>");
        p += ("<a href=" + response.response.docs[1].web_url + ">" + response.response.docs[1].web_url+ "</a>");

        mainDiv.append(p);
        $(".articles").prepend(mainDiv);
        
        // console.log(result.docs);
        }).fail(function(err) {
        throw err;
        });
    
        
    
    });
    
    $(".data-clear").on("click", function(){
        // alert ($("#numberofrecords").val( ' '));
        $("#inputSearch").val(" ");
        $("#startYear").val(' ');
        $("#endYear").val(' ');
        $("#startYear").val(' ');
        $(".articles").empty();
        // alert("clear");
    });
});


// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// var input = $("#inputSearch").val();
// url += '?' + $.param({
//   'api-key': "18f6498c38d446bba98c7f93f7e54659",
//   'q': input
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).then(function(result) {
//   console.log(result);
//   console.log(result.docs);
// }).fail(function(err) {
//   throw err;
// });
    

    

