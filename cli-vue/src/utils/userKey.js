/**
 * [userKey.js] encoding=utf8
 * 
 */

const userKey = {
    /**
     * Get the URL parameter value
     * ref. https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
     *
     * @param  name {string} パラメータのキー文字列
     * @return  url {url} 対象のURL文字列（任意）
     */
    'getTargetUserFromUrlSearch' : function (name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[[\]]/g, "\\$&"); // ToDo:この辺、コピペ。

        const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
        const results = regex.exec(url);
        if (!results){
            return null;
        }
        if (!results[2]){
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
};

export { userKey as default };
