import { Link } from "react-router-dom";

export default function StatusUpdatesPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>View Status Updates</h1>
      <Link to="/profile">Back to Profile</Link>
    </div>
  );
}
