var theme = ["Breaking Bad",
            "Milhouse Van Houten",
            "Saved by the Bell",
            "Seinfeld",
            "Frasier",
            "How I Met Your Mother",
            "Arrested Development",
            "Power Rangers",
            "Star Wars",
            "George Costanza",
            "Chandler Bing",
            "Joey Tribiani",
            "Kirk Van Houten",
            "Cosmo Kramer",
            "Sideshow Bob",
            "Game of Thrones",
            "Anime",
            "Pokemon",
            "Yugioh",
            "Digimon: Digital Monsters",
            "Sailor Moon" ,
            "Pulp Fiction",
            "Friends",
            "Russell Coight",

          ]

var food = ["Chicken Nuggets",
            "Breakfast Cereal",
            "Bacon Topped Donuts",
            "NYC Style Pizza",
            "Late Night Doner Kebabs",
            "Fish Tacos",
            "Vegemite Sandwiches",
            "Fish Fingers",
            "Various BBQ'd Meats",
            "Bunning's Warehouse style Sausage Sandwiches",
            "Buckets of Pork Crackling covered in Caramel Sauce",
            "Deconstructed Lamingtons",
          ]

var music = ["80's Punk Records",
            "nothing but WWE Superstar intro music",
            "The Sims 2: University soundtrack",
            "90s Hip Hop",
            "So Fresh Hits of Summer Complications",
            "Only the best Triple M bangaz",
            "Music from the Tony Hawks Pro Skater 2 Soundtrack",
            "Early 00'S Australian Punk. Like 28 Days, You know",
            "The Australian Warped Tour '99 Tour Cd",
            "that one Eminem song every white person knows over and over again",
            "8-Bit Chiptunes",
            "Experimental Jazz",
            "Speed Metal",
            "Dubstep remixes of the latest memes",
            ]

var randomTheme = Math.floor(Math.random()*theme.length);
var randomFood = Math.floor(Math.random()*food.length);
var randomMusic = Math.floor(Math.random()*music.length);


// function writeAnswer() {
document.write("<h2>You should start a " + theme[randomTheme] + " themed bar that sells " + food[randomFood] + " and plays " + music[randomMusic] + ".</h2>");
// }
