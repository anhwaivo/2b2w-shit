const { compile } = require("nexe");
const pack = require("./package.json");
const fs = require("fs");
const util = require("./util");
util.mkdir("nexe-conf");
fs.copyFileSync("config/default.json", "nexe-conf/default.json");

build("windows-x64");

function build(platform) {
	compile({
		input: "cli.js",
		resources: ["webserver/index*", "nexe-conf", "node_modules/discord.js/src", "node_modules/particles.js/particles.js", "node_modules/particles.js/demo/js/app.js"],
		name: `build/2bored2wait-${platform}-${pack.version}`,
		target: `${platform}-14.15.3`
	});
}
