const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    people.forEach( (person) => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = currentYear;
        }
    })

    const sortedbyOldest = people.sort( (a, b) => {

        const aLifetime = a.yearOfDeath - a.yearOfBirth;
        const bLifetime = b.yearOfDeath - b.yearOfBirth;
        if (aLifetime < bLifetime) {
            return 1;
        } else {
            return -1;
        }
    } )
    return sortedbyOldest[0]
}



// Do not edit below this line
module.exports = findTheOldest;
