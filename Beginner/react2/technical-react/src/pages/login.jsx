import FormLogin from "../component/fragments/FormLogin";
import AuthLayout from "../component/layouts/AuthLayouts";

const LoginPage = () => {
    return (
        <AuthLayout title = "Login">
            <FormLogin/>
        </AuthLayout>
    )
}

export default LoginPage;