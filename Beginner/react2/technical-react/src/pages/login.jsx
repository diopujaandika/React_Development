import { Link } from "react-router-dom";
import FormLogin from "../component/fragments/FormLogin";
import AuthLayout from "../component/layouts/AuthLayouts";

const LoginPage = () => {
    return (
        <AuthLayout title = "Login">
            <FormLogin/>
            <p className="text-sm mt-5 text-center">Don't have an account?
                <Link className="font-bold text-blue-600 " to="/register"> Register</Link> 
            </p>
        </AuthLayout>
    )
}

export default LoginPage;