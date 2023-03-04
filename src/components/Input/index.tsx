import clsx from "clsx";
import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Search = forwardRef(({ ...rest }: InputProps, ref: LegacyRef<HTMLInputElement>) => {
  return (
    <div className="relative text-inputText focus-within:text-primary-text">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <div className="p-1 ">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </span>
      <input
        id="search"
        placeholder="Buscar"
        className={clsx(
          "bg-primary-background h-[41px] w-full rounded-l-full rounded-r-full pl-10 outline-none focus-within:ring-2 ring-secondary-blue"
        )}
        {...rest}
      />
    </div>
  );
});

Search.displayName = "Search";

export const Input = {
  Search,
};
