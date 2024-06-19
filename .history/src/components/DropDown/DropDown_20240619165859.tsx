import Dropdown as BootstrapDropDown from "react-bootstrap/Dropdown";
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
      <DropDown>
        <Dropdown.Toggle variant='success' className='dropdown-toggle'>
          {selectedValue}
        </Dropdown.Toggle>

        <Dropdown.Menu className='drop-down__menu'>
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
        </Dropdown.Menu>
      </DropDown>
    </div>
  );
};
