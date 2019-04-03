db.getCollection('planes').aggregate([
        {$match: {altitude: {$gte: 15000, $lte:30000}}},
        {$group: {_id:"$aircraft_id", count: {$sum:1}}}
]);