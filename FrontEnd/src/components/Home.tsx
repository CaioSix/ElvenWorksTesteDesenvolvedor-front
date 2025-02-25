import { SignedOut, SignInButton } from "@clerk/clerk-react";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full bg-cover bg-center min-h-[calc(80vh-80px)]"
      style={{
        backgroundImage:
          "url('https://t.ctcdn.com.br/d5su41nCtTkcm1OfoVzC2jpsYsk=/1024x0/smart/filters:format(webp)/i627037.jpeg')",
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-xl font-bold">Bem-vindo!</h1>
        <p className="text-md">Clique abaixo para fazer login e acessar o painel.</p>
        <SignedOut>
          <SignInButton mode="modal" forceRedirectUrl="/dashboard">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Fazer Login
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default Home;
