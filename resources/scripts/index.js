var tweets = ["Hey there, this is Big Al", "It's me again", "42-21!!"];
function handleOnLoad(){
    document.getElementById("greets").innerHTML = "I changed you";
}


function setGreets(){
    var html = "<ul>";
    tweets.forEach((tweet)=>{
        html += "<li><div class=\"avatar\"></div><spann>" + tweet + "</spann></li>";
    });
    html += "</ul>";
    document.getElementById("greets").innerHTML = html;
}
function handleOnLoad(){
    setGreets();
}
addPost = function(){
    let postText = document.getElementById("post").value;
    tweets.push(postText);
    setGreets();
/*function handleOnSubmit(){
    addPost();
}*/
}