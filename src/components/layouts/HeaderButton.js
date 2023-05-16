import React from 'react'

const HeaderButton = () => {

    return (
        <>
            <div className="mx-auto">
                <button className="see" onClick={ ()=> window.open(`${process.env.PUBLIC_URL}/JasperJack.pdf`, "_blank")}>My resume<i className="fas fa-eye"></i></button>
            </div>
        </>
    )
}

export default HeaderButton
