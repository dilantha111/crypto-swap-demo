interface DropDownProps {
  itemList: {
    text: string;
    value: string;
    logo: string;
  }[];
}

export const DropDown: React.FC<DropDownProps> = ({ itemList }) => {
  return <div className='drop-down'></div>;
};
