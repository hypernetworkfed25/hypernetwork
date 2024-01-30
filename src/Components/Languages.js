import React,{useState, useEffect} from "react";

const Languages =({onSelectLanguage}) =>{
    const[languages, setLanguages] = useState([]);

    useEffect(() =>){

        const fetchLanguages = async () =>{

            try{
                const response = await fetch("https://www.localeplanet.com/api/auto/langmap.html");
                const data = await = response.json();
                setLanguages(data);
            } catch (error) {
                console.error('Error fetching languages:', error);
            }
            };
        }
    }
}

export default Languages;