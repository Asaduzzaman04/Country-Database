import errorpic from "../../public/errorpic.png"

const ErrorPage = () => {
    return (
        <div className=" container mx-auto text-center flex flex-col gap-5 items-center justify-center">
            <img className=" w-full h-full bg-cover" src={errorpic} alt=""  />
        </div>
    );
};

export default ErrorPage;