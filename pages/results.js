import React from "react";
import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";
import SearchResults from "../components/SearchResults";
import Response from "../Response";

function results({ responseData }) {
    return (
        <div className="bg-[rgb(32,33,36)] pl-3 overflow-x-hidden flex flex-col justify-center items-center">
            <HeadNav />
            <SearchResults responseData={responseData} />
            <Footer />
        </div>
    );
}

export default results;

export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData
        ? Response
        : await fetch(
              `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
          ).then((res) => res.json());

    return {
        props: {
            responseData: data,
        },
    };
}
