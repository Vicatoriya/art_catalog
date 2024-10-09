import { SelectWrapper, SortLabel, SortSelect } from './styled';
import SortSelectorProps from 'src/mytypes/SortSelectorProps';
import { SORT_OPTIONS } from '@constants/SortSelectorConstants';

export default function SortSelector(props: SortSelectorProps) {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onSortChange(e.target.value);
  };

  const optionsList = SORT_OPTIONS.map((option) => (
    <option key={option}>{option}</option>
  ));

  return (
    <SelectWrapper>
      <SortLabel htmlFor="sort">Sort by:</SortLabel>
      <SortSelect
        id="sort"
        value={props.selectedSort}
        onChange={handleSortChange}
      >
        {optionsList}
      </SortSelect>
    </SelectWrapper>
  );
}
