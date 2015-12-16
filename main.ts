declare var require: any;
import * as myModule from "my-module";

function main(): void {
    console.log("main");

    var lazyHello: typeof myModule = require("./my-module");
    lazyHello.hello();
}

main();
