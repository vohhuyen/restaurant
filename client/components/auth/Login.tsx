import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="form_login absolute top-[55%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-[10] p-8 justify-center rounded-lg">
                <h2 className="text-2xl font-bold mb-6">LOGIN!</h2>
              
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
            </div>
    </div>
  )
}

export default Login
