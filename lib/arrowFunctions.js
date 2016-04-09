"use strict";

var odds = [1, 2, 3].map(function (v) {
    return v + 1;
});
console.log(odds);

var boddy = {
    _friends: [],
    _name: "max",

    setFriends: function setFriends(friend) {
        this._friends.push(friend);
    },
    getFriends: function getFriends() {
        this._friends.forEach(function (f) {
            return conole.log("Hey ${f} is my friend");
        });
    }
};

boddy.setFriends("Sapo");
boddy.setFriends("Wallace");
boddy.setFriends("Mae");

boddy.getFriends();