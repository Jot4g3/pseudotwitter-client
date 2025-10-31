import { ClipLoader } from "react-spinners";

function Loader({size}) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <ClipLoader color="#3498db" size={size} />
    </div>
  );
}

export default Loader;