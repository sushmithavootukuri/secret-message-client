import React, { useState, useEffect } from "react";
import { api } from "./api/index";

export default function ViewSecretMessage({ id }) {
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function getMessage() {
            const response = await api.get(`/message-by-id/${id}`);

            setMessage(response.data.result[0].message);
        }
        getMessage();
    }, []);

    return (

        <div className="col-md-8 mt-3 mx-auto mt-5">
            <div className="card h-100">
                <div className="card-body text-center">
                    {!message ? (
                        <h5 className="card-title">Oops! Message is either deleted by the Sender or You have navigated to a different link</h5>
                    ) : (
                        <>   <h5 className="card-title">Your Secret Message is </h5>
                            <p className="card-text ">{message}  </p> </>
                    )}
                </div>
            </div>
        </div >


    );
};