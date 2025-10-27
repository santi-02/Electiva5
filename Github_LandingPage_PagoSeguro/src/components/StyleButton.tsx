import React, { useState }from 'react'

    interface Props{
        label: string;
        color: string;
        handleClick: () => void;
    }

export const StyleButton = ({label, color, handleClick}: Props) => {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="p-6 space-y-4 flex flex-col items-center">
        <button
            disabled={clicked}
            className={`${color} px-6 py-3 rounded-md text-black font-bold transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed`}
            onClick={handleClick}
        >
            {label}
        </button>

        <label className="flex items-center gap-2 text-white-700">
            <input
            type="checkbox"
            checked={clicked}
            onChange={() => setClicked(!clicked)}
            />
            Deshabilitar botón
        </label>
        </div>
    );
}
