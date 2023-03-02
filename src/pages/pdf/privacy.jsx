import FileViewer from "react-file-viewer";
import "./index.less";
const Privacy = () => {
  return (
    <div className="pdf">
      <FileViewer
        className="pdfBox"
        fileType="docx"
        filePath={require("../../static/privacy.docx")}
      ></FileViewer>
    </div>
  );
};

export default Privacy;
