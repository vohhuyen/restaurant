
// export default Login;
import Image from "next/image";
import { useEffect } from "react";

const Login = () => {
    useEffect(() => {
        const images = document.querySelectorAll(".image-container img");
        let index = 0;

        const enlargeImage = () => {
            images.forEach((img, i) => {
                img.classList.toggle("enlarged", i === index);
            });
            index = (index + 1) % images.length;
        };

        const interval = setInterval(enlargeImage, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-[#FFB703] h-screen w-screen overflow-hidden">
            <div
                className="absolute z-[1] h-screen ml-[200px] py-[50%] w-64 h-32 bg-blue-500 bg-no-repeat bg-center bg-cover"
                style={{
                    backgroundImage: "url('../images/pngtree-delicious-sushi.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
                {/* Thay đổi màu nền và độ mờ */}
            </div>

            <div className="z-[0] absolute rounded-[50%] w-[3500px] h-[1200px] float-left bg-white mt-[0px] mr-[100px]"></div>

            <div className="relative h-screen ">
                <img
                    src="/images/OIP (3).png"
                    alt="h1"
                    className="absolute w-[210px] h-[300px]  left-[-48px] top-[-70px] transform "
                />
                <img
                    src="/images/Remove-bg.ai_1722764959335.png"
                    alt="h1"
                    className="absolute z-[1] w-[320px] h-[320px]  left-[80px] top-[-20px] transform "
                />
                <img
                    src="/images/Remove-bg.ai_1722764446610.png"
                    alt="h1"
                    className="absolute z-[2] w-[320px] h-[320px]  left-[185px] top-[150px] transform "
                />
                <img
                    src="/images/Remove-bg.ai_1722764462107.png"
                    alt="h2"
                    className="absolute z-[1] w-[270px] h-[270px] left-[80px]  bottom-[-20px] transform "
                />
                <img
                    src="/images/spicykimchiramen_1024x684.png"
                    alt="h2"
                    className="absolute  w-[400px] h-[270px] bottom-[-48px] left-[-150px] transform "
                />
            </div>



            <div className="form_login absolute top-[55%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-[10] p-8 justify-center rounded-lg">
                <h2 className="text-2xl font-bold mb-6">BINE AI REVENIT!</h2>
              
                <form className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Parola"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-sm text-gray-600">
                            Ai uitat parola?
                        </a>
                    </div>
                    <div className="w-full flex justify-center">
                        <button className="w-1/2 bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                            Login
                        </button>
                    </div>
                </form>

                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-gray-600">Sau</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <div className="flex justify-between space-x-4">
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                        <img
                            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                            alt="Google"
                            className="h-5 mr-2"
                        />
                        Google
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                        <img
                            src="https://image.similarpng.com/very-thumbnail/2020/11/Blue-facebook-icon-on-transparent-background-PNG.png"
                            alt="Facebook"
                            className="h-5 mr-2"
                        />
                        Facebook
                    </button>
                </div>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Nu ai un cont existent?{" "}
                        <a href="#" className="text-green-500">
                            Înregistrează-te
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
