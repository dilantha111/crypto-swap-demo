import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

interface DropDownProps {
  itemList: {
    text: string;
    value: string;
    logo: string;
  }[];
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
      <DropdownButton id='dropdown-basic-button' title={selectedValue}>
        {itemList.map((item) => (
          <Dropdown.Item key={item.value} onClick={() => onSelect(item.value)}>
            <img src={item.logo} alt={item.text} />
            {item.text}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};
