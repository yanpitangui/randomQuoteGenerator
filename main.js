var atualiza = function(){
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=_atualiza&callback=?")
}

var _atualiza = function(data)
{
    if(data)
        $(".texto").html("<blockquote><div id='xD'>" + $(data[0]["content"]).text()+ "</div><cite>"+data[0]["title"]+ "</cite></blockquote>");
    document.getElementById("meuBotao").classList.remove("hidden");
}

var tweet = function()
{
    var url = encodeURI($("#xD").text()+ "\n-"+ $("blockquote.cite").text()+ "\n#randomquotegenerator");
    window.open("https://twitter.com/intent/tweet?text=" + url);
}

$("document").ready(function(){
    atualiza();
    
});




    