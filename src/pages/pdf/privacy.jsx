import FileViewer from "react-file-viewer";
import "./index.less";
import Gohome from "../components/goHome";
import { useEffect } from "react";
const Privacy = () => {
  return (
    <div className="pdf">
      <Gohome />
      <iframe
        style={{ width: "100%", height: "100%" }}
        src="https://d3cdeza28ixtol.cloudfront.net/docx/privacy.docx"
      ></iframe>
      {/* <FileViewer
        className="pdfBox"
        fileType="docx"
        filePath={require("./privacy.docx")}
      ></FileViewer> */}
    </div>
  );
};

export default Privacy;
