var mongo = new Mongo();
var awms = mongo.getDB("awms");

awms.createCollection("project", null);