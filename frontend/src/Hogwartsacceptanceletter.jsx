import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import logo from './assets/lettercardimg.jpeg';

function Hogwartsacceptanceletter() {
    const [userName, setUserName] = useState('');

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    const generatePdf = () => {
        axios.get('http://localhost:8080/pdf?name='+userName,
            {
                responseType: 'arraybuffer',
                headers: {
                    'Accept': 'application/pdf'
                }
            })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${userName}.pdf`);
                document.body.appendChild(link);
                link.click();
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="cursor-default">
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-md bg-white shadow-lg rounded-xl overflow-hidden">
                    <figure className="flex justify-center">
                        <img src={logo} alt="Hogwarts Letter" className="rounded-s flex-auto" />
                    </figure>
                    <div className="p-6">
                        <label htmlFor="letter-input-name" className="block text-sm font-medium text-gray-700 mb-2">What is your name?</label>
                        <input
                            id="letter-input-name"
                            type="text"
                            placeholder="Type here"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            value={userName}
                            onChange={handleNameChange}
                            maxLength={20}
                            name="letter-input-name"
                        />
                        <div className="mt-4">
                            <p className="text-base text-gray-700 mb-2">
                                Generate your own Hogwarts acceptance letter with your name!
                            </p>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                onClick={generatePdf}
                            >
                                Generate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hogwartsacceptanceletter;
