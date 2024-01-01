enum Role { ADMIN, READ_ONLY, AUTHOR };

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role
} = {
    name: "Daisy",
    age: 32,
    hobbies: ["Drawing", "Reading"],
    role: Role.ADMIN
}

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

console.log(person)