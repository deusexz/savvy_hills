import { useForm } from "react-hook-form";

const useContactSubmit = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return { register, handleSubmit, reset, errors, onSubmit };
};

export default useContactSubmit;
