"use client";
import { SearchField } from "@heroui/react";

const NavSearch = () => {
  return (
    <div className="w-full flex justify-center px-2">
      <div
        className="
          w-full 
          max-w-[150px] 
          sm:max-w-[200px] 
          md:max-w-[240px] 
          lg:max-w-[720px] 
        "
      >
        <SearchField name="search">
          <SearchField.Group
            className="
              flex items-center gap-2 
              border rounded-md 
              px-2 sm:px-3 
              py-1.5 sm:py-2
              bg-white
              w-full
              overflow-hidden
            "
          >
            <SearchField.Input
              className="flex-1 outline-none text-sm min-w-0"
              placeholder="Search..."
            />
            <SearchField.ClearButton />
            <SearchField.SearchIcon />
          </SearchField.Group>
        </SearchField>
      </div>
    </div>
  );
};

export default NavSearch;
