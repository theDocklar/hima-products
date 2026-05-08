"use client";

import { Input } from "@/components/ui/input";

interface ProductSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearchBar({
  value,
  onChange,
}: ProductSearchBarProps) {
  return (
    <div className="w-full md:w-80 md:ml-auto">
      <Input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search Products"
        aria-label="Search products by name"
        className="shadow-md"
      />
    </div>
  );
}
