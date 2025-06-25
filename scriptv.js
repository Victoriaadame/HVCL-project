// Array of slide objects, each with an image URL and a caption
const slides = [
  {
    image: "https://images.immediate.co.uk/production/volatile/sites/10/2022/01/2048x1365-Prunus-dulcis-SEO-GettyImages-1149096340-5ab80f6.jpeg?quality=90&webp=true&resize=1200,800",
    caption: "Chico has always been a hotbed for almond growers.And the people are very specific on what they are called. They are amonds not almonds.Because as I have been told they shake the L out of it"
  },
  {
    image: "https://photos.cinematreasures.org/production/photos/34687/1327864998/large.jpg?1327864998",
    caption: "Every town has its haunts chico is no exeption.The most famous of our so-called haunted buildings: the Senator Theatre. Legend has it that the second floor is inhabited by the ghost of a Native American child, but experiences vary."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Bidwell_Mansion%2C_May_2021.jpg",
    caption: "The bidwell mansion is a historical landmark in Chico, California. It was built in 1868 by John and Annie Bidwell and was a museum that showcases the history of the area. But unfortunately, it was burned down on Wednesday, December 11, 2024"
  },

  {
    image:"https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/VC_UndergroundCalifornia_Module06_BurroSchmidtTunnel_Supplied_Flickr_11776098265_4a5ae30e59_1280x640.jpg.webp?itok=MuGAmTPD",
    caption: "Locals have long spread a rumor that, early in Chico’s history, Chinese workers built and used tunnels underneath downtown Chico, and even set up opium dens."
  },

  {
    image:"https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/048E/production/_97466110_maol.jpg.webp",
    caption: "In 1922, Chico, California experienced a series of \"rock showers\" where rocks, some as large as baseballs, fell from the sky onto a warehouse and nearby homes. The phenomenon, which lasted for several weeks in March, baffled authorities and residents alike. Despite investigations, the source of the rocks remained a mystery."
  },
];
// Current slide index (starts at the first slide)
let current = 0;

/*
  Function to change slides.
  - direction is either +1 (next) or -1 (previous)
*/
function changeSlide(direction) {
  // Update the current index with wraparound using modulo
  current = (current + direction + slides.length) % slides.length;
    // Set the image source to the current slide's image
  document.getElementById("slide").src = slides[current].image;
    // Set the caption text to the current slide's caption
  document.getElementById("caption").textContent = slides[current].caption;
}

// Show the first slide initially
changeSlide(0);

 // Get the tree element by its ID
    const tree = document.getElementById('tree');

    // When the tree is clicked...
    tree.addEventListener('click', () => {
      // ...add the 'fly-away' class to trigger animation
      tree.classList.add('fly-away');
    });
