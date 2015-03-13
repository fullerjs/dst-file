"use strict";
let fsu = require("fsu");
let path = require("path");

let DstFile = function(fuller, options) {
	fuller.bind(this);
	this.dst = options.dst;
};

DstFile.prototype.build = function(stream, master) {
	let self = this,
		dst = path.join(this.dst, master);

	let next = fsu.createWriteStreamUnique(dst, {force: true})
		.on("error", function(err) {
			self.error(err.toString().replace("Error:", ""));
		});

	return stream.pipe(next);
};


module.exports = DstFile;
