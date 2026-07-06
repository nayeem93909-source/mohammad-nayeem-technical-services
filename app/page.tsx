export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f5f5f5",
        minHeight: "100vh",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>Mohammad Nayeem Technical Services</h1>

      <p>
        Professional Electrical, Plumbing, CCTV & Aluminium Services in Riyadh,
        Saudi Arabia.
      </p>

      <hr />

      <h2>Our Services</h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          fontSize: "20px",
          lineHeight: "2",
        }}
      >
        <li>⚡ Electrical Works</li>
        <li>🚰 Plumbing Services</li>
        <li>📹 CCTV Installation</li>
        <li>🪟 Aluminium Windows & Doors</li>
        <li>🍳 Aluminium Kitchen</li>
      </ul>

      <hr />

      <h2>Contact</h2>

      <p>📞 0543059502</p>
      <p>📧 nayeem93909@gmail.com</p>
      <p>📍 Riyadh, Saudi Arabia</p>
    </main>
  );
}
