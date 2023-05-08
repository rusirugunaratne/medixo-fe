import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpaceMaintenanceHome from "../Componanats/common/SpaceMaintenanceHome";
import RoomBookingForm from "../Componanats/roomService/RoomBookingForm";
import RoomInventory from "../Componanats/roomService/RoomInventory";
import RoomMaintenanceForm from "../Componanats/roomService/RoomMaintenanceForm";
import RoomBookingGrid from "../Componanats/roomService/RoomBookingGrid";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/spaceMaintenance' element={<SpaceMaintenanceHome />} />
        <Route path='/roomBooking' element={<RoomBookingForm />} />
        <Route path='/roomBookingGrid' element={<RoomBookingGrid />} />
        <Route path='/inventory' element={<RoomInventory />} />
        <Route path='/maintenance' element={<RoomMaintenanceForm />} />
      </Routes>
    </BrowserRouter>
  );
}
