import styled              from "styled-components";
import React, { useState } from "react";
import SearchIcon          from "../../../assets/search.svg";
import CrossIcon           from "../../../assets/cross.svg";

const InputBox = styled.form`
  height: 40px;
  padding: 0 3px;
  margin: 0 20px 0 0;
  border: 1px solid #ccc;
  box-shadow: none;
  background: #fff;

  border-radius: 6px;

  display: flex;
  align-items: center;
`;
const SearchBarInput = styled.input`
  width: 250px;
  margin-left: 5px;
  line-height: 38px;
  font-size: 0.875rem;
  font-weight: normal;
  color: #0a0a0a;
  border: none;
  -webkit-appearance: none;
  transition: all 0.3s ease-in-out;
  outline: none;
`;
const SearchTypeContainer = styled.div`
  height: 30px;
  position: absolute;

  background-color: white;

  margin-bottom: 0;
  padding: 6px;
  font-size: 14px;
  line-height: 16px;

  display: flex;
  align-items: baseline;

  z-index: 1;
`;

const Tile = styled.span`
  padding: 3px;
  background-color: #ffca2080;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 3px;
`;
const SearchBar = ({ onSearch, validQueryTypes=[], placeHolderText='Search here...' }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const search = (e) => {
    e.preventDefault();
    onSearch({ query: searchQuery });
    setSearched(true);
  };
  const clearSearch = () => {
    setSearchQuery("");
    onSearch();
    setSearched(true);
  };

  return <div>
    <InputBox onSubmit={search}>
      <img src={SearchIcon} alt="search" style={{ height: "16px", width: "16px", margin: "auto 5px" }} />
      <SearchBarInput onChange={e => {
        setSearchQuery(e.target.value);
        setSearched(false);
      }}
                      type="text"
                      placeholder={placeHolderText}
                      value={searchQuery}
      />
      <img onClick={clearSearch} src={CrossIcon} alt="clear-search"
           style={{ height: "16px", width: "16px", margin: "auto 5px", cursor: "pointer" }} />
    </InputBox>
    {(searchQuery && !searched && validQueryTypes.length > 0) ?
      <SearchTypeContainer>
        Search in {validQueryTypes.map(type => <Tile onClick={
        () => {
          onSearch({ query: searchQuery, queryType: type });
          setSearched(true);
        }
      }>{type}</Tile>)}
      </SearchTypeContainer>
      : null}
  </div>;
};

export default SearchBar