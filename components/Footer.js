import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer className="flex flex-col bg-[rgb(23,23,23)] w-full">
            <div className="border-b border-gray-600 p-5 text-sm md:text-lg text-[rgb(153,157,162)]">
                <p>India</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-1.5 px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-1 justify-center items-center">
                    <div className="optionsFooter lg:ml-auto text-sm md:text-xl">
                        <Link href="http://">About</Link>
                        <Link href="http://">Advertising</Link>
                        <Link href="http://">Business</Link>
                    </div>
                    <div className="text-[rgb(153,157,162)] text-sm md:text-xl p-5 xl:mr-auto hidden md:block">
                        <Link href="http://">How Search Works</Link>
                    </div>
                </div>
                <div className="optionsFooter lg:ml-auto text-sm md:text-xl">
                    <Link href="http://">Privacy</Link>
                    <Link href="http://">Terms</Link>
                    <Link href="http://">Settings</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
