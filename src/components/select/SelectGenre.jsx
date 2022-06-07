import { Fragment, useState, useRef, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { MdKeyboardArrowDown } from "react-icons/md";

import { selectTypes } from "../../data/selectType";

export const SelectGenre = () => {
  const [selected, setSelected] = useState(selectTypes[0]);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
  });

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-72">
        <Listbox.Button className="flex justify-between items-center w-full cursor-pointer rounded-md bg-black py-3 pl-3 focus:outline-none  focus-visible:ring-2 sm:text-sm">
          <span className="block truncate">
            {firstRender.current ? "Genre" : `${selected.name.charAt(0).toUpperCase()}${selected.name.slice(1)}`}
          </span>
          <span className="pointer-events-none pr-2">
            <MdKeyboardArrowDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>

        <Transition as={Fragment} leave="transition ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute max-h-80 w-full scrollbar-select overflow-auto rounded-md bg-black ring-1 focus:outline-none sm:text-sm">
            {selectTypes.map((item) => (
              <Listbox.Option
                key={item.id}
                className={({ active }) => `relative cursor-pointer p-2 select-none  ${active ? "bg-white text-black" : "text-white"}`}
                value={item}
              >
                {({ selected }) => (
                  <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{`${item.name
                    .charAt(0)
                    .toUpperCase()}${item.name.slice(1)}`}</span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
