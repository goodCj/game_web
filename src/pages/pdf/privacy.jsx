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
        filePath={`http://hpip.work/docx/privacy.docx`}
      ></FileViewer>
    </div>
  );
};

export default Privacy;
