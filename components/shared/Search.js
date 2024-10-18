import React from 'react'
import Image from 'next/image';
import { Input } from '../ui/input';
import SearchButton from './SearchButton';
function Search() {
    return (
        <>
            <div className="search ">
                <Image
                    src="/assets/icons/search.svg"
                    alt="search"
                    width={44}
                    height={44}
                />

                <Input
                    className="search-field"
                    placeholder="Search for Inventory, Auction, Dealers,more..."
                />
            </div>
            <SearchButton />
        </>
    );
}

export default Search
