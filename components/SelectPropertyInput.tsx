import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SelectPropertyInput = () => {
  return (
    <>
      <div className="flex flex-col gap-3 sm:w-2/3">
        <Input
          type="email"
          placeholder="Enter location"
          className="text-white"
        />
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className="px-20 sm:w-12 rounded-full bg-orange-600 mt-4">
          Search
        </Button>
      </div>
    </>
  );
};

export default SelectPropertyInput;
