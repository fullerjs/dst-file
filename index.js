"use strict";

module.exports = function(f, mat, options, next) {
	mat.write(options);
	next(null, mat);
};
