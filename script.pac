$ cat ~/.pac
// -*-javascript-*-
// ~/.pac: Proxy Auto-Config file

var tor = "SOCKS5 localhost:9050";

var censoredHosts = ["dreamwidth.org",
                     "archive.org",
                     "lj.rossia.org"]


function FindProxyForURL(url, host)
{

    if (dnsDomainIs(host, ".onion"))
        return tor;

    for (var censoredHost of censoredHosts) {
        if (host === censoredHost || dnsDomainIs(host, "." + censoredHost))
            return tor;
    }

    return "DIRECT";
}
