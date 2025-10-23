import Logo from "./Logo";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
      }}
    >
      <Logo />
      {/* Add nav links or buttons here */}
    </header>
  );
}
