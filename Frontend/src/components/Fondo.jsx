import React from "react";

export const Fondo = ( {children} ) => {
    return (

        <div className="min-h-screen bg-[url('/src/assets/img/fondo.jpg')] bg-cover">
            <div className="bg-neutral-900/60">
                {children}
            </div>
        </div>
    )
};