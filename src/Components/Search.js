import React, {useState} from "react";

const Search =({searchData, onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange =(event) =>{
        setSearchTerm(event.target.value);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    };

    const handleSearch = () => {
       

        if (Array.isArray(searchData.users)) {
          const searchTermLowerCase = searchTerm.toLowerCase().trim();
          const searchResults = searchData .users.filter((users) => {
          const lowercasedLanguages = users.languages.map((lang) => lang.toLowerCase());
          const hasSearchTerm =
              users.firstName.toLowerCase().includes(searchTermLowerCase) ||
              users.program.toLowerCase().includes(searchTermLowerCase) ||
              lowercasedLanguages.includes(searchTermLowerCase) ||
              users.hardSkills.some((skill) => skill.skill.toLowerCase().includes(searchTermLowerCase)) ||
              users.portfolio.toLowerCase().includes(searchTermLowerCase)||
              (users.contact && users.contact.email.toLowerCase().includes(searchTermLowerCase));
             
              

            return hasSearchTerm;
          });
         
          onSearch(searchResults);
        }
      };

    return (
        <div className="container">
            <input type="text" className="input"
            placeholder="Search...." 
            value={searchTerm} 
            onChange={handleInputChange} 
            onKeyDown={handleKeyDown} >
            </input>
            
        </div>
    );
};



export default Search;
