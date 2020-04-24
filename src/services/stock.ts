import axios from "axios";
import Vehicle, { VehicleData } from "models/Vehicle";

const apiUrl =
  process.env.NODE_ENV !== "production" ? "localhost:3100" : "stock.com";
const apiVersion = "v1";

export async function get() {
  try {
    const { data } = await axios.get(
      `http://${apiUrl}/api/${apiVersion}/stock`
    );

    return data.data.map((data: VehicleData) => new Vehicle(data));
  } catch (e) {
    console.error(e);

    return [];
  }
}
