```javascript
//Correct usage of $inc operator with default value
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:1},$setOnInsert:{counter:0}});
```