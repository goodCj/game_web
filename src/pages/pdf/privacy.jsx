import "./index.less";
import Gohome from "../components/goHome";
const Privacy = () => {
  return (
    <div className="pdf">
      <Gohome />
      <iframe
        src="/privacy.html"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
};

export default Privacy;
