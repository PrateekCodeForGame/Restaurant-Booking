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
        city: "Stockholm",
        phone: "1234567890",
        website: "www.google.com",
        tableBooking: true,
        openTimings: "10:00 am - 11:00 pm",
        owner: "admin@example.com",
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
        ]
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
        ]
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
        ]
      }, {
        restaurantName: "Test3 Cafe Grill",
        addressLine1: "240 Leighland Avenue",
        addressLine2: "Oakville Ontario",
        city: "Lulea",
        phone: "1234567890",
        website: "www.google.com",
        tableBooking: true,
        openTimings: "10:00 am - 11:00 pm",
        owner: "test3@example.com",
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
        ]
      }, {
        restaurantName: "Test4 Cafe Grill",
        addressLine1: "240 Leighland Avenue",
        addressLine2: "Oakville Ontario",
        city: "Goteburg",
        phone: "1234567890",
        website: "www.google.com",
        tableBooking: true,
        openTimings: "08:00 am - 10:00 pm",
        owner: "test4@example.com",
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
        ]
      })
      .then(() => {
        console.log('finished populating restaurants');
      });
    });
