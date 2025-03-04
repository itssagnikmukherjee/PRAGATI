import { useEffect, useState } from "react";

const Privacy = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/privacy")
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="text-slate-800">
            {message}
        </div>
    );
};

export default Privacy;