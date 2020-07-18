// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValue, cb) => {
    const [values, setValues] = useState(initialValue)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    

    const handleSubmit = e => {
        e.preventDefault();
        cb();
    }

    return [values, showSuccessMessage, setShowSuccessMessage, handleChanges, handleSubmit];
};

export default useForm;
