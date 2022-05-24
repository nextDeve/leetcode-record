/**
* Definition for read4()
* 
* @param {character[]} buf4 Destination buffer
* @return {number} The number of actual characters read
* read4 = function(buf4) {
*     ...
* };
*/

/**
* @param {function} read4()
* @return {function}
*/
var solution = function (read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function (buf, n) {
        let readFlag = true;
        while (readFlag) {
            let readbuf = [];
            let readl = read4(readbuf);
            if (readl === 0) readFlag = false;
            for (let i = 0; i < readl; i++) {
                if (buf.length === n) {
                    readFlag = false;
                    break;
                }
                buf[buf.length] = readbuf[i]
            }
        }
        return buf.length;
    };
};