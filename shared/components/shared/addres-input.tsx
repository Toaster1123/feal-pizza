'use client';
import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value: string) => void;
}

export const AddresInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="8b53f52f7395250f613b625c7a6d55844001517b "
      onChange={(data) => onChange?.(data.value)}
    />
  );
};
