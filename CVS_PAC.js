function FindProxyForURL(url, host) {
    // Block specific domains by returning proxy for them
    if (shExpMatch(host, "streetviewpixels-pa.googleapis.com") ||
        shExpMatch(host, "*.googlevideo.com") ||
        shExpMatch(host, "www.google.com") ||
        shExpMatch(host, "*.googleusercontent.com")) {
        return "PROXY 127.0.0.1";
    }

    // Allow all other traffic to go through directly
    return "DIRECT";
}
