import React from 'react';

export const Dropdown = ({ value, options, onChange }) => (
  <select
    className="h-10 w-40 rounded items-center border-solid border border-green-700 text-green-900 py-1 text-sm font-semibold outline-none"
    defaultValue={value}
    onChange={(evt) => onChange(evt.target.value)}
  >
    <option value="">Select value</option>
    {options.map((o, index) => (
      <option key={`${o.value}_${index}`} value={o.value}>
        {o.label}
      </option>
    ))}
  </select>
);

