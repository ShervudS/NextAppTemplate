import React, { FC } from 'react';

interface IMainLayout {}

const MainLayout: FC<IMainLayout> = ({ children }) => {
    return (
        <>
            <header>Header</header>
            {children}
        </>
    );
};

export default MainLayout;
