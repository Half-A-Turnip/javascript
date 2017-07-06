var resultArray = [{ "pic": "p1", "score": [{ "j1": 96, "j2": 90, "j3": 60 }] }, { "pic": "p2", "score": [{ "j1": 96, "j2": 90, "j3": 60 }] }, { "pic": "p3", "score": [{ "j1": 96, "j2": 90, "j3": 60 }] }];
var average = [];
for (var key in resultArray) {
    var obj = resultArray[key];
    average[key] = {}
    for (var objkey in obj) {
        if (typeof obj[objkey] === "string") {
            average[key].name = obj[objkey];
        } else {
            var count = 0;

            for (var countArr in obj[objkey]) {
                var num = 0;
                for (var ccArr in obj[objkey][countArr]) {
                    count += parseFloat(obj[objkey][countArr][ccArr]);
                    num++;
                }
                count = count / num
            }
            average[key].mycount = count;
        }
    }
}
console.log(average);