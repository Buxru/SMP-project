import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../Main_page/MainPage";
import Side_bar from "../Admin_page/Side_bar/Side_bar";
import HomeAdmin from "../Admin_page/AdminHome/HomeAdmin";


const MyRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<MainPage/>}/>
                        <Route path="admin" element={<HomeAdmin/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    );
};

export default MyRouter;
