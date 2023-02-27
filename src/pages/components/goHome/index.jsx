import { Button, Space } from "antd-mobile";
import { FireFill } from "antd-mobile-icons";
import { useHistory } from "react-router-dom";
import "./index.less";
const Gohome = () => {
  const history = useHistory();

  return (
    <div className="goHome">
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
    </div>
  );
};

export default Gohome;
