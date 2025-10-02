import mongoose from "mongoose";
import drugsData from "./drugs.json";
import foodsData from "./foods.json";
import interactionsData from "./interactions.json";

const drugSchema = new mongoose.Schema({ name: String, description: String });
const foodSchema = new mongoose.Schema({ name: String, category: String });
const interactionSchema = new mongoose.Schema({
  drug: { type: mongoose.Schema.Types.ObjectId, ref: "Drug" },
  food: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
  severity: String,
  description: String,
});

const Drug = mongoose.model("Drug", drugSchema);
const Food = mongoose.model("Food", foodSchema);
const Interaction = mongoose.model("Interaction", interactionSchema);

async function seed() {
  await mongoose.connect("mongodb://root:76543210@localhost:27017/backend?authSource=admin");
  console.log("Connected ✅");

  await Drug.deleteMany({});
  await Food.deleteMany({});
  await Interaction.deleteMany({});

  const drugs = await Drug.insertMany(drugsData);
  const foods = await Food.insertMany(foodsData);

  const drugMap: Record<string, any> = {};
  const foodMap: Record<string, any> = {};
  if (Array.isArray(drugs)) {
    drugs.forEach((d) => {
     if (d.name && d._id) drugMap[d.name] = d._id;
    });
  } 
  if (Array.isArray(foods)) {
    foods.forEach((f) => {
      if (f.name && f._id) foodMap[f.name] = f._id;
    });
  }

  const interactions = interactionsData.map((i: any) => ({
  drug: drugMap[i.drug],
  food: foodMap[i.food],
  severity: i.severity,
  description: i.description,
}));

  await Interaction.insertMany(interactions);

  console.log("✅ Seed data inserted!");
  process.exit();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
