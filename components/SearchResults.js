import React from "react";
import PaginationButtons from "./PaginationButtons";

function SearchResults({ responseData }) {
    // console.log(responseData);
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-20">
            <p className="text-gray-600 text-md mb-5 mt-3">
                About {responseData.searchInformation?.formattedTotalResults}{" "}
                results ({responseData.searchInformation?.formattedSearchTime}{" "}
                seconds)
            </p>

            {responseData.items?.map((result) => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a
                            href={result.link}
                            className="text-base line-clamp-1 text-gray-400 md:text-lg"
                        >
                            {result.formattedUrl}
                        </a>
                        <a href={result.link}>
                            <h2 className="truncate text-2xl text-blue-400 font-normal group-hover:underline">
                                {result.title}
                            </h2>
                        </a>
                    </div>
                    <p className="line-clamp-2 text-gray-300 text-lg">
                        {result.snippet}
                    </p>
                </div>
            ))}

            <PaginationButtons />
        </div>
    );
}

export default SearchResults;
