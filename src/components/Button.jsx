
const Button = ({children,color="success",width="w-auto", onClick}) => {
    const BtnColor = {
        primary : "bg-blue-500",
        success : "bg-green-500",
        danger : "bg-red-500",
        info : "bg-cyan-500",
        warning : "bg-yellow-500",
    }
    return (
        <div>
            <button onClick={onClick} className={`${BtnColor[color]} ${width} text-white px-3 py-2 rounded-sm`}>
                {children}
            </button>
        </div>
    );
};

export default Button;