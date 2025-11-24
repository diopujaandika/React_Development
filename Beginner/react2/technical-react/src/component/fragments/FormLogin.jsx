import Button from "../catalog_component/button/Button"

const FormLogin = () => {
    return (
        <form action = "">
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
          <Button variant="blue">Login</Button>
        </form>
    )
}

export default FormLogin;