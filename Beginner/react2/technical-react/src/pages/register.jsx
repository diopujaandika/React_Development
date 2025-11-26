import FormRegister from "../component/fragments/FormRegister";
import AuthLayout from "../component/layouts/AuthLayouts";

const RegisterPage = () => {
    return (
        <AuthLayout title = "Register">
            <FormRegister/>
        </AuthLayout>
    )
}

export default RegisterPage;