const Store = require("./store")

Store = require("./store")
class LogicU {
    constructor() {
        this.storage = new Store({
            configName: "user",
            defaults: ""
        })
    }
}
module.exports = LogicU