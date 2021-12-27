// mocked data for tests: twoUserData-> last names "Harper" and "Parcker", oneUserData-> 'Porter'
const twoUserData = [
  {
    gender: "male",
    name: { title: "Mr", first: "Sam", last: "Harper" },
    location: {
      street: { number: 2539, name: "Park Road" },
      city: "Newport",
      state: "North Yorkshire",
      country: "United Kingdom",
      postcode: "I99 3XU",
      coordinates: { latitude: "5.4733", longitude: "-154.0670" },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "sam.harper@example.com",
    login: {
      uuid: "d55498a9-ffa5-4ebgdd-950c-4f40155c42ef",
      username: "angrypeacock368",
      password: "freaks",
      salt: "97Ou4RYL",
      md5: "ae02122d89c342c5bba3ae1d5b9f6c80",
      sha1: "229b32765896de4515ea170e7ceaded7fd708f53",
      sha256:
        "fbf0538584731572ecbced41b4cc685959fab5f3283af04b99051f594454704e",
    },
    dob: { date: "1997-07-15T00:40:42.620Z", age: 24 },
    registered: { date: "2006-09-13T12:46:35.466Z", age: 15 },
    phone: "016973 64436",
    cell: "0755-147-017",
    id: { name: "NINO", value: "GA 63 60 47 S" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/2.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/2.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
    },
    nat: "GB",
  },
  {
    gender: "male",
    name: { title: "Mrs", first: "Ann", last: "Parcker" },
    location: {
      street: { number: 2539, name: "Park Road" },
      city: "Newport",
      state: "North Yorkshire",
      country: "United Kingdom",
      postcode: "I99 3XU",
      coordinates: { latitude: "5.4733", longitude: "-154.0670" },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "sam.harper@example.com",
    login: {
      uuid: "d55498a9-ffa5-all4ebd-950c-4f40155c42ef",
      username: "angrypeacock368",
      password: "freaks",
      salt: "97Ou4RYL",
      md5: "ae02122d89c342c5bba3ae1d5b9f6c80",
      sha1: "229b32765896de4515ea170e7ceaded7fd708f53",
      sha256:
        "fbf0538584731572ecbced41b4cc685959fab5f3283af04b99051f594454704e",
    },
    dob: { date: "1997-07-15T00:40:42.620Z", age: 24 },
    registered: { date: "2006-09-13T12:46:35.466Z", age: 15 },
    phone: "016973 64436",
    cell: "0755-147-017",
    id: { name: "NINO", value: "GA 63 60 47 S" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/2.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/2.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
    },
    nat: "GB",
  },
];
const oneUserData = [
  {
    gender: "male",
    name: { title: "Mrs", first: "Kate", last: "Porter" },
    location: {
      street: { number: 2539, name: "Park Road" },
      city: "Newport",
      state: "North Yorkshire",
      country: "United Kingdom",
      postcode: "I99 3XU",
      coordinates: { latitude: "5.4733", longitude: "-154.0670" },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "sam.harper@example.com",
    login: {
      uuid: "d55498a9-ffaons5-4ebd-950c-4f40155c42ef",
      username: "angrypeacock368",
      password: "freaks",
      salt: "97Ou4RYL",
      md5: "ae02122d89c342c5bba3ae1d5b9f6c80",
      sha1: "229b32765896de4515ea170e7ceaded7fd708f53",
      sha256:
        "fbf0538584731572ecbced41b4cc685959fab5f3283af04b99051f594454704e",
    },
    dob: { date: "1997-07-15T00:40:42.620Z", age: 24 },
    registered: { date: "2006-09-13T12:46:35.466Z", age: 15 },
    phone: "016973 64436",
    cell: "0755-147-017",
    id: { name: "NINO", value: "GA 63 60 47 S" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/2.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/2.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
    },
    nat: "GB",
  },
];

export {oneUserData, twoUserData}
