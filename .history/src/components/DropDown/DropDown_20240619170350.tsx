import Dropdown from "react-bootstrap/Dropdown";
import { Coin } from "../../types/coin.type";

import "./DropDown.css";

interface DropDownProps {
  itemList: Coin[];
  selectedValue?: Coin;
  onSelect: (value: Coin) => void;
}

export const CoinDropDown: React.FC<DropDownProps> = ({
  itemList,
  selectedValue,
  onSelect,
}) => {
  return (
    <div className='drop-down'>
      <Dropdown>
        <Dropdown.Toggle variant='primary' className='dropdown-toggle'>
          <img
            className='drop-down__img'
            src={selectedValue.logo}
            alt={selectedValue.text}
          />
          {selectedValue.text}
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
      </Dropdown>
    </div>
  );
};
