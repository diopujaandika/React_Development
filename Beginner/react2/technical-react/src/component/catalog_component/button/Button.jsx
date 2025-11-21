const Button = ({ children = "Button", variant = "blue" }) => {

    const variantClass = {
        blue: "bg-blue-600",
        red: "bg-red-600",
        black: "bg-black",
        green: "bg-green-600",
    }[variant] || "bg-black";

    return (
        <div>
            <button
                className={`h-10 px-6 font-semibold rounded-md text-white w-full ${variantClass}`}
                type="submit"
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
