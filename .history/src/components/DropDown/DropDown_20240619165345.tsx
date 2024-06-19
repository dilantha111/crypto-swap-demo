import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Coin } from "../../types/coin.type";

import "./DropDown.css";

interface DropDownProps {
  itemList: Coin[];
  selectedValue?: string;
  onSelect: (value: string) => void;
}

export const DropDown: React.FC<DropDownProps> = ({
  itemList,
  selectedValue,
  onSelect,
}) => {
  return (
    <div className='drop-down'>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        Dropdown Button
      </Dropdown.Toggle>

      <DropdownButton className='drop-down__button' title={selectedValue}>
        {itemList.map((item) => (
          <Dropdown.Item
            className='drop-down__item'
            key={item.value}
            onClick={() => onSelect(item.text)}
          >
            <img className='drop-down__img' src={item.logo} alt={item.text} />
            {item.text}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};
