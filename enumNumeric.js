var dir;
(function (dir) {
    dir[dir["North"] = 1] = "North";
    dir[dir["East"] = 2] = "East";
    dir[dir["South"] = 3] = "South";
    dir[dir["West"] = 4] = "West";
})(dir || (dir = {}));
var direction = dir.West;
console.log(direction);
