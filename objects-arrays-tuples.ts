const student: {
    name: string;
    age: number;
    height: string;
    city: string;
    online: boolean;
    //arrays in TS
    hobies: string[];
    yearsActive: number[];
    //tuples in TS are basically arrays that have a fixed size, 
    //but push() is allowed though,
    //and they are mutable (values can be changed)
    role: [string, number, boolean] // <-- creating a tuple in typescript
} = {
    name: "Jesse",
    age: 25,
    height: "5foot 6", 
    city: "Blantyre",
    online: true,
    hobies: ["Football", "video games", "learning new concepts", "walking"],
    role: ["engineer", 4531, true],
    yearsActive: [2012, 2013, 2019, 2020, 2021, 2022]
}

student.role[1] = 934

console.log(student.role);
