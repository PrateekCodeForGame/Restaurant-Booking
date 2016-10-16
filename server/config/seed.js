/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Restaurant from '../api/restaurant/restaurant.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
        'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
        'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
        'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
        'tests alongside code. Automatic injection of scripts and ' +
        'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
        'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
        'payload, minifies your scripts/css/images, and rewrites asset ' +
        'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
        'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Test1',
        email: 'test1@example.com',
        password: 'admin'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Test2',
        email: 'test2@example.com',
        password: 'admin'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Test3',
        email: 'test3@example.com',
        password: 'admin'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Test4',
        email: 'test4@example.com',
        password: 'admin'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Test3',
        email: 'test5@example.com',
        password: 'admin'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Test3',
        email: 'test6@example.com',
        password: 'admin'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });

Restaurant.find({}).remove()
  .then(() => {
    Restaurant.create({
        restaurantName: "Oliver & Bonacini Cafe Grill",
        addressLine1: "240 Leighland Avenue",
        addressLine2: "Oakville Ontario",
        city: "Göteborg",
        phone: "1234567890",
        website: "www.google.com",
        tableBooking: true,
        openTimings: "10:00 am - 11:00 pm",
        owner: "admin@example.com",
        cuisine: "Kafe",
        summary: "The highly anticipated 14,500 sq ft flagship O&B Café Grill opened in June 2010. With a stylish see and be seen bar, lounge and a wraparound patio facing both Front and Yonge streets, it has since become the destination for the city’s tastemakers, Bay Street’s movers and shakers and the urban dwellers of the neighbourhood. The design of the restaurant is a multi-faceted collaboration between Chef Michael Bonacini and Anacleto Design who has transformed the vast space into intimate gathering spots including the restaurant, bar, and patio with a communal table, tucked away booths, and a loft like dining room. “We took a massive space and infused it with character, charm and charisma through art, lighting and texture,” says designer Lindsey Anacleto a former associate at Yabu Pushelberg, who designed Canoe for O&B.",
        location: [
          "43.461892",
          "-79.686994"
        ],
        offerImages: [
          "offer1.jpg",
          "offer2.jpg",
          "offer3.jpg",
          "offer4.jpg"
        ],
        menuImages: [],
        images: [
          "homePageImage.png",
          "restaurant.jpg",
          "restaurant-overview.jpg",
          "stockholm.jpg"
        ],
        headerImage: [
          "restaurant-overview.jpg"
        ],
        items: ["Pasta", "Burger", "Pizza", "Platter"],
        price: [20, 10, 15, 30]
      }, {
        restaurantName: "Test1 Cafe Grill",
        addressLine1: "240 Leighland Avenue",
        addressLine2: "Oakville Ontario",
        city: "Stockholm",
        phone: "1234567890",
        website: "www.google.com",
        tableBooking: true,
        openTimings: "10:00 am - 11:00 pm",
        owner: "test1@example.com",
        cuisine: "Kafe",
        summary: "The highly anticipated 14,500 sq ft flagship O&B Café Grill opened in June 2010. With a stylish see and be seen bar, lounge and a wraparound patio facing both Front and Yonge streets, it has since become the destination for the city’s tastemakers, Bay Street’s movers and shakers and the urban dwellers of the neighbourhood. The design of the restaurant is a multi-faceted collaboration between Chef Michael Bonacini and Anacleto Design who has transformed the vast space into intimate gathering spots including the restaurant, bar, and patio with a communal table, tucked away booths, and a loft like dining room. “We took a massive space and infused it with character, charm and charisma through art, lighting and texture,” says designer Lindsey Anacleto a former associate at Yabu Pushelberg, who designed Canoe for O&B.",
        location: [
          "43.461892",
          "-79.686994"
        ],
        offerImages: [
          "offer1.jpg",
          "offer2.jpg",
          "offer3.jpg",
          "offer4.jpg"
        ],
        menuImages: [],
        images: [
          "homePageImage.png",
          "restaurant.jpg",
          "restaurant-overview.jpg",
          "stockholm.jpg"
        ],
        headerImage: [
          "restaurant-overview.jpg"
        ],
        items: ["Pasta", "Burger", "Pizza", "Platter"],
        price: [20, 10, 15, 30]
      }, {
        restaurantName: "Test2 Cafe Grill",
        addressLine1: "240 Leighland Avenue",
        addressLine2: "Oakville Ontario",
        city: "Stockholm",
        phone: "1234567890",
        website: "www.google.com",
        tableBooking: true,
        openTimings: "10:00 am - 11:00 pm",
        owner: "test2@example.com",
        cuisine: "Grekiskt",
        summary: "The highly anticipated 14,500 sq ft flagship O&B Café Grill opened in June 2010. With a stylish see and be seen bar, lounge and a wraparound patio facing both Front and Yonge streets, it has since become the destination for the city’s tastemakers, Bay Street’s movers and shakers and the urban dwellers of the neighbourhood. The design of the restaurant is a multi-faceted collaboration between Chef Michael Bonacini and Anacleto Design who has transformed the vast space into intimate gathering spots including the restaurant, bar, and patio with a communal table, tucked away booths, and a loft like dining room. “We took a massive space and infused it with character, charm and charisma through art, lighting and texture,” says designer Lindsey Anacleto a former associate at Yabu Pushelberg, who designed Canoe for O&B.",
        location: [
          "43.461892",
          "-79.686994"
        ],
        offerImages: [
          "offer1.jpg",
          "offer2.jpg",
          "offer3.jpg",
          "offer4.jpg"
        ],
        menuImages: [],
        images: [
          "homePageImage.png",
          "restaurant.jpg",
          "restaurant-overview.jpg",
          "stockholm.jpg"
        ],
        headerImage: [
          "restaurant-overview.jpg"
        ],
        items: ["Pasta", "Burger", "Pizza", "Platter"],
        price: [20, 10, 15, 30]
      }, {
        restaurantName: "Test3 Cafe Grill",
        addressLine1: "240 Leighland Avenue",
        addressLine2: "Oakville Ontario",
        city: "Luleå",
        phone: "1234567890",
        website: "www.google.com",
        tableBooking: true,
        openTimings: "10:00 am - 11:00 pm",
        owner: "test3@example.com",
        cuisine: "Kafe",
        summary: "The highly anticipated 14,500 sq ft flagship O&B Café Grill opened in June 2010. With a stylish see and be seen bar, lounge and a wraparound patio facing both Front and Yonge streets, it has since become the destination for the city’s tastemakers, Bay Street’s movers and shakers and the urban dwellers of the neighbourhood. The design of the restaurant is a multi-faceted collaboration between Chef Michael Bonacini and Anacleto Design who has transformed the vast space into intimate gathering spots including the restaurant, bar, and patio with a communal table, tucked away booths, and a loft like dining room. “We took a massive space and infused it with character, charm and charisma through art, lighting and texture,” says designer Lindsey Anacleto a former associate at Yabu Pushelberg, who designed Canoe for O&B.",
        location: [
          "43.461892",
          "-79.686994"
        ],
        offerImages: [
          "offer1.jpg",
          "offer2.jpg",
          "offer3.jpg",
          "offer4.jpg"
        ],
        menuImages: [],
        images: [
          "homePageImage.png",
          "restaurant.jpg",
          "restaurant-overview.jpg",
          "stockholm.jpg"
        ],
        headerImage: [
          "restaurant-overview.jpg"
        ],
        items: ["Pasta", "Burger", "Pizza", "Platter"],
        price: [20, 10, 15, 30]
      }, {
        restaurantName: "Test4 Cafe Grill",
        addressLine1: "240 Leighland Avenue",
        addressLine2: "Oakville Ontario",
        city: "Luleå",
        phone: "1234567890",
        website: "www.google.com",
        tableBooking: true,
        openTimings: "10:00 am - 11:00 pm",
        owner: "test4@example.com",
        cuisine: "Mexikanskt",
        summary: "The highly anticipated 14,500 sq ft flagship O&B Café Grill opened in June 2010. With a stylish see and be seen bar, lounge and a wraparound patio facing both Front and Yonge streets, it has since become the destination for the city’s tastemakers, Bay Street’s movers and shakers and the urban dwellers of the neighbourhood. The design of the restaurant is a multi-faceted collaboration between Chef Michael Bonacini and Anacleto Design who has transformed the vast space into intimate gathering spots including the restaurant, bar, and patio with a communal table, tucked away booths, and a loft like dining room. “We took a massive space and infused it with character, charm and charisma through art, lighting and texture,” says designer Lindsey Anacleto a former associate at Yabu Pushelberg, who designed Canoe for O&B.",
        location: [
          "43.461892",
          "-79.686994"
        ],
        offerImages: [
          "offer1.jpg",
          "offer2.jpg",
          "offer3.jpg",
          "offer4.jpg"
        ],
        menuImages: [],
        images: [
          "homePageImage.png",
          "restaurant.jpg",
          "restaurant-overview.jpg",
          "stockholm.jpg"
        ],
        headerImage: [
          "restaurant-overview.jpg"
        ],
        items: ["Pasta", "Burger", "Pizza", "Platter"],
        price: [20, 10, 15, 30]
      }, {
        restaurantName: "Test5 Cafe Grill",
        addressLine1: "240 Leighland Avenue",
        addressLine2: "Oakville Ontario",
        city: "Malmö",
        phone: "1234567890",
        website: "www.google.com",
        tableBooking: true,
        openTimings: "10:00 am - 11:00 pm",
        owner: "test5@example.com",
        cuisine: "Japansk",
        summary: "The highly anticipated 14,500 sq ft flagship O&B Café Grill opened in June 2010. With a stylish see and be seen bar, lounge and a wraparound patio facing both Front and Yonge streets, it has since become the destination for the city’s tastemakers, Bay Street’s movers and shakers and the urban dwellers of the neighbourhood. The design of the restaurant is a multi-faceted collaboration between Chef Michael Bonacini and Anacleto Design who has transformed the vast space into intimate gathering spots including the restaurant, bar, and patio with a communal table, tucked away booths, and a loft like dining room. “We took a massive space and infused it with character, charm and charisma through art, lighting and texture,” says designer Lindsey Anacleto a former associate at Yabu Pushelberg, who designed Canoe for O&B.",
        location: [
          "43.461892",
          "-79.686994"
        ],
        offerImages: [
          "offer1.jpg",
          "offer2.jpg",
          "offer3.jpg",
          "offer4.jpg"
        ],
        menuImages: [],
        images: [
          "homePageImage.png",
          "restaurant.jpg",
          "restaurant-overview.jpg",
          "stockholm.jpg"
        ],
        headerImage: [
          "restaurant-overview.jpg"
        ],
        items: ["Pasta", "Burger", "Pizza", "Platter"],
        price: [20, 10, 15, 30]
      }, {
        restaurantName: "Test6 Cafe Grill",
        addressLine1: "240 Leighland Avenue",
        addressLine2: "Oakville Ontario",
        city: "Malmö",
        phone: "1234567890",
        website: "www.google.com",
        tableBooking: true,
        openTimings: "08:00 am - 10:00 pm",
        owner: "test6@example.com",
        cuisine: "Indiskt",
        summary: "The highly anticipated 14,500 sq ft flagship O&B Café Grill opened in June 2010. With a stylish see and be seen bar, lounge and a wraparound patio facing both Front and Yonge streets, it has since become the destination for the city’s tastemakers, Bay Street’s movers and shakers and the urban dwellers of the neighbourhood. The design of the restaurant is a multi-faceted collaboration between Chef Michael Bonacini and Anacleto Design who has transformed the vast space into intimate gathering spots including the restaurant, bar, and patio with a communal table, tucked away booths, and a loft like dining room. “We took a massive space and infused it with character, charm and charisma through art, lighting and texture,” says designer Lindsey Anacleto a former associate at Yabu Pushelberg, who designed Canoe for O&B.",
        location: [
          "43.461892",
          "-79.686994"
        ],
        offerImages: [
          "offer1.jpg",
          "offer2.jpg",
          "offer3.jpg",
          "offer4.jpg"
        ],
        menuImages: [],
        images: [
          "homePageImage.png",
          "restaurant.jpg",
          "restaurant-overview.jpg",
          "stockholm.jpg"
        ],
        headerImage: [
          "restaurant-overview.jpg"
        ],
        items: ["Pasta", "Burger", "Pizza", "Platter"],
        price: [20, 10, 15, 30]
      })
      .then(() => {
        console.log('finished populating restaurants');
      });
  });
