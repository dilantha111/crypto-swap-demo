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
  return <div className='drop-down'></div>;
};
