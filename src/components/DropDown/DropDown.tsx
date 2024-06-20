import Dropdown from "react-bootstrap/Dropdown";
import { Coin } from "../../types/coin.type";

import "./DropDown.css";

interface DropDownProps {
  itemList: Coin[];
  selectedCoin?: Coin;
  onSelect: (value: Coin) => void;
}

export const CoinDropDown: React.FC<DropDownProps> = ({
  itemList,
  selectedCoin,
  onSelect,
}) => {
  return (
    <div className='drop-down'>
      <Dropdown>
        <Dropdown.Toggle variant='primary' className='dropdown-toggle'>
          {selectedCoin ? (
            <img
              className='drop-down__img'
              src={selectedCoin.logo}
              alt={selectedCoin.text}
            />
          ) : null}
          {selectedCoin ? selectedCoin.text : "Select token"}
        </Dropdown.Toggle>

        <Dropdown.Menu className='drop-down__menu'>
          {itemList.map((item) => (
            <Dropdown.Item
              className='drop-down__item'
              key={item.value}
              onClick={() => onSelect(item)}
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
