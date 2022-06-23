// TODO:
// 1. Create a restaurant queue.
// 2. Allow people to enter queue
// 3. First come first served for seating
// 4. Seat parties of 1-6 people.
// 5. Parties can leave queue at any time.

// Restate the Problem:
// - Create a fifo data structure (array)
// - Use built in array methods

// Clarifying Questions:
// - Should we have a name assoc. with the party? => true
// - Should party size be accoc. w/ the party? => true
// - Seating a party === dequeuing => true
// - Is leaving the line early === dequeuing? => true
// - Can we assume groups are max 6? => false (VERY GOOD Q) => reject groups > 6
// - How will this system be represented/utilized => set of functions that can be called by external source => API.
// - Are we limited in space? => true => Mutate our queue, DO NOT create a new object (Array).
// - Is the queue size limited? => true => 100.
// - Can we assume the same party will not enqueue more than once => true HOWEVER we must assure that users do not duplicate parties.
// - How do we handle same name, different party => assign a unique id. (resolves line 21).

// - What do we want to return from these functions?

/**
 * party = {
 *  name: name
 * size: size
 * }
 */

let id = 0;

const queue = [];

const addPartyToLine = (party) => {
    if (party.size > 0 && party.size <= 6) {
        // console.log("ID :", id, "\nname: ", party.name, "\nsize: ", party.size, "\n")
        id++
        queue.push({ id, ...party });

    }
    else {
        console.log("party size must be greater than 0 but less than 6")
    }
    // return on failure (some error code)



};

const seatParty = () => {
    queue.shift()
};

const removePartyFromLine = (party) => {
    // return failure (some error code)
};

const party1 = {
    name: "Philip",
    size: 1
};

const party2 = {
    name: "Skywalker",
    size: 3
}

const party3 = {
    name: "Batman",
    size: 2
}

const party4 = {
    name: "test",
    size: 7
}

// console.log(queue)
addPartyToLine(party1)
addPartyToLine(party2)
// console.log(queue)

seatParty();

addPartyToLine(party4)//should fail
// console.log(queue)
addPartyToLine(party3)
console.log(queue)
