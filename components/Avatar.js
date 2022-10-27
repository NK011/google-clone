const { default: Image } = require("next/image");

function Avatar() {
    return (
        <Image
            src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
            alt="Avatar"
            width="50"
            height="50"
            layout="responsive"
            className="rounded-full transition hover:transform hover:scale-110 hover:drop-shadow-xl h-8 w-8 md:h-10 md:w-10"
        />
    );
}

export default Avatar;
