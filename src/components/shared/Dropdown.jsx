import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback
}                      from "react";
import styled, { css } from "styled-components";
import InputLabel      from "@material-ui/core/InputLabel/InputLabel";


const DropDownOptionsContainer = styled.div`
  width: max-content;
  max-height: 50vh;

  margin-bottom: 0;
  padding: 4px;

  position: absolute;
  z-index: 1;
  background-color: white;
  
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;
  
  overflow: hidden;

  ${p => p.hide ? `visibility: hidden` : ``      }
`;
const Options = styled.ul`
  list-style-type: none;
  overflow: scroll;
  max-height: calc(50vh - 33px);
  ::-webkit-scrollbar {
    display: none;
  }
`
const DropdownOption = styled.li`
  padding: 3px 5px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 0.5rem;
  margin: 1px 0;

  :hover,
  :active,
  :focus,
  :focus-visible {
    background-color: #ffca2020;
  }

  ${p => p.selected && css`background-color: #ffca2080;`}
`;

const SearchQueryBox = styled.input`
  width: 100%;
  font-size: 14px;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #111827;
  line-height: 1.25rem;
  padding: 5px 5px 1px;
  text-align: left;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 5px;
`;
const Hero = styled.input`
  min-width: 200px;
  width: ${p => (p.value?.length || 20) + 3}ch;
  max-width: 100%;
  background-color: #ffffff;

  border: 1px solid rgb(209, 213, 219);
  border-radius: 0.5rem;

  box-sizing: border-box;
  color: #111827;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.75rem 1rem;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  touch-action: manipulation;
  caret-color: transparent;
  user-select: none;
  -webkit-user-select: none;
`;

export const UseDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const clickListener = (e) => {
    if (!containerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", clickListener);
    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, []);
  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
  };
  const toggleIsOpen = () => {
    setIsOpen(prevValue => !prevValue);
  };

  return { isOpen, containerRef, open, close, toggleIsOpen };
};

export const DropDown = (props) => {
  const {
    heroText = "Select an option",
    label,
    options,
    onChange,
    value = null,
    searchable = false,
    required = false,
    multiValue = false,
    disabled = false,
    sx={}
  } = props;
  const { isOpen, toggleIsOpen, containerRef } = UseDropDown({ name: "DropDown Main" });
  const onChange_ = useCallback((value_, index) => {
    if (multiValue) {
      if (value.includes(value_)) {
        onChange(value.filter(_ => _ != value_), index);
      } else {
        onChange([...value, value_], index);
      }
      return;
    }
    onChange(value_, index);
    toggleIsOpen();
  }, [value, multiValue]);

  return (
    <div ref={containerRef}>
      <InputLabel>{label}</InputLabel>
      <div onClick={disabled ? undefined : toggleIsOpen}>
        <Hero value={multiValue && value ? value.join(", ") : value} placeholder={heroText} required={required} style={{...sx}}/>
      </div>
      {isOpen && !disabled ?
        options.length ?
          <DropDownOptions
            isOpen={isOpen}
            options={options.map(_ => ({ ..._, selected: multiValue ? value.includes(_.value) : value == _.value }))}
            onChange={onChange_}
            searchable={searchable}
          />
          :
          <DropDownOptionsContainer>
            <DropdownOption>No options to select</DropdownOption>
          </DropDownOptionsContainer>
        : null}
    </div>
  );
};


export const DropDownOptions = ({
                                  isOpen,
                                  options,
                                  onChange,
                                  searchable = false,
                                  hide = false, sx = {}
                                }) => {
  const onClick = (index, _value) => (event) => {
    event.preventDefault();
    onChange(_value, index);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const optionsToRender = useMemo(() => {
    const _ = options
      .filter(option => searchable ? option.label.toLowerCase().includes(searchQuery.toLowerCase()) : true)
      .reduce((acc, item) => {
        acc[item.selected ? "selected" : "rest"].push(item);
        return acc;
      }, { selected: [], rest: [] });
    return [..._.selected, ..._.rest];
  }, [options, searchable, searchQuery]);

  return isOpen ? (
    <DropDownOptionsContainer hide={hide} style={sx}>
      {searchable ? <SearchQueryBox type="text" placeholder={"search here..."} value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)} /> : null}
      <Options>
      {optionsToRender
        .map((option, index) =>
          <DropdownOption onClick={onClick(index, option.value)} key={index} selected={option.selected}>
            {option.label}
          </DropdownOption>
        )}
      </Options>
    </DropDownOptionsContainer>
  ) : null;
};