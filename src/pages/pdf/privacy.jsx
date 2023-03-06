import FileViewer from "react-file-viewer";
import "./index.less";
import Gohome from "../components/goHome";
const Privacy = () => {
  return (
    <div className="pdf">
      <Gohome />
      <FileViewer
        className="pdfBox"
        fileType="docx"
        filePath={`https://d3cdeza28ixtol.cloudfront.net/docx/privacy.docx`}
      ></FileViewer>
    </div>
  );
};

export default Privacy;
