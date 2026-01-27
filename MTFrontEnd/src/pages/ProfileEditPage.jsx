import { useNavigate } from "react-router-dom";

export default function ProfileEditPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 24 }}>
      <h1>Edit MTOnline Profile for User</h1>
      <p>（这里后面放 Profile 编辑表单）</p>

      <button onClick={() => navigate("/profile")}>Save & Go to Profile</button>
    </div>
  );
}
