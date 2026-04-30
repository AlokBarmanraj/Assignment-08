"use client";
import { Label, SearchField } from "@heroui/react";

const NavSearch = () => {
  return (
    <div className="w-full px-4">
      <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[720px]">
        <SearchField name="search">
          <SearchField.Group className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer">
            <SearchField.Input className="flex-1 outline-none" />
            <SearchField.ClearButton />
            <SearchField.SearchIcon />
          </SearchField.Group>
        </SearchField>
      </div>
    </div>
  );
};

export default NavSearch;
