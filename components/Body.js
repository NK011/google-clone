import Image from "next/image";
import React, { useRef } from "react";
import {
    MagnifyingGlassIcon,
    CameraIcon,
    MicrophoneIcon,
    LockClosedIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";

function Body() {
    const languages = [
        "हिन्दी",
        "বাংলা",
        "తెలుగు",
        "मराठी",
        "தமிழ்",
        "ગુજરાતી",
        "ಕನ್ನಡ",
        "മലയാളം",
        "ਪੰਜਾਬੀ",
    ];

    const searchRef = useRef(null);
    const router = useRouter();
    const googleSearch = (e) => {
        e.preventDefault();
        const term = searchRef.current.value;

        if (term == null) return;

        router.push(`/results?term=${term}`);
    };
    return (
        <div className="h-[500px] flex flex-col space-y-7 justify-center items-center flex-grow max-w-5xl px-5">
            <Image
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
                layout="responsive"
                width="400"
                height="100"
                alt="googel"
                className="object-contain w-72 md:w-96"
            />

            <form
                onSubmit={googleSearch}
                className="bg-transparent border border-gray-500 flex space-x-3 px-3 py-2 md:px-5 md:py-4 rounded-full hover:bg-[rgba(48,49,52)] hover:drop-shadow-xl w-full md:4/5 max-w-5xl focus-within:bg-[rgba(48,49,52)] focus-within:drop-shadow-xl text-white"
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
            <div className="flex space-x-5 hidden md:block">
                <button className="btn">Google Search</button>
                <button className="btn">I am Feeling Lucky</button>
            </div>
            <div className="flex space-x-3">
                <LockClosedIcon className="h-7 hidden md:block" />
                <p className="text-blue-400 text-xs md:text-lg hover:underline font-semibold">
                    Strong passwords made effortless with Google
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center align-top space-x-2 p-5 text-md text-white">
                <span className="text-md sm:text-xl text-white">
                    Google offered in:
                </span>
                <div className="flex space-x-4 text-blue-400 flex-wrap text-xs sm:text-lg md:flex-row justify-center items-center p-5">
                    {languages.map((language, i) => (
                        <Link
                            className="hover:underline h-5"
                            href="https://www.google.com/setprefs?sig=0_yxEdyIprtqceyUGyttgOJoK0vGE%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjByPmzooD7AhX1plYBHZHJBIwQ2ZgBCBQ"
                            key={i}
                        >
                            {language}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Body;
