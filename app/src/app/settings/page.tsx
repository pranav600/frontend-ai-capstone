export default function SettingsPage() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Settings</h1>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>Name</label>
          <br />
          <input type="text" name="name" placeholder="Enter name" />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email</label>
          <br />
          <input type="email" name="email" placeholder="Enter email" />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password</label>
          <br />
          <input type="password" name="password" placeholder="Enter password" />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
