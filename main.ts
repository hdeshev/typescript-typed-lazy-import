declare var require: any;
import * as myModule from "my-module";
import {hello} from "my-module";

function main(): void {
    console.log("main");

    var lazyHello: typeof myModule = require("./my-module");
    lazyHello.hello();

    var h: typeof hello = require("./my-module").hello;
    h();
}

main();
