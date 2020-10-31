function id() {
    return Math.floor(new Date().getTime() + Math.random() * 1e6).toString(36);
  }


const animals = [
     {
                name: 'Polar Bear',
                id: id(),
                imageLink: './img/polar_bear.jpg',
                pictures: ['../img/polar_bear_1.jpg', '../img/polar_bear_2.jpg'],
                pageLink: '/polar_bear.html',
                fact: 'Under their white fur, polar bears have black skin.',
                characteristics: {
                    'COMMON NAME': 'Polar Bear',
                    'SCIENTIFIC NAME': 'Ursus maritimus',
                    'TYPE': 'Mammals',
                    'DIET': 'Carnivore',
                    'AVERAGE LIFE SPAN IN THE WILD': '25 to 30 years',
                    'SIZE': 'Head and body: 7.25 to 8 feet; tail: 3 to 5 inches',
                    'WEIGHT': '900 to 1,600 pounds',
                    'SIZE RELATIVE TO A 6-FT MAN': ''
                }
            },
    {
                name: 'African Elephant',
                id: id(),
                imageLink: './img/african_elephant.jpg',
                pictures: ['../img/elephant_1.jpg', '../img/elephant_2.jpg', '../img/elephant_3.jpg'],
                pageLink: '/african_elephant.html',
                fact: 'Elephants are the largest land animals.',
                characteristics: {
                    'COMMON NAME': 'African elephants',
                    'SCIENTIFIC NAME': 'Loxodonta africana',
                    'TYPE': 'Mammals',
                    'DIET': 'Herbivore',
                    'GROUP NAME': 'Herd',
                    'AVERAGE LIFE SPAN IN THE WILD': 'Up to 70 years',
                    'SIZE': 'Height at the shoulder, 8.2 to 13 feet',
                    'WEIGHT': '2.5 to seven tons',
                    'SIZE RELATIVE TO A 6-FT MAN': ''
                }
            },
     {
                name: 'Penguins',
                id: id(),
                imageLink: './img/penguin.jpg',
                pictures: ['../img/penguin1.jpg', '../img/penguin2.jpg', '../img/penguin3.jpg'],
                pageLink: '/penguins.html',
                characteristics: {
                    'COMMON NAME': 'Penguins',
                    'SCIENTIFIC NAME': 'Spheniscidae',
                    'TYPE' : 'Birds',
                    'DIET': 'Carnivore',
                    'GROUP NAME': 'Colony',
                    'AVERAGE LIFE SPAN': '15-20 years',
                    'SIZE': '16-45 inches',
                    'WEIGHT': '2-88 pounds'
                }
            },
    {
                name: 'Jaguar',
                id: id(),
                imageLink: './img/jaguar.jpg',
                pictures: ['../img/jaguar2.jpg', '../img/jaguar3.jpg', '../img/jaguar4.jpg', '../img/jaguar1.jpg'],
                pageLink: '/jaguar.html',
                characteristics: {
                    'COMMON NAME': 'Jaguars',
                    'SCIENTIFIC NAME': 'Panthera onca',
                    'TYPE': 'Mammals',
                    'DIET': 'Carnivore',
                    'AVERAGE LIFE SPAN IN THE WILD': '12 to 15 years',
                    'SIZE': 'Head and body, five to six feet; tail, 27.5 to 36 inches',
                    'WEIGHT': '100 to 250 pounds',
                    'SIZE RELATIVE TO A 6-FT MAN': ''
                }
            },
     {
                name: 'Bald Eagle',
                id: id(),
                imageLink: './img/bald_eagle.jpg',
                pictures: ['../img/eagle1.jpg', '../img/eagle2.jpg'],
                pageLink: '/bald_eagle.html',
                fact: 'The bald eagle has a wingspan of 8 feet.',
                characteristics: {
                    'COMMON NAME': 'Bald Eagle',
                    'SCIENTIFIC NAME': 'Haliaeetus leucocephalus',
                    'TYPE': 'Birds',
                    'DIET': 'Carnivore',
                    'AVERAGE LIFE SPAN IN THE WILD': 'Up to 28 years',
                    'SIZE': 'Body: 34 to 43 inches; wingspan: 6 to 8 feet',
                    'WEIGHT': '6.5 to 14 pounds',
                    'SIZE RELATIVE TO A 6-FT MAN': ''
                }
            },
    {
                name: 'Artic Fox',
                id: id(),
                imageLink: './img/artic_fox.jpg',
                pictures: ['../img/artic_fox_1.jpg', '../img/artic_fox_2.jpg', '../img/artic_fox_3.jpg'],
                pageLink: '/artic_fox.html',
                characteristics: {
                    'COMMON NAME': 'Arctic Fox',
                    'SCIENTIFIC NAME': 'Vulpes lagopus',
                    'TYPE': 'Mammals',
                    'DIET': 'Omnivore',
                    'GROUP NAME': 'Skulk, leash',
                    'AVERAGE LIFE SPAN IN THE WILD': '3 to 6 years',
                    'SIZE': 'Head and body: 18 to 26.75 inches; tail: up to 13.75 inches',
                    'WEIGHT': '6.5 to 17 pounds',
                    'SIZE RELATIVE TO A 6-FT MAN': ''
                }
            },
    {
                name: 'Koala',
                id: id(),
                imageLink: './img/koala.jpg',
                pictures: ['../img/koala_1.jpg', '../img/koala_2.jpg', '../img/koala_3.jpg'],
                pageLink: '/koala.html',
                fact: 'Koalas often return to trees they consider their territory.',
                characteristics: {
                    'COMMON NAME': 'Koala',
                    'SCIENTIFIC NAME': 'Phascolarctos cinereus',
                    'TYPE': 'Mammals',
                    'DIET': 'Herbivore',
                    'AVERAGE LIFE SPAN IN THE WILD': '20 years',
                    'SIZE': '23.5 to 33.5 inches',
                    'WEIGHT': '20 pounds',
                    'SIZE RELATIVE TO A 6-FT MAN': ''
                }
            },
     {
                name: 'Giraffe',
                id: id(),
                imageLink: './img/giraffe.jpg',
                pictures: [ '../img/giraffe_02.adapt.768.1.jpg', '../img/giraffe_03.adapt.768.1.jpg', '../img/giraffe_04.adapt.768.1.jpg', '../img/giraffe_05.adapt.768.1.jpg'],
                pageLink: '/giraffe.html',
                characteristics: {
                    'COMMON NAME': 'Giraffe',
                    'SCIENTIFIC NAME': 'Giraffa camelopardalis',
                    'TYPE': 'Mammals',
                    'DIET': 'Herbivore',
                    'AVERAGE LIFE SPAN IN THE WILD': '25 years',
                    'SIZE': '14 to 19 feet',
                    'WEIGHT': '1,750 to 2,800 pounds',
                    'SIZE RELATIVE TO A 6-FT MAN': ''
                }
            },
    {
                name: 'Giant Panda',
                id: id(),
                imageLink: './img/panda.jpg',
                pictures: ['../img/panda1.jpg', '../img/panda2.jpg', '../img/panda3.jpg', '../img/panda4.jpg'],
                pageLink: '/giant_panda.html',
                characteristics: {
                    'COMMON NAME': 'Giant Panda',
                    'SCIENTIFIC NAME': 'Ailuropoda melanoleuca',
                    'TYPE': 'Mammals',
                    'DIET': 'Omnivore',
                    'AVERAGE LIFE SPAN IN THE WILD': '20 years',
                    'SIZE': '4 to 5 feet',
                    'WEIGHT': '300 pounds',
                    'SIZE RELATIVE TO A 6-FT MAN': ''
                }
            },
     {
                name: 'Cheetah',
                id: id(),
                imageLink: './img/cheetah.jpg',
                pictures: ['../img/cheetah1.jpg', '../img/cheetah2.jpg', '../img/cheetah3.jpg'],
                pageLink: '/cheetah.html',
                fact: "Cheetahs are the only big cats that can't roar.",
                characteristics: {
                    'COMMON NAME': 'Cheetah',
                    'SCIENTIFIC NAME': 'Acinonyx jubatus',
                    'TYPE': 'Mammals',
                    'DIET': 'Carnivore',
                    'AVERAGE LIFE SPAN IN THE WILD': '10 to 12 years',
                    'SIZE': '3.5 to 4.5 feet; tail: 25.5 to 31.5 inches',
                    'WEIGHT': '77 to 143 pounds',
                    'SIZE RELATIVE TO A 6-FT MAN': ''
                }
            }
        ]

export const animalsKindoms = [
    
    {
        id: id(),
        type: 'Amphibians',
        pic: './img/Kindoms/amphibians.jpg'
    },
    {
        id: id(),
        type: 'Birds',
        pic: './img/Kindoms/birds.jpg'
    },
    {
        id: id(),
        type: 'Fish',
        pic: './img/Kindoms/fish.jpg'
    },
    {
        id: id(),
        type: 'Invertebrates',
        pic: './img/Kindoms/invertebrates.jpg'
    },
    {
        id: id(),
        type: 'Mammals',
        pic: './img/Kindoms/mammals.jpg'

    },
    {
        id: id(),
        type: 'Reptiles',
        pic: './img/Kindoms/reptiles.jpg'
    }
]
export default animals