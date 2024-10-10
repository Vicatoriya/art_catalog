import { SORT_OPTIONS } from '@constants/SortSelectorConstants';
import SortSelectorProps from '@mytypes/SortSelectorProps';

import { SelectWrapper, SortLabel, SortSelect } from './styled';

export default function SortSelector({
  selectedSort,
  onSortChange,
}: SortSelectorProps) {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value);
  };

  const optionsList = SORT_OPTIONS.map((option) => (
    <option key={option}>{option}</option>
  ));

  return (
    <SelectWrapper>
      <SortLabel htmlFor="sort">Sort by:</SortLabel>
      <SortSelect id="sort" value={selectedSort} onChange={handleSortChange}>
        {optionsList}
      </SortSelect>
    </SelectWrapper>
  );
}
