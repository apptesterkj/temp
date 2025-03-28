function FindProxyForURL(url, host) {
    if (shExpMatch(host, "onedrive.com|*.live.com|go.microsoft.com|support.google.com|play-lh.googleusercontent.com|github.com")) {
        return "PROXY fb.com:80; HTTPS fb.com:443
    }
    return "DIRECT";
}
