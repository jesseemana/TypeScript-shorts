//enums in TS are basically custom types (user defined)
//they must always start with a capital letter
//the enums are mostly uppercase bby convention but it's not mandatory
enum Role { ADMIN, READ_ONLY, AUTHOR }

// you can change the behaviour by also initializing the values  with your preferred values of choice
enum Privilege  { LOGGED_IN = "user", STATUS = "online", ADMIN = "jesse" }

const person = {
    name: "Jesse",
    id: 1234,
    password: "@1234jesse_",
    active: true,
    role: Role.ADMIN
}

if (person.role === Role.ADMIN) {
    console.log("is admin");
}
