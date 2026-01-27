import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 24 }}>
      <h1>MTOnline Login</h1>

      <div style={{ marginTop: 16 }}>
        <label>
          Email <br />
          <input type="email" />
        </label>
      </div>

      <div style={{ marginTop: 16 }}>
        <label>
          Password <br />
          <input type="password" />
        </label>
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
        <button onClick={() => navigate("/register")}>Register</button>
        <button onClick={() => navigate("/profile")}>Login</button>
      </div>
    </div>
  );
}
