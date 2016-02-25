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
          ]

var food = ["Chicken Nuggets",
            "Breakfast Cereal",
            "Bacon Topped Donuts",
            "NYC Style Pizza",
            "Late Night Doner Kebabs",
            "Fish Tacos",
            "Vegemite Sandwiches"
          ]

var music = ["80's Punk Records",
            "nothing but WWE Superstar intro music",
            "The Sims 2: University soundtrack",
            "90s Hip Hop",
            "So Fresh Hits of Summer Complications"
          ]

var randomTheme = Math.floor(Math.random()*theme.length);
var randomFood = Math.floor(Math.random()*food.length);
var randomMusic = Math.floor(Math.random()*music.length);

document.write("You should start a " + theme[randomTheme] + " themed bar that sells " + food[randomFood] + " and plays " + music[randomMusic] + ".");
