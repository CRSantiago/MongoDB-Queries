db.getCollection('planes').aggregate([
    {$match: {ground_speed: {$gte: 1}}},
    {$group: {_id:{aicraft: "$aircraft_id", speed: "$ground_speed"}}},
    {$sort:{"_id.speed":-1}}, 
    {$limit:5}
])