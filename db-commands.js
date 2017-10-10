 db.locations.save({
 name: 'Cafe Coffee Day',
 address: 'Himayat Nagar Rd, Devi Laxmi Bagh, Domalguda, Himayatnagar, Hyderabad',
 rating: 3,
 facilities: ['Hot drinks', 'Food', 'Premium wifi'],
 coords: [17.4039430,78.4820650],
 openingTimes: [{
    days: 'Monday - Friday',
    opening: '7:00am',
    closing: '7:00pm',
    closed: false
 }, 
 {
    days: 'Saturday',
    opening: '8:00am',
    closing: '5:00pm',
    closed: false
 }, {
    days: 'Sunday',
    closed: true
 }]
})



 db.locations.update({
 name: 'Barista Lavazza'
}, {
 $push: {
   reviews: {
    author: 'Rishi',
    id: ObjectId(),
    rating: 5,
    timestamp: new Date("Sept 12, 2017"),
    reviewText: "What a great place. I can't say enough good things about it."
    }
  }
})

-------------

>  db.locations.save({
...  name: 'StarBucks',
...  address: 'Plot No. S-16, Forum Mall, Opposite Phase 9, Malaysian Township',
...  rating: 3,
...  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
...  coords: [17.4841380,78.3893800],
...  openingTimes: [{
...     days: 'Monday - Friday',
...     opening: '7:00am',
...     closing: '7:00pm',
...     closed: false
...  }, 
...  {
...     days: 'Saturday',
...     opening: '8:00am',
...     closing: '5:00pm',
...     closed: false
...  }, {
...     days: 'Sunday',
...     closed: true
...  }]
... })
WriteResult({ "nInserted" : 1 })
> show collections
locations
> db.locations.find().pretty()
{
	"_id" : ObjectId("59b78e97cb8d2b349a2953bb"),
	"name" : "StarBucks",
	"address" : "Plot No. S-16, Forum Mall, Opposite Phase 9, Malaysian Township",
	"rating" : 3,
	"facilities" : [
		"Hot drinks",
		"Food",
		"Premium wifi"
	],
	"coords" : [
		17.484138,
		78.38938
	],
	"openingTimes" : [
		{
			"days" : "Monday - Friday",
			"opening" : "7:00am",
			"closing" : "7:00pm",
			"closed" : false
		},
		{
			"days" : "Saturday",
			"opening" : "8:00am",
			"closing" : "5:00pm",
			"closed" : false
		},
		{
			"days" : "Sunday",
			"closed" : true
		}
	]
}
> db.locations.update({
...  name: 'StarBucks'
... }, {
...  $push: {
...    reviews: {
...     author: 'Dileep Singh',
...     id: ObjectId(),
...     rating: 5,
...     timestamp: new Date("Sept 12, 2017"),
...     reviewText: "What a great place. I can't say enough good things about it."
...     }
...   }
... })
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>  db.locations.save({
...  name: 'Barista Lavazza',
...  address: 'Block C, Hitech City Main Rd, HITEC City,Hyderabad',
...  rating: 3,
...  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
...  coords: [17.4480110,78.3758190],
...  openingTimes: [{
...     days: 'Monday - Friday',
...     opening: '7:00am',
...     closing: '7:00pm',
...     closed: false
...  }, 
...  {
...     days: 'Saturday',
...     opening: '8:00am',
...     closing: '5:00pm',
...     closed: false
...  }, {
...     days: 'Sunday',
...     closed: true
...  }]
... })
WriteResult({ "nInserted" : 1 })
>  db.locations.save({
...  name: 'Cafe Coffee Day',
...  address: 'Himayat Nagar Rd, Devi Laxmi Bagh, Domalguda, Himayatnagar, Hyderabad',
...  rating: 3,
...  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
...  coords: [17.4039430,78.4820650],
...  openingTimes: [{
...     days: 'Monday - Friday',
...     opening: '7:00am',
...     closing: '7:00pm',
...     closed: false
...  }, 
...  {
...     days: 'Saturday',
...     opening: '8:00am',
...     closing: '5:00pm',
...     closed: false
...  }, {
...     days: 'Sunday',
...     closed: true
...  }]
... })
WriteResult({ "nInserted" : 1 })
>  db.locations.update({
...  name: 'Cafe Coffee Day'
... }, {
...  $push: {
...    reviews: {
...     author: 'Krishna',
...     id: ObjectId(),
...     rating: 5,
...     timestamp: new Date("Sept 12, 2017"),
...     reviewText: "What a great place. I can't say enough good things about it."
...     }
...   }
... })
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.locations.update({
...  name: 'Barista Lavazza'
... }, {
...  $push: {
...    reviews: {
...     author: 'Rishi',
...     id: ObjectId(),
...     rating: 5,
...     timestamp: new Date("Sept 12, 2017"),
...     reviewText: "What a great place. I can't say enough good things about it."
...     }
...   }
... })
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
