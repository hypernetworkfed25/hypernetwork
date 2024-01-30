import React, {useState} from "react";

const Search =({searchData, onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange =(event) =>{
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        console.log("handleSearch function called");
        console.log("searchTerm:", searchTerm);
        console.log("searchData:", searchData);

        if (Array.isArray(searchData.users)) {
          const searchTermLowerCase = searchTerm.toLowerCase().trim();
          console.log("searchTerm:", searchTermLowerCase);
      
          const searchResults = searchData .users.filter((users) => {
            const lowercasedLanguages = users.languages.map((lang) => lang.toLowerCase());
            const hasSearchTerm =
              users.firstName.toLowerCase().includes(searchTermLowerCase) ||
              users.program.toLowerCase().includes(searchTermLowerCase) ||
              lowercasedLanguages.includes(searchTermLowerCase) ||
              users.hardSkills.some((skill) => skill.skill.toLowerCase().includes(searchTermLowerCase)) ;
          

              console.log("User:", users);
              console.log("Does user match the search term?:", hasSearchTerm);
              console.log("Has search term?", hasSearchTerm);
      
            return hasSearchTerm;
          });
          console.log("searchResults:", searchResults);
          onSearch(searchResults);
        }
      };

    return (
        <div>
            <input type="text" placeholder="Search...." value={searchTerm} 
            onChange={handleInputChange} >
            </input>
            <button onClick={handleSearch}> Click me</button>
        </div>
    );
};



export default Search;