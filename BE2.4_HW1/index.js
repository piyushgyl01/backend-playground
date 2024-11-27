const { initialiseDatabase } = require("./db/db.connect");
const Restaurant = require("./models/restaurants.models");

initialiseDatabase();

const newRestaurant = {
  name: "Cha Cha",
  cuisine: ["Spanish"],
  location: "123 Main Street, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://example.com",
  phoneNumber: "+1234567890",
  openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: true,
  isDeliveryAvailable: true,
  menuUrl: "https://example.com/menu",
  photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
};

const newRestaurant2 = {
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: [
    "https://example.com/somi-photo1.jpg",
    "https://example.com/somi-photo2.jpg",
  ],
};

const newRestauran3 = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: [
    "https://example.com/yo-photo1.jpg",
    "https://example.com/yo-photo2.jpg",
    "https://example.com/yo-photo3.jpg",
  ],
};

async function createRestaurant(newRestaurant) {
  try {
    const restaurant = new Restaurant(newRestaurant);
    const saveRestaurant = await restaurant.save();
    console.log("New Movie Date", saveRestaurant);
  } catch (error) {
    throw error;
  }
}

// createRestaurant(newRestaurant);
// createRestaurant(newRestaurant2);
// createRestaurant(newRestauran3);

async function readAllRestaurants() {
  try {
    const allRestaurants = await Restaurant.find();
    console.log(allRestaurants);
  } catch (error) {
    console.log(error);
  }
}

// readAllRestaurants();

async function readRestaurantByName(restaurantName) {
  try {
    const restaurant = await Restaurant.findOne({ name: restaurantName });
    console.log(restaurant);
  } catch (error) {
    throw error;
  }
}

// readRestaurantByName("Cha Cha");

async function readRestaurantWithReservation() {
  try {
    const restaurant = await Restaurant.find({ reservationsNeeded: true });
    console.log(restaurant);
  } catch (error) {
    throw error;
  }
}

// readRestaurantWithReservation()

async function readRestaurantWithDelivery() {
  try {
    const restaurant = await Restaurant.find({ isDeliveryAvailable: true });
    console.log(restaurant);
  } catch (error) {
    throw error;
  }
}

// readRestaurantWithDelivery();

async function readRestaurantByPhone(phoneNumber) {
  try {
    const restaurant = await Restaurant.find({ phoneNumber: phoneNumber });
    console.log(restaurant);
  } catch (error) {
    console.log(error);
  }
}

// readRestaurantByPhone("+1288997392");

async function italianCuisineRestaurant(cuisine) {
  try {
    const restaurant = await Restaurant.find({ cuisine: cuisine });
    console.log(restaurant);
  } catch (error) {
    throw error;
  }
}

// italianCuisineRestaurant("Italian");

async function updateRestaurantById(restaurantId, dataToUpdate) {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      restaurantId,
      dataToUpdate,
      { new: true }
    );
    console.log(updatedRestaurant);
  } catch (error) {
    console.log(error);
  }
}

// updateRestaurantById("6744458c7458d9153fa40e63", { rating: 4.1 });

async function updateRestaurantName(restaurantName, dataToUpdate) {
  try {
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      { name: restaurantName },
      dataToUpdate,
      { new: true }
    );
    console.log(updatedRestaurant);
  } catch (error) {
    console.log(error);
  }
}

// updateRestaurantName("Somi", { name: "Som Sarovar" });

async function updateRestaurantPhoneNumber(phoneNum, dataToUpdate) {
  try {
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      { phoneNumber: phoneNum },
      dataToUpdate,
      { new: true }
    );
    console.log(updatedRestaurant);
  } catch (error) {
    console.log(error);
  }
}

// updateRestaurantPhoneNumber("+1288997392", { isDeliveryAvailable: true });

async function deleteRestaurantById(id) {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
    console.log("Deleted Restaurant", deletedRestaurant);
  } catch (error) {
    console.log(error);
  }
}

deleteRestaurantById("6744458c7458d9153fa40e61");

async function deleteRestaurantByName(name) {
  try {
    const deletedRestaurant = await Restaurant.findOneAndDelete({ name: name });
    console.log(deletedRestaurant)
  } catch (error) {
    console.log("Error deleting the restaurant");
  }
}

deleteRestaurantByName("Yo China");
