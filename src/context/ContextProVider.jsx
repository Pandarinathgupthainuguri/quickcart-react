import { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/Data';
export const ecomContext = createContext();

const ContextProvider = ({ children }) => {
    // localStorage.clear()

    const localData = getLocalStorage();

    const [allData, setAllData] = useState([]);
    const [relatedItem, setRelatedItem] = useState([]);
    const [suggestedKey, setSuggestedKey] = useState(null);
    const [cartArray, setCartArray] = useState([]);


    useEffect(() => {
        setLocalStorage()
        const updatedLocalData = localData.map(elem => {
            let percentageCut = 0;

            switch (elem.itemType.toLowerCase()) {
                case 'smart watch':
                    percentageCut = 0.2;
                    break;
                case 'wireless earbuds':
                    percentageCut = 0.3;
                    break;
                default:
                    percentageCut = 0;
            }

            const discountPrice = Math.floor(elem.price * (1 - percentageCut));
            const discountPercentage = percentageCut * 100;

            return {
                ...elem,
                discountPrice,
                discountPercentage
            };
        });
        // console.log(updatedLocalData);

        setAllData(updatedLocalData);

        // Load cart from localStorage on first mount
        const localCart = JSON.parse(localStorage.getItem('cartArr')) || [];
        setCartArray(localCart);

    }, [])

    // snakbar
    const handleClickSnakbar = () => {
        enqueueSnackbar('I love snacks.');
    };

    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('This is a success message!', { variant });
    };


    return (
        <ecomContext.Provider value={{
            localData,
            allData, setAllData,
            relatedItem, setRelatedItem,
            suggestedKey, setSuggestedKey,
            cartArray, setCartArray,
        }}>
            {children}
        </ecomContext.Provider>
    );
};

export default ContextProvider;