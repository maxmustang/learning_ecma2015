var odds = [1,2,3].map(v => v + 1)
console.log(odds)


var boddy = { 
    _friends : [],
    _name : "max",
    
    setFriends(friend) {
        this._friends.push(friend)
    },
    
    getFriends() {
        this._friends.forEach( f => 
            console.log("Hey "+ f + " is my friend")
        )
    }
}

boddy.setFriends("Sapo")
boddy.setFriends("Wallace")
boddy.setFriends("Mae")

boddy.getFriends()
