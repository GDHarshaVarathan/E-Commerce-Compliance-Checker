import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell,
  LineChart, Line, CartesianGrid, ResponsiveContainer
} from "recharts";

const COLORS = ["#0088FE", "#FF8042"];

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [platformData, setPlatformData] = useState([]);
  const [complianceData, setComplianceData] = useState([]);
  const [checkHistory, setCheckHistory] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));

    axios.get("http://127.0.0.1:5000/api/aggregated/platform-counts")
      .then(res => setPlatformData(res.data))
      .catch(err => console.error("Error fetching platform data:", err));

    axios.get("http://127.0.0.1:5000/api/aggregated/compliance-status")
      .then(res => setComplianceData(res.data))
      .catch(err => console.error("Error fetching compliance data:", err));

    axios.get("http://127.0.0.1:5000/api/aggregated/check-history")
      .then(res => setCheckHistory(res.data))
      .catch(err => console.error("Error fetching history data:", err));
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#242424",
      color: "#eee",
      fontFamily: "Segoe UI,Arial,sans-serif",
      padding: 0,
      margin: 0
    }}>
      <h1 style={{
        textAlign: "center",
        padding: "36px 0 10px 0",
        letterSpacing: "1px",
        fontSize: "2.2rem"
      }}>
        Compliance Dashboard
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "32px",
        maxWidth: 1200,
        margin: "32px auto"
      }}>
        <div style={{
          background: "#30333a",
          borderRadius: 14,
          boxShadow: "0 4px 24px #0004",
          padding: "18px",
          minHeight: 360
        }}>
          <h3 style={{ textAlign: "center", margin: 0, marginBottom: 10, fontWeight: 500 }}>
            Products by Platform
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={platformData}>
              <XAxis dataKey="platform" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#3182CE" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{
          background: "#30333a",
          borderRadius: 14,
          boxShadow: "0 4px 24px #0004",
          padding: "18px",
          minHeight: 360
        }}>
          <h3 style={{ textAlign: "center", margin: 0, marginBottom: 10, fontWeight: 500 }}>
            Compliance Status
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={complianceData}
                dataKey="count"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {complianceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend align="center" verticalAlign="bottom" iconType="rect" />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={{
          background: "#30333a",
          borderRadius: 14,
          boxShadow: "0 4px 24px #0004",
          padding: "18px",
          minHeight: 360
        }}>
          <h3 style={{ textAlign: "center", margin: 0, marginBottom: 10, fontWeight: 500 }}>
            Last Check History
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={checkHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="date" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="count" stroke="#FF8042" strokeWidth={3} activeDot={{ r: 7 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{
        maxWidth: 1200,
        margin: "0 auto 50px auto",
        background: "#24282f",
        borderRadius: 14,
        boxShadow: "0 3px 12px #0004",
        padding: 24,
        overflow: "auto"
      }}>
        <h3 style={{ margin: 0, marginBottom: 18, fontWeight: 500 }}>Product Details</h3>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "transparent",
          color: "#eee"
        }}>
          <thead>
            <tr style={{ background: "#222" }}>
              <th style={{ padding: "10px 8px", letterSpacing: ".06em" }}>Title</th>
              <th style={{ padding: "10px 8px" }}>Price</th>
              <th style={{ padding: "10px 8px" }}>Platform</th>
              <th style={{ padding: "10px 8px" }}>Compliance Status</th>
              <th style={{ padding: "10px 8px" }}>Last Checked</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={i} style={{
                background: i % 2 ? "#292d33" : "#23262b"
              }}>
                <td style={{ padding: 8 }}>{p.title}</td>
                <td style={{ padding: 8 }}>₹{p.price}</td>
                <td style={{ padding: 8 }}>{p.platform}</td>
                <td style={{
                  padding: 8,
                  color: p.complianceStatus === "Compliant" ? "#56e956" : "#ec5858",
                  fontWeight: "bold"
                }}>
                  {p.complianceStatus || "Pending"}
                </td>
                <td style={{ padding: 8 }}>{p.lastChecked || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
