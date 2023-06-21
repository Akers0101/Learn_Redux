import { Button, Form, Input } from "antd";
import { UserOutlined,LockOutlined } from "@ant-design/icons";
import Password from "antd/es/input/Password";

const LoginPage = () => {
  return (
     
      <div className="create-account-section">
        <div >
          <img
            className="image-placeholder-icon"
            alt=""
            src="https://thumbsnap.com/i/q4mpdwsH.jpg"
          />
        </div>

        <div className="create-account-form">
          <div className="headline-subhead">
            <div className="headline-subhead1">
              <div className="headline">
                <div className="create-account">Akers Login</div>
              </div>
              <div className="subhead">
                <div className="welcome-enter-your">
                  Welcome to my life !
                </div>
              </div>
            </div>
          </div>
          <Form className="form">
            <div className="typeforms">
              <Form.Item>
              <Input placeholder="Username" className="type-form" prefix={<UserOutlined />} style={{ width: 300}} />
              </Form.Item>
              <Form.Item>
              <Password placeholder="Password" className="type-form" prefix={<LockOutlined/>}  style={{ width: 300}}/>
              </Form.Item>
              
            </div>
            <Button className="button4" >
            <div className="button">Login</div>
            </Button>
           
          </Form>

        </div>
      </div>
      
  
  );
};

export default LoginPage;
