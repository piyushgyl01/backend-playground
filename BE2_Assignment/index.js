const { intialiseDatabase } = require("./db/db.connect");
const fs = require("fs");
const Cars = require("./models/cars.models");

intialiseDatabase();

const jsonData = fs.readFileSync("cars.json", "utf-8");
const carsData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const carData of carsData) {
      const newCar = new Cars({
        brand: carData.brand,
        model: carData.model,
        year: carData.year,
        bodyStyle: carData.bodyStyle,
        fuelType: carData.fuelType,
        transmission: carData.transmission,
        engine: carData.engine,
        mileage: carData.mileage,
        color: carData.color,
        price: carData.price,
        condition: carData.condition,
        description: carData.description,
        photos: carData.photos,
        inMarket: carData.inMarket,
      });

      newCar.save();
      console.log(`${carData.brand}`);
    }

    console.log("Everything saved");
  } catch (error) {
    console.log("Error seeding the data", error);
  }
}

// seedData();

const carData = {
  brand: "Ford",
  model: "Mustang",
  year: 2019,
  bodyStyle: "Convertible",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "5.0L V8",
  mileage: 25000,
  color: "Red",
  price: 3500000,
  condition: "Used",
  description: "Exciting Ford Mustang convertible with powerful V8 engine.",
  photos: [
    "https://example.com/mustang-photo1.jpg",
    "https://example.com/mustang-photo2.jpg",
    "https://example.com/mustang-photo3.jpg",
  ],
};
const carData2 = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg",
  ],
};

async function createCar(newCar) {
  try {
    const car = new Cars(newCar);
    const savedCar = await car.save();
    console.log("New Car Saved: ", savedCar);
  } catch (error) {
    throw error;
  }
}

// createCar(carData)
// createCar(carData2);

async function consoleAllCars() {
  try {
    const allCars = await Cars.find();
    console.log("all the cars", allCars);
  } catch (error) {
    throw error;
  }
}

//  consoleAllCars();

async function readByBrand(brand) {
  try {
    const updatedCar = await Cars.findOne({ brand: brand });
    console.log(updatedCar);
  } catch (error) {
    console.log(error);
  }
}

// readByBrand("Ford")

async function readByColor(color) {
  try {
    const updatedCar = await Cars.find({ color: color });
    console.log(updatedCar);
  } catch (error) {
    console.log(error);
  }
}

// readByColor("Black");

async function updateCarPrice(model, dataToUpdate) {
  try {
    const updatedCar = await Cars.findOneAndUpdate(
      { model: model },
      dataToUpdate,
      {
        new: true,
      }
    );
    console.log(updatedCar);
  } catch (error) {
    console.log(error);
  }
}

// updateCarPrice("Corolla", { price: 2300000 });
// updateCarPrice("Model S", { condition: "Used" });

async function deleteCarById(id) {
  try {
    const deletedCar = await Cars.findByIdAndDelete(id);
    console.log(deletedCar);
  } catch (error) {
    console.log(error);
  }
}

// deleteCarById("67430e3112bf41221ea20354");

async function deleteByBodyStyle(bodyStyle) {
  try {
    const deletedCar = await Cars.findOneAndDelete({ bodyStyle: bodyStyle });
    console.log(deletedCar);
  } catch (error) {
    console.log(error);
  }
}

deleteByBodyStyle("Coupe");
