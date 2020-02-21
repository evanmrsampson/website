function revealHeader()
{
    var header = document.getElementById("homepage-header");
    header.getElementsByClassName("pause")[0].style.display = "none";
    header.getElementsByClassName("play")[0].style.display = "block";
    var loading = header.getElementsByClassName("loading")[0];
    loading.style.animation = "fadeOutHeader ease-in 3s 1";
    loading.style.opacity = 0;
    var headerImage = header.getElementsByTagName("img")[0];
    headerImage.style.animation = "fadeInHeader ease-in 3s 1";
    headerImage.style.opacity = 0.75;
    var titles = header.getElementsByClassName("titles")[0];
    titles.style.animation = "fadeInTitle ease-in 4s 1";
    titles.style.opacity = 1;
}