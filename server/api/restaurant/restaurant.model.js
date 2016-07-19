'use strict';

import mongoose from 'mongoose';

var RestaurantSchema = new mongoose.Schema({
  restaurantName: String,
  owner: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  phone: String,
  website: String,
  tableBooking: Boolean,
  headerImage: [String],
  images: [String],
  cuisine: String,
  summary: String,
  socialMedia: String,
  openTimings: String,
  menuImages: [String],
  offerImages: [String],
  location: [String]
});

export default mongoose.model('Restaurant', RestaurantSchema);
