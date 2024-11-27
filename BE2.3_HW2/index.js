const Movie = require("../BE2.2_CW/models/movie.models");
const { initialiseDatabase } = require("./db/db.connect");
const Hotel = require("./models/hotels.models");

initialiseDatabase();

const newHotel = {
  name: "New Hotel",
  category: "Mid-Range",
  location: "123 Main Street, Frazer Town",
  rating: 4.0,
  reviews: [],
  website: "https://hotel-example.com",
  phoneNumber: "+1234567890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Room Service"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel-photo1.jpg",
    "https://example.com/hotel-photo2.jpg",
  ],
};

const newHotel1 = {
  name: "Lake View",
  category: "Mid-Range",
  location: "124 Main Street, Anytown",
  rating: 3.2,
  reviews: [],
  website: "https://lake-view-example.com",
  phoneNumber: "+1234555890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Boating"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: false,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: false,
  photos: [
    "https://example.com/hotel1-photo1.jpg",
    "https://example.com/hotel1-photo2.jpg",
  ],
};

const newHotel2 = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: [
    "Room Service",
    "Horse riding",
    "Boating",
    "Kids Play Area",
    "Bar",
  ],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel2-photo1.jpg",
    "https://example.com/hotel2-photo2.jpg",
  ],
};

async function createHotel(newHotel) {
  try {
    const hotel = new Hotel(newHotel);
    const saveHotel = await hotel.save();
    console.log("New Hotel Data", saveHotel);
  } catch (error) {
    throw error;
  }
}

// createHotel(newHotel);
// createHotel(newHotel1);
// createHotel(newHotel2);

async function readAllHotels() {
  try {
    const allHotels = await Hotel.find();
    console.log(allHotels);
  } catch (error) {
    console.log(error);
  }
}
// console.log("All Hotels");
// readAllHotels();

async function getHotelByName(hotelName) {
  try {
    const hotel = await Hotel.find({ name: hotelName });
    console.log(hotel);
  } catch (error) {
    throw error;
  }
}

// getHotelByName("Lake View")

async function hasParkingSpace() {
  try {
    const hotel = await Hotel.find({ isParkingAvailable: true });
    console.log(hotel);
  } catch (error) {
    console.log(error);
  }
}

// console.log("Parking Space")
// hasParkingSpace()

async function hasRestaurantAvailable() {
  try {
    const hotel = await Hotel.find({ isRestaurantAvailable: true });
    console.log(hotel);
  } catch (error) {
    console.log(error);
  }
}

// console.log("Restaurant Availability");
// hasRestaurantAvailable();

async function getHotelsByCategory(category) {
  try {
    const hotel = await Hotel.find({ category: category });
    console.log(hotel);
  } catch (error) {
    console.log(error);
  }
}

// console.log("Mid range hotels")
// getHotelsByCategory("Mid-Range")

async function getHotelByPriceRange(priceRange) {
  try {
    const hotel = await Hotel.find({ priceRange: priceRange });
    console.log(hotel);
  } catch (error) {
    console.log(error);
  }
}

// console.log("Price Range")
// getHotelByPriceRange("$$$$ (61+)")

async function getHotelByRatings(rating) {
  try {
    const hotel = await Hotel.find({ rating: rating });
    console.log(hotel);
  } catch (error) {
    console.log(error);
  }
}

// console.log("Price Range")
// getHotelByRatings(4.0)

async function getHotelByPhoneNum(phoneNum) {
  try {
    const hotel = await Hotel.find({ phoneNumber: phoneNum });
    console.log(hotel);
  } catch (error) {
    console.log(error);
  }
}

// console.log("Price Range");
// getHotelByPhoneNum("+1299655890");

async function updateHotelById(id, updateData) {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    console.log(updatedHotel);
  } catch (error) {
    console.log(error);
  }
}

// updateHotelById("67446bf590eac43973eb2e47", { checkOutTime: "11:00 AM" });

async function updateHotelByName(hotelName, updateData) {
  try {
    const updatedHotel = await Hotel.findOneAndUpdate(
      { name: hotelName },
      updateData,
      { new: true }
    );
    console.log(updatedHotel);
  } catch (error) {
    console.log(error);
  }
}

// updateHotelByName("Sunset Resort", { rating: 4.2 });

async function updateHotelByPhoneNum(num, updateData) {
  try {
    const updatedHotel = await Hotel.findOneAndUpdate(
      { phoneNumber: num },
      updateData,
      { new: true }
    );
    console.log(updatedHotel);
  } catch (error) {
    console.log(error);
  }
}

updateHotelByPhoneNum("+1299655890", { phoneNumber: "+1997687392" });
