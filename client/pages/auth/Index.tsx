import { CSSProperties, useEffect, useState } from "react";
import Image from "next/image";
import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import dynamic from "next/dynamic";
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "react-social-login-buttons";

const LoginSocialGoogle = dynamic(
  () => import("reactjs-social-login").then((mod) => mod.LoginSocialGoogle),
  { ssr: false }
);
const LoginSocialFacebook = dynamic(
  () => import("reactjs-social-login").then((mod) => mod.LoginSocialFacebook),
  { ssr: false }
);

const images = [
  "/images/OIP (3).png",
  "/images/Remove-bg.ai_1722764959335.png",
  "/images/Remove-bg.ai_1722764446610.png",
  "/images/Remove-bg.ai_1722764462107.png",
  "/images/spicykimchiramen_1024x684.png",
];

const positions = [
  { zIndex: "8", left: "-48px", top: "-70px", width: "300px", height: "300px" },
  { zIndex: "9", left: "100px", top: "10px", width: "300px", height: "300px" },
  { zIndex: "10", left: "200px", top: "23%", width: "400px", height: "400px" },
  { zIndex: "9", left: "90px", bottom: "0px", width: "300px", height: "300px" },
  {
    zIndex: "8",
    left: "-150px",
    bottom: "-48px",
    width: "300px",
    height: "300px",
  },
];

interface Number {
  numbershow: number;
}

const Index: React.FC<Number> = ({ numbershow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showRegister, setShowRegister] = useState(numbershow || 1);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [styles, setStyles] = useState<CSSProperties>({
    width: "5000px",
    height: "1500px",
    float: "left",
    marginTop: "0px",
    marginRight: "500px",
    animationDuration: "1000ms",
    transitionDuration: "1000ms",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      marginTop: "1000px",
    }));
    setTimeout(() => {
      setStyles((prevStyles) => ({
        ...prevStyles,
        marginTop: "0px",
      }));
    }, 500);
  }, [animate]);

  const handleClick = (number: number) => {
    setShowRegister(number);
    setAnimate(!animate);
  };

  const handleSocialLogin = (user: any) => {
    console.log("Social Login Success:", user);
  };

  const handleSocialLoginFailure = (error: any) => {
    console.error("Social Login Error:", error);
  };

  return (
    <div className="relative bg-[#FFB703] h-screen w-screen overflow-hidden">
      <div
        className="absolute z-[1] h-screen ml-[200px] py-[50%] w-64 bg-blue-500 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('../images/pngtree-delicious-sushi.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div
        style={styles}
        className="z-[0] absolute rounded-[50%] bg-white"
      ></div>

      <div className="relative h-screen">
        {images.map((src, index) => {
          const position = positions[(currentIndex + index) % positions.length];
          return (
            <Image
              key={src}
              src={src}
              width={300}
              height={300}
              alt={`image-${index}`}
              className="absolute transform transition-all duration-1000"
              style={{
                left: position.left,
                top: position.top,
                bottom: position.bottom,
                width: position.width,
                height: position.height,
                zIndex: position.zIndex,
              }}
            />
          );
        })}
      </div>

      {showRegister === 1 && (
        <div>
          <Login />
          <div className="text-center mt-4 absolute top-[85%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-[10] p-8 justify-center rounded-lg">
            <p className="text-sm text-gray-600">
              Bạn chưa có tài khoản?{" "}
              <button onClick={() => handleClick(2)} className="text-green-500">
                Đăng ký
              </button>
            </p>
          </div>
        </div>
      )}

      {showRegister === 2 && (
        <div>
          <Register />
          <div className="flex items-center bg-black my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-600">hoặc</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex justify-between space-x-4">
            <LoginSocialGoogle
              client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
              onResolve={handleSocialLogin}
              onReject={handleSocialLoginFailure}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
            <LoginSocialFacebook
              appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID!}
              onResolve={handleSocialLogin}
              onReject={handleSocialLoginFailure}
            >
              <FacebookLoginButton />
            </LoginSocialFacebook>
          </div>
          <div className="text-center mt-4 absolute top-[85%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-[10] p-8 justify-center rounded-lg">
            <p className="text-sm text-gray-600">
              Bạn đã có tài khoản?{" "}
              <button onClick={() => handleClick(1)} className="text-green-500">
                Đăng nhập
              </button>
            </p>
          </div>
        </div>
      )}

      {showRegister === 3 && (
        <div>
          <ResetPassword />
          <div className="text-center mt-4 absolute top-[85%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-[10] p-8 justify-center rounded-lg">
            <p className="text-sm text-gray-600">
              Nhớ mật khẩu?{" "}
              <button onClick={() => handleClick(1)} className="text-green-500">
                Đăng nhập
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
