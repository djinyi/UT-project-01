const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: "Daisy",
    age: 32,
    hobbies: ["Drawing", "Reading"],
    role: [2, "author"]
}

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

console.log(person)