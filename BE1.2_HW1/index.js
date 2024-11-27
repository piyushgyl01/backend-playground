const { initialiseDatabse } = require("./db/db.connect");
const fs = require("fs");
const Profile = require("./models/userProfile.models");

initialiseDatabse();

const jsonData = fs.readFileSync("profiles.json", "utf-8");
const profilesData = JSON.parse(jsonData);

async function seedData() {
  try {
    await Profile.deleteMany({});
    console.log("Existing profiles removed.");

    for (const profileData of profilesData) {
      const newProfile = new Profile({
        fullName: profileData.fullName,
        username: profileData.username,
        bio: profileData.bio,
        profilePicUrl: profileData.profilePicUrl,
        followingCount: profileData.followingCount,
        followerCount: profileData.followerCount,
        companyName: profileData.companyName,
        location: profileData.location,
        portfolioUrl: profileData.portfolioUrl,
      });

      await newProfile.save();
      console.log(`Profile for ${profileData.username} saved.`);
    }

    console.log("All profiles seeded successfully.");
  } catch (error) {
    console.error("Error seeding the data:", error);
  }
}

//heheheheheehtetewbwbwbuubwbwubababbbwbuiwbiwcibwc  hwcwbubcwubwcbuwuubapuepveupeuieuieeerx gfntstterererrrrereererhgrggggg
seedData();
