import { Input, Label } from './Filter.styled';
import { getFilter } from 'Redux/filterSlice';
import { useDispatch, useSelector} from 'react-redux';
import { selectFilteredContacts } from 'Redux/selectors';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilteredContacts)
    const changeFilter = e => {
        dispatch(getFilter(e.currentTarget.value.toLowerCase()));
      };
    return (
        <Label>
            Find contact by name
            <Input
                type="text"
                name="name"
                placeholder="Enter contact name"
                value={filter}
                onChange={changeFilter}
                // pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
            />
        </Label>
    );
};

