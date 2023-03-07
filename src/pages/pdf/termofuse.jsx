import "./index.less";
import Gohome from "../components/goHome";
const Termofuse = () => {
  return (
    <div className="pdf">
      <Gohome />
      <iframe
        src="/termofuse.html"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
};

export default Termofuse;
