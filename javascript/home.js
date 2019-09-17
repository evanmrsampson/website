function revealHeader()
{
    var header = document.getElementsByTagName("header")[0];
    var loading = header.getElementsByClassName("loading")[0];
    loading.style.animation = "fadeOutHeader linear 2s 1";
    loading.style.opacity = 0;
    var headerImage = header.getElementsByTagName("img")[0];
    headerImage.style.animation = "fadeInHeader linear 1s 1";
    headerImage.style.opacity = 0.75;
    var titles = header.getElementsByClassName("titles")[0];
    titles.style.animation = "fadeInTitle 4s 1";
    titles.style.opacity = 1;
}