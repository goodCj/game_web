import FileViewer from "react-file-viewer";
import "./index.less";
import Gohome from "../components/goHome";
import { useEffect } from "react";
const Privacy = () => {
  return (
    <div className="pdf">
      <Gohome />
      <FileViewer
        className="pdfBox"
        fileType="docx"
        filePath={require("./privacy.docx")}
      ></FileViewer>
    </div>
  );
};

export default Privacy;
