import { Link } from "react-router-dom";

export default function PendingRequestsPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>View Pending Requests</h1>
      <Link to="/profile">Back to Profile</Link>
    </div>
  );
}
