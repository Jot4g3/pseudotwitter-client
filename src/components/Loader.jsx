import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <ClipLoader color="#3498db" size={50} />
    </div>
  );
}

export default Loader;