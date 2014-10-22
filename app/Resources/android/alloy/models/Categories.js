var Alloy = require('alloy'),
    _ = require("alloy/underscore")._,
	model, collection;

exports.definition = {
	config: {
		columns: {
		    "title": "string",
		    "description": "string",
		    "image": "string",
		    "icon": "string"
		},
		adapter: {
			type: "acs",
			collection_name: "categories"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};

model = Alloy.M('categories',
	exports.definition,
	[]
);

collection = Alloy.C('categories',
	exports.definition,
	model
);

exports.Model = model;
exports.Collection = collection;
