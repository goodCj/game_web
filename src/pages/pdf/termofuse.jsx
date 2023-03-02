import FileViewer from "react-file-viewer";
import "./index.less";
const Termofuse = () => {
  return (
    <div className="pdf">
      <FileViewer
        className="pdfBox"
        fileType="docx"
        filePath={require("../../static/termofuse.docx")}
      ></FileViewer>
    </div>
  );
};

export default Termofuse;
