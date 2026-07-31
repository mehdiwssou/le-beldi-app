import logo from "../../assets/logo.png";

function Brand({ size = 230 }) {
  return (
    <div className="flex justify-center mb-8">

      <img
        src={logo}
        alt="Le Beldi"
        style={{ width: size }}
        className="drop-shadow-xl"
      />

    </div>
  );
}

export default Brand;