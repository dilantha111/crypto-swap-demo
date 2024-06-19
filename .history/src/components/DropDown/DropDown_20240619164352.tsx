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
      <DropdownButton className='drop-down__button' title={selectedValue}>
        {itemList.map((item) => (
          <Dropdown.Item
            className='drop-down__item'
            key={item.value}
            onClick={() => onSelect(item.value)}
          >
            <img className='drop-down-img' src={item.logo} alt={item.text} />
            {item.text}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};
