import Link from "next/link";
import { Squares2X2Icon } from "@heroicons/react/24/solid";
import Avatar from "./Avatar";
function Header() {
    return (
        <header className="flex w-full">
            <div className="flex w-full justify-between items-center space-x-9 text-white text-lg p-5 md:justify-end md:ml-auto">
                <div className="flex space-x-4">
                    <Link className="link" href="https://mail.google.com/">
                        Gmail
                    </Link>
                    <Link className="link" href="https://www.google.co.in/">
                        Images
                    </Link>
                </div>
                <div className="flex space-x-4 justify-center items-center">
                    <Squares2X2Icon className="h-6 w-6 md:h-8 md:w-8 text-white hover:drop-shadow-xl" />
                    <Avatar />
                </div>
            </div>
        </header>
    );
}

export default Header;
