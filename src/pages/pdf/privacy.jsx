import FileViewer from "react-file-viewer";
import "./index.less";
const Privacy = () => {
  return (
    <div className="pdf">
      <FileViewer
        className="pdfBox"
        fileType="docx"
        filePath={`http://hpip.work/docx/privacy.docx`}
      ></FileViewer>
    </div>
  );
};

export default Privacy;
