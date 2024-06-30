import { Layout, Typography } from "antd";
import "./App.css";
import {
  Navbar,
  Homepage,
  
  Crytocurrencies,
  News,
  CrytoDetails,
} from "./components/defaultComponent";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/Cryptocurrencies" element={<Crytocurrencies />} />
  <Route path="/News" element={<News />} />
  <Route path="/Cryptodetails/:coinId" element={<CrytoDetails />} />



</Routes>
        </Layout>
      <div className="footer" style={{  backgroundColor: '#f0f2f5', textAlign: 'center' }}>
      <Typography.Title level={4}>Created by Afaq Ali</Typography.Title>
      <Typography.Text  >©2024 <Typography.Text  type="danger">CryptoDive.</Typography.Text >All Rights Reserved.</Typography.Text>
      </div>
    </div>
    </div>
  );
}


export default App;
