evilSites = [
    'www.upworthy.com'
    // Add more here later. The document source will have to be checked for each.
]

if (evilSites.indexOf(window.location.host) >= 0) {
    videoSource = document.getElementById('content').getElementsByTagName('iframe')[0].src;
    if (videoSource) {
        videoSource = videoSource.replace('embed/', 'watch?v=').replace('rel=*', '');
        window.location.replace(videoSource);
    } else {
        if (confirm("We couldn't find the video. See anyway?")) {
            // Do nothing
        } else {
            window.history.back(-1);
        }
    }
}
