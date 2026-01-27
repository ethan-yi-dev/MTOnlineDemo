import { Link } from "react-router-dom";

export default function FriendsPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>View Friends</h1>
      <Link to="/profile">Back to Profile</Link>
    </div>
  );
}
