"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface Props {
  brands: string[];
}

const FiltersBar = ({ brands }: Props) => {
  const [priceFilter, setPriceFilter] = useState<string | null>(null);
  const [currentBrand, setCurrentBrand] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateFilter = (filterKey: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(filterKey, value);
    } else {
      params.delete(filterKey);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="px-6 py-4 bg-stone-900 m-6 rounded-sm overflow-y-scroll flex gap-4">
      <div className="w-fit border-r border-primary pr-2 text-sm">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <span className="uppercase tracking-widest flex items-center gap-1">
              Price
              {priceFilter !== null && (
                <span className="uppercase">: {priceFilter}</span>
              )}
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              {priceFilter !== null && (
                <DropdownMenuItem
                  onClick={() => {
                    updateFilter("sort", null);
                    setPriceFilter(null);
                  }}
                >
                  <span className="uppercase text-red-600">Clear</span>
                </DropdownMenuItem>
              )}
              {priceFilter === null && (
                <>
                  <DropdownMenuItem
                    onClick={() => {
                      updateFilter("sort", "price_desc");
                      setPriceFilter("high to low");
                    }}
                  >
                    <span className="uppercase">high to low</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      updateFilter("sort", "price_asc");
                      setPriceFilter("low to high");
                    }}
                  >
                    <span className="uppercase">low to high</span>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="w-fit border-r border-primary pr-2 text-sm">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="uppercase tracking-widest flex items-center gap-1">
              {currentBrand !== null ? currentBrand : "Brand"}
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              {currentBrand !== null && (
                <DropdownMenuItem
                  onClick={() => {
                    updateFilter("brand", null);
                    setCurrentBrand(null);
                  }}
                >
                  <span className="uppercase text-red-600">Clear</span>
                </DropdownMenuItem>
              )}

              {currentBrand === null && (
                <>
                  {brands.map((brand) => (
                    <DropdownMenuItem
                      key={brand}
                      onClick={() => {
                        updateFilter("brand", brand);
                        setCurrentBrand(brand);
                      }}
                    >
                      <span className="uppercase">{brand}</span>
                    </DropdownMenuItem>
                  ))}
                </>
              )}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default FiltersBar;
