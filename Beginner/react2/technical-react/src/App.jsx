import React from "react";
import Button from "./component/catalog_component/button/Button";
import InputForm from "./component/catalog_component/input/Index";

function App()  {
  return  (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="font-medium text-slate-500 mb-6">Welcome, please enter your details!</p>
        <form action="">
          <InputForm namme="email" type="email" placeholder="example@gmail.com" label="email"/>
          <InputForm name="password" type="email" placeholder="********" label="password"/>
          <Button variant="blue">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default App;