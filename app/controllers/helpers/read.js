"use strict";

require("rootpath")();
var _ = require("lodash");

var ContentModel = require("app/models/content");

module.exports = function(contentType) {
	ContentModel.find({
		"meta.contentType": contentType,
		"meta.deleted": false,
	}, {
		_id: 0,
		uuid: 1,
		"meta.contentType": 1,
		"meta.lastEditor": 1,
		"meta.label": 1,
		"meta.description": 1,
		"meta.lastModified": 1,
	})
	.populate("meta.contentType")
	.populate("meta.lastEditor")
	.lean()
	.exec();
};