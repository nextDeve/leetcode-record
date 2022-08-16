/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var map = new Map();
var encode = function (longUrl) {
    if (!map) map = new Map();
    let [prefix, path] = getDomain(longUrl);
    let encodingUrl;
    while (true) {
        encodingUrl = Math.floor(Math.random() * 10 ** 10).toString();
        if (!map.has(encodingUrl)) {
            break;
        }
    }
    map.set(encodingUrl, path)
    console.log(encodingUrl);
    return prefix + encodingUrl
};
/**
 * 
 * @param {String} url 
 */
var getDomain = function (url) {
    let [protocal, rest] = url.split('//')
    let [domain, ...path] = rest.split('/')
    return [`${protocal}//${domain}/`, path.join('/')]
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    let [prefix, path] = getDomain(shortUrl);
    console.log(map);
    return prefix + map.get(path);
};
console.log(decode(encode('https://leetcode.com/problems/design-tinyurl')));

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */