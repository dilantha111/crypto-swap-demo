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
      <DropdownButton id='dropdown-basic-button' title='Dropdown button'>
        <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};
