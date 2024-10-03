import React from 'react';
import { SelectWrapper, SortLabel, SortSelect } from './styled';

interface SortSelectorProps {
  onSortChange: (criteria: string) => void;
  selectedSort: string;
}

const sortOptions: Array<string> = ['title', 'artist', 'date'];

export default function SortSelector(props: SortSelectorProps) {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onSortChange(e.target.value);
  };

  return (
    <SelectWrapper>
      <SortLabel htmlFor="sort">Sort by:</SortLabel>
      <SortSelect
        id="sort"
        value={props.selectedSort}
        onChange={handleSortChange}
      >
        {sortOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </SortSelect>
    </SelectWrapper>
  );
}
