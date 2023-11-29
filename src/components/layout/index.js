import React, { useState } from 'react';
import Header from '../header';
import  Footer  from '../footer';
import MyModal from '../modal/productmodal';
import { Search } from '../search';
const Layout = ({children}) => {
    const [showProductsModal,setShowPorductsModal ] = useState(false);
    return (
        <>
            <Header setShowPorductsModal={setShowPorductsModal}  />
            <Search/>
          < MyModal showProductsModal={showProductsModal} setShowPorductsModal={setShowPorductsModal}/>
            {children}
            <Footer />
        </>

    );
}

export default Layout;