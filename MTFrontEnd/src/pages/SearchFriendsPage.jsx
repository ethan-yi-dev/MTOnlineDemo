import { Link } from "react-router-dom";

export default function SearchFriendsPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Search for Friends</h1>
      <Link to="/profile">Back to Profile</Link>
    </div>
  );
}
