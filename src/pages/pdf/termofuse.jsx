import FileViewer from "react-file-viewer";
import "./index.less";
import Gohome from "../components/goHome";
const Termofuse = () => {
  return (
    <div className="pdf">
      <Gohome />
      <iframe
        style={{ width: "100%", height: "100%" }}
        src="https://d3cdeza28ixtol.cloudfront.net/docx/termofuse.docx"
      ></iframe>
      {/* <FileViewer
        className="pdfBox"
        fileType="docx"
        filePath={`https://d3cdeza28ixtol.cloudfront.net/docx/termofuse.docx`}
      ></FileViewer> */}
    </div>
  );
};

export default Termofuse;
