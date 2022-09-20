var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"],
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"],
    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"],
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknown",
        "likes": ["Javascript", "Node", "HTML & CSS"],
    },
];

function lookUpProfile(name, prop) {
    var profile = contacts;
    var look = prop;
    var notIn = 0;
    for (i = 0; i < profile.length; i++) {
        if (profile[i].firstName === name) {
            if (profile[i][look] === undefined) {
                return "No such property";
            }
            return profile[i][look];
        } else {
            notIn += 1;
        }
    }
    if (notIn === profile.length) {
        return "No such contact";
    }
}
lookUpProfile("John", "address");
console.log(lookUpProfile("John", "address"));
module.exports = lookUpProfile;
