import JsonP from "jsonp";

// 把第三方插件再做一层封装
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: "callback"
            }, function(err, response) {
                if (response.status == "success") {
                    resolve(response);
                } else {
                    reject(response.message);
                }
            });
        });
    }
}