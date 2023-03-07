import FileViewer from "react-file-viewer";
import "./index.less";
import Gohome from "../components/goHome";
const Termofuse = () => {
  return (
    <div className="pdf">
      <Gohome />
      <FileViewer
        className="pdfBox"
        fileType="docx"
        filePath={require(`https://hpip.work/docx/termofuse.docx`)}
      ></FileViewer>
    </div>
  );
};

export default Termofuse;
