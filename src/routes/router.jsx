import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../Componanats/common/SpaceMaintenanceHome";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/spaceMaintenance' element={<HomeScreen />} />
        {/* <Route path='/paymentportal/pay' element={<PaymentPortal />} />
        <Route path='/payments' element={<Payments />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
