import { Button, Space, FloatingBubble } from "antd-mobile";
import { FireFill } from "antd-mobile-icons";
import { useHistory } from "react-router-dom";
import "./index.less";
const Gohome = () => {
  const history = useHistory();

  return (
    <FloatingBubble
      axis="xy"
      magnetic="x"
      className="goHome"
      style={{
        "--initial-position-top": "50px",
        "--initial-position-left": "20px",
        "--edge-distance": "10px",
      }}
    >
      <Button
        className="homeBtn"
        onClick={() => {
          history.push({
            pathname: "/",
          });
        }}
      >
        <Space>
          <FireFill />
          <span>Home</span>
        </Space>
      </Button>
    </FloatingBubble>
  );
};

export default Gohome;
