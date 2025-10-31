import { ClipLoader } from "react-spinners";

function Loader({ size }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",   // centraliza verticalmente
      width: "100%",
      height: "100%",          // ocupa toda a altura do container pai
    }}>
      <ClipLoader color="#3498db" size={size} />
    </div>
  );
}

export default Loader;
