function FindProxyForURL(url, host) {
    if (shExpMatch(host, "onedrive.com|*.live.com|go.microsoft.com|support.google.com|play-lh.googleusercontent.com")) {
        return "PROXY fb.com:443";
    }
    return "DIRECT";
}
