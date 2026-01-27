import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    // TODO: 后面接后端校验（必填/email唯一/密码一致）
    navigate("/profile/edit");
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>MTOnline New User Registration</h1>
      <p>（占位表单，后面补全所有必填字段 + 错误提示）</p>

      <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
        <button onClick={() => navigate("/")}>Back</button>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}
