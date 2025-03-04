import { useEffect, useState } from "react";

const About = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/about")
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

export default About;