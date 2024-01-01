var person = {
    name: "Daisy",
    age: 32,
    hobbies: ["Drawing", "Reading"]
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person);
