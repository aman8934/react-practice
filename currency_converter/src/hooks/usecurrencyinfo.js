import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});

    useEffect(() => {
        // Updated to fetch from your local data.json
        // Note: In a real app, you'd handle loading states and errors more robustly.
        fetch(`/data.json`) // Vite/CRA automatically serves files from 'public'
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((allCurrenciesData) => {
                // Assuming data.json contains all currencies at the top level
                // and you want the object corresponding to the 'currency' argument.
                console.log("Local JSON Data:", allCurrenciesData); // Inspect this
                setData(allCurrenciesData[currency]); // Access the specific currency's rates
            })
            .catch((error) => {
                console.error("Failed to load local currency data:", error);
                setData({});
            });
    }, [currency]); // Dependency array: rerun effect if 'currency' changes

    return data;
}

export default useCurrencyInfo;