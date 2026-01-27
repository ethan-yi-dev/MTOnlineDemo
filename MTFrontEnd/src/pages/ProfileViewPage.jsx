import { Link, useNavigate } from "react-router-dom";

export default function ProfileViewPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 24 }}>
      <h1>View MTOnline Profile for User</h1>

      <div style={{ marginTop: 16 }}>
        <button onClick={() => navigate("/profile/edit")}>Edit Profile</button>
      </div>

      <h2 style={{ marginTop: 24 }}>Links</h2>
      <ul>
        <li><Link to="/profile/status">View Status Updates</Link></li>
        <li><Link to="/profile/friends">View Friends</Link></li>
        <li><Link to="/profile/search">Search for Friends</Link></li>
        <li><Link to="/profile/requests">View Pending Requests</Link></li>
      </ul>

      <div style={{ marginTop: 24 }}>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
    </div>
  );
}
