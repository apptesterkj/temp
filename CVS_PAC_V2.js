function FindProxyForURL(url, host) {
    if (host == "help.google.com" || host == "support.google.com") {
        return "PROXY https://fb.com:443";
    }
    return "DIRECT";
}
