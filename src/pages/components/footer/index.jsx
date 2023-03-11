import "./index.less";

const Footer = () => {
  const goPage = (type) => {
    if (type === 1) {
      window.location.href = "/aboutus";
    } else if (type === 2) {
      window.location.href = "/termofuse";
    } else {
      window.location.href = "/privacy";
    }
  };

  return (
    <div className="footer">
      <span onClick={() => goPage(1)}>About Us</span> |{" "}
      <span onClick={() => goPage(2)}> Trems of Use</span> |{" "}
      <span onClick={() => goPage(3)}>Privacy Policy</span>
    </div>
  );
};

export default Footer;
