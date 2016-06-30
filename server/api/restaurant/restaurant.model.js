'use strict';

import mongoose from 'mongoose';

var RestaurantSchema = new mongoose.Schema({
  restaurantName: String,
  owner: String,
  addressLine1: String,
  addressLine2: String,
  addressLine3: String,
  phone: String,
  website: String,
  tableBooking: Boolean,
  headerImage: String,
  images: String,
  amenities: String,
  summary: String,
  socialMedia: String,
  openTimings: String,
  menuImages: String,
  offerImages: String,
  location: String
});

export default mongoose.model('Restaurant', RestaurantSchema);
