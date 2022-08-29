let sc = "https://source.unsplash.com/720x1080";

gen();

//document.getElementById("download").addEventListener("click", doDown);
document.getElementById("generate").addEventListener("click", re);

function gen() {
    document.body.style.background = "url('" + sc + "') no-repeat fixed center";
	document.body.style.backgroundSize = "cover";
    document.getElementById("random-wallpaper").style.background = "url('" + sc + "')";
}

function re() {
    location.reload();
}
