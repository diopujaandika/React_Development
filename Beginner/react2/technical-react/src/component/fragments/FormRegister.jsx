import Button from "../catalog_component/button/Button";
import InputForm from "../catalog_component/input/Index";

const FormRegister = () => {
    return (
        <form action = "">
            <InputForm
                label="Fullname"
                type="text"
                placeholder="Insert your name here..."
                name="fullname"
            />
             <InputForm
                label="Email"
                type="email"
                placeholder="example@mail.com"
                name="email"
            />
            <InputForm
                label="Paswword"
                type="password"
                placeholder="********"
                name="password"/>
            <InputForm
                label="Confirm Paswword"
                type="password"
                placeholder="********"
                name="confirmPassword"/>
          <Button variant="blue">Register</Button>
        </form>
    )
}

export default FormRegister;