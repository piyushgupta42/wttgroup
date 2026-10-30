import { connectDB } from "../../lib/mongodb";
import HomeSection from "../../models/HomeSection";
import Service from "../../models/Service";
import Brand from "../../models/Brand";
import Recognition from "../../models/Recognition";
import Leader from "../../models/Leader";

export async function getHomeData() {

  await connectDB();

  const [
    sections,
    services,
    brands,
    recognitions,
    leaders,
  ] = await Promise.all([

    HomeSection.find({
      enabled: true,
      status: "published",
    })
      .sort({ order: 1 })
      .lean(),

    Service.find({
      enabled: true,
    })
      .sort({ order: 1 })
      .lean(),

    Brand.find({
      enabled: true,
    })
      .sort({ order: 1 })
      .lean(),

    Recognition.find({
      enabled: true,
    })
      .sort({ order: 1 })
      .lean(),

    Leader.find({
      enabled: true,
    })
      .sort({ order: 1 })
      .lean(),

  ]);

  return {
    sections,
    services,
    brands,
    recognitions,
    leaders,
  };
}