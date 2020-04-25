import axios from "axios";

const apiVersion = process.env.REACT_APP_API_VERSION;

interface VehicleBookingData {
  name: string;
  email: string;
  telephone: string;
  vehicle: string;
  id: number;
}

export async function book(data: VehicleBookingData) {
  try {
    await axios.post(`/api/${apiVersion}/book`, data);
  } catch (e) {
    return false;
  }

  return true;
}
