import { Link } from "react-router-dom";
import FormRegister from "../component/fragments/FormRegister";
import AuthLayout from "../component/layouts/AuthLayouts";

const RegisterPage = () => {
    return (
        <AuthLayout title = "Register">
            <FormRegister/>
            <p className="text-sm mt-5 text-center">Have an account?
                <Link className="font-bold text-blue-600 " to="/login"> Login</Link> 
            </p>
        </AuthLayout>
    )
}

export default RegisterPage;