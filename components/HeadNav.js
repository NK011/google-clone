import {
    CameraIcon,
    Cog6ToothIcon,
    MagnifyingGlassIcon,
    MicrophoneIcon,
    Squares2X2Icon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import Avatar from "./Avatar";

function HeadNav() {
    const searchRef = useRef(null);
    const router = useRouter();
    const googleSearch = (e) => {
        e.preventDefault();
        const ticket = searchRef.current.value;

        if (ticket == null) return;

        router.push("/results");
    };
    return (
        <header className="sticky top-0 flex flex-col justify-between w-full">
            <div className="flex">
                <div className="flex flex-col space-y-5 md:space-y-0 p-3 justify-center items-center flex-grow md:flex-row md:space-x-7 md:justify-start md:ml-24">
                    <Image
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
                        layout="responsive"
                        width="400"
                        height="100"
                        alt="google"
                        className="object-contain w-28 md:56"
                    />
                    <form
                        onSubmit={googleSearch}
                        className="bg-transparent border border-gray-500 flex space-x-3 px-3 py-2 md:px-5 md:py-4 rounded-full hover:bg-[rgba(48,49,52)] hover:drop-shadow-xl w-full md:w-4/5 max-w-3xl focus-within:bg-[rgba(48,49,52)] focus-within:drop-shadow-lg text-white"
                    >
                        <MagnifyingGlassIcon className="h-5 md:h-7 text-gray-500" />
                        <input
                            type="text"
                            className="flex-grow bg-transparent outline-none"
                            ref={searchRef}
                        />
                        <MicrophoneIcon className="h-5 md:h-7" />
                        <CameraIcon className="h-5 md:h-7" />
                    </form>
                </div>
                <div className="flex space-x-5 p-4 justify-center items-start md:items-center">
                    <Cog6ToothIcon className="hidden md:block h-6 w-6 md:h-8 md:w-8 text-white hover:drop-shadow-xl" />
                    <Squares2X2Icon className="hidden md:block h-6 w-6 md:h-8 md:w-8 text-white hover:drop-shadow-xl" />
                    <Avatar />
                </div>
            </div>
            <div className="border-b border-[rgb(48,49,52)] md:ml-24">
                <ul className="text-gray-500 text-md md:text-lg flex">
                    <li className="text-blue-400 border-b-4 border-blue-600 p-4">
                        All{" "}
                    </li>
                    <li className="p-4">Videos </li>
                    <li className="p-4">News </li>
                    <li className="p-4">Images </li>
                    <li className="p-4">Books </li>
                </ul>
            </div>
        </header>
    );
}

export default HeadNav;
