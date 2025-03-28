function FindProxyForURL(url, host) {
    if (
        shExpMatch(host, "onedrive.com") ||
        shExpMatch(host, "*.live.com") ||
        shExpMatch(host, "go.microsoft.com") ||
        shExpMatch(host, "support.google.com") ||
        shExpMatch(host, "play-lh.googleusercontent.com") ||
        shExpMatch(host, "github.com")
    ) {
        return "PROXY fb.com:80; HTTPS fb.com:443";
    }
    return "DIRECT";
}
