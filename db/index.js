// const { MongoClient } = require('mongodb');
import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://chordiproUsers:P4K6bi6c5NMPC7dKgbrZ4AstmSwQMwX@chordipro.0gczx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// This gets all from my server and returns it.

export async function test() {
	client.connect(err => {
		if (err) {
			console.error(err)
		} else {
			const collection = client.db("chordipro").collection("songs");
			collection.find({}).toArray(function (err, result) {
				client.close();
				if (err) {
					console.error(err)
				} else {
					return result;
				}
			})
		}
	});

}