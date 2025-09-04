import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import DoctorsList from "./pages/DoctorsList";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
		return (
			<>
				<Routes>
					<Route path="/admin-dashboard" element={<AdminDashboard />} />
					<Route path="/admin-login" element={<AdminLogin />} />
					<Route path="/doctors" element={<DoctorsList />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					{/* Add more routes as needed */}
					<Route path="*" element={<Login />} />
				</Routes>
						<footer style={{textAlign: 'center', padding: '1rem', background: '#f5f5f5', marginTop: '2rem'}}>
							&copy; {new Date().getFullYear()} Book a Doctor. All rights reserved.<br />
							<span style={{fontSize: '0.9rem', color: '#888'}}>Developed by Rajesh</span>
						</footer>
			</>
		);
}
