import axios from "axios";
import Vehicle, { VehicleData } from "models/Vehicle";

const apiVersion = process.env.REACT_APP_API_VERSION;

export async function getAll() {
  try {
    const { data } = await axios.get(`/api/${apiVersion}/stock`);

    return data.data.map((data: VehicleData) => new Vehicle(data));
  } catch (e) {
    console.error(e);

    return [];
  }
}

export async function get(id: number) {
  try {
    const { data } = await axios.get(`/api/${apiVersion}/stock/${id}`);

    return new Vehicle(data.data);
  } catch (e) {
    console.error(e);

    return null;
  }
}
