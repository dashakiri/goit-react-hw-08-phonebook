import React from "react";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/contacts/contacts-actions";
import {FilterLablel, Input} from './Filter.styled';

const Filter = () => {
    const dispatch = useDispatch();

    return (
        <FilterLablel>
            Find contacts by name
            <Input
            type="text"
            onChange={e => dispatch(filterContacts(e.target.value))}
            />
        </FilterLablel>
    );
};

export default Filter;