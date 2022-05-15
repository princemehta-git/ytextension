$(function(){
    $("#name").keyup(function(){
        // $("#greet").text('Hello!! Mr. '+ $("#name").val());
        let url1 = $("#name").val()
        let id = youtube_parser(url1);
        embedded_url = "https://www.youtube.com/embed/" + id;
        loadIframe('ytframe', embedded_url);

    })
});



function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
};

function loadIframe(iframeName, url) {
    var $iframe = $('#' + iframeName);
    if ($iframe.length) {
        $iframe.attr('src',url);
        return false;
    }
    return true;
}


$(function(){
    $("#popout").click(function(){
        let createData = {
            "url" : $('#ytframe').attr('src'),
            "type": "popup",
            "top": 5,
            "left" : 5,
            "width" : screen.availWidth/2,
            "height": screen.availHeight/2
        };
        chrome.windows.create(createData, function(){});
    });
});