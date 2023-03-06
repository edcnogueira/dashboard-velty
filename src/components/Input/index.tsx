import clsx from "clsx";
import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";
import MaskedInput from "react-maskedinput";
import { DataSvg } from "../Template/Icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Search = forwardRef(({ ...rest }: InputProps, ref: LegacyRef<HTMLInputElement>) => {
  return (
    <div className="relative text-inputText focus-within:text-primary-text">
      <span className="absolute inset-y-0 left-0 flex items-center">
        <div className="pl-[20px] ">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            className="w-[11px] h-[11px] text-primary-text"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </span>
      <input
        id="search"
        placeholder="Buscar"
        className={clsx(
          "bg-primary-background h-[41px] w-full rounded-l-full rounded-r-full pl-[40px] outline-none focus-within:ring-2 ring-secondary-blue"
        )}
        {...rest}
      />
    </div>
  );
});

Search.displayName = "Search";

interface InputDateProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const Date = forwardRef(
  ({ placeholder = "", ...rest }: InputDateProps, ref: LegacyRef<HTMLInputElement>) => {
    return (
      <div className="relative text-inputText focus-within:text-primary-text">
        <span className="absolute inset-y-0 left-0 flex items-center">
          <div className="pl-[20px] ">
            <DataSvg />
          </div>
        </span>
        <MaskedInput
          id="Date"
          mask="11/11/1111"
          placeholder={placeholder}
          className={clsx(
            "bg-primary-background h-[41px] w-[214px] rounded-l-full rounded-r-full pl-[40px] outline-none focus-within:ring-2 ring-transparent"
          )}
          {...rest}
        />
      </div>
    );
  }
);

Date.displayName = "Date";

export const Input = {
  Search,
  Date,
};
