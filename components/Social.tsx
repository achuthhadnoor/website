import Link from "next/link";
import React from "react";

export default function Social() {
    return (
        <div className="mt-5 flex flex-1 items-center text-neutral-800 dark:text-neutral-300">
            <hr className=" w-16 text-neutral-600 dark:text-neutral-500 md:inline-block" />
            <div className="flex:1 mx-5 flex w-full gap-2 md:w-auto md:justify-start">
                <Link
                    rel="noreferrer"
                    className="rounded p-2 hover:bg-neutral-200/50 hover:text-blue-500 dark:hover:bg-neutral-800/50"
                    href="https://x.com/achuth_hadnoor"
                    target="_blank"
                    title="Twitter"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </Link>
                <Link
                    rel="noreferrer"
                    className="rounded p-2 hover:bg-neutral-200/50 hover:text-gray-500 dark:hover:bg-neutral-800/50"
                    href="https://github.com/achuthhadnoor"
                    target="_blank"
                    title="Github"
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                            d="M12 16.5v-2.902a2.53 2.53 0 00-.705-1.958c2.355-.263 4.83-1.155 4.83-5.25A4.08 4.08 0 0015 3.578 3.803 3.803 0 0014.932.75S14.047.487 12 1.86a10.035 10.035 0 00-5.25 0C4.702.487 3.817.75 3.817.75a3.803 3.803 0 00-.067 2.827 4.08 4.08 0 00-1.125 2.835c0 4.065 2.475 4.958 4.83 5.25a2.528 2.528 0 00-.705 1.935V16.5m0-2.25C3 15.375 3 12.375 1.5 12l5.25 2.25z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </Link>
                <Link
                    rel="noreferrer"
                    className="rounded p-2 hover:bg-neutral-200/50 hover:text-indigo-500 dark:hover:bg-neutral-800/50"
                    href="https://www.linkedin.com/in/achuth-hadnoor-49223ba6/"
                    target="_blank"
                    title="Linkedin"
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                            d="M12 6a4.5 4.5 0 014.5 4.5v5.25h-3V10.5a1.5 1.5 0 10-3 0v5.25h-3V10.5A4.5 4.5 0 0112 6v0zM4.5 6.75h-3v9h3v-9zM3 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <defs>
                            <clipPath id="prefix__clip0">
                                <path fill="#fff" d="M0 0h18v18H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                </Link>
                <Link
                    rel="noreferrer"
                    className="rounded p-2 hover:bg-neutral-200/50 hover:text-pink-500 dark:hover:bg-neutral-800/50"
                    href="https://dribbble.com/achuth_hadnoor"
                    target="_blank"
                    title="Dribbble"
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                            d="M11.571 15.067c-.28-1.614-.75-3.281-1.406-5.002h-.02l-.02.01c-.107.04-.251.095-.432.166-.18.07-.519.234-1.014.492-.496.258-.955.532-1.377.823-.421.292-.86.675-1.315 1.15-.456.476-.8.972-1.035 1.487l-.15-.11C6.032 15.087 7.432 15.589 9 15.589c.884 0 1.741-.174 2.571-.522zM9.713 8.97c-.14-.328-.318-.7-.532-1.115-2.083.623-4.336.934-6.76.934-.007.047-.01.117-.01.211 0 .83.147 1.622.442 2.376.294.753.71 1.428 1.245 2.024a8.421 8.421 0 011.24-1.673 8.98 8.98 0 011.432-1.25 16.67 16.67 0 011.31-.814 7.723 7.723 0 011-.482l.372-.13.13-.036a.792.792 0 00.131-.045zM8.638 6.84a34.563 34.563 0 00-2.45-3.796 6.501 6.501 0 00-2.35 1.868A6.51 6.51 0 002.55 7.644c2.023 0 4.052-.268 6.087-.804zm6.87 3.205c-1.405-.402-2.775-.5-4.107-.292a28.3 28.3 0 011.285 4.711 6.582 6.582 0 001.859-1.903 6.496 6.496 0 00.964-2.516zM7.424 2.602c-.007 0-.013.003-.02.01.007-.007.013-.01.02-.01zm5.926 1.456C12.11 2.96 10.661 2.411 9 2.411c-.509 0-1.028.063-1.557.19A28.669 28.669 0 019.914 6.44a9.332 9.332 0 001.306-.608c.408-.231.731-.437.97-.618.237-.18.456-.371.657-.572.201-.201.327-.337.377-.407l.125-.176zm2.24 4.872c-.02-1.554-.519-2.927-1.496-4.119l-.01.01c-.06.08-.124.163-.191.247a5.76 5.76 0 01-.437.447 8.301 8.301 0 01-.713.607c-.252.191-.586.409-1.005.653-.418.245-.859.46-1.32.648.167.355.314.673.441.954l.066.171c.03.08.055.137.075.17.241-.033.49-.056.748-.07a14.246 14.246 0 011.432-.005 16.547 16.547 0 011.692.161l.367.06c.1.017.184.032.25.046l.101.02zm1.125.07c0 1.4-.345 2.69-1.034 3.872a7.68 7.68 0 01-2.808 2.808A7.546 7.546 0 019 16.714c-1.4 0-2.69-.345-3.872-1.034a7.68 7.68 0 01-2.808-2.808A7.546 7.546 0 011.286 9c0-1.4.345-2.69 1.034-3.872A7.68 7.68 0 015.128 2.32 7.546 7.546 0 019 1.286c1.4 0 2.69.345 3.872 1.034a7.68 7.68 0 012.808 2.808A7.547 7.547 0 0116.714 9z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </Link>
                <Link
                    rel="noreferrer"
                    className="rounded p-2 hover:bg-neutral-200/50 hover:text-indigo-500 dark:hover:bg-neutral-800/50"
                    href="https://instagram.com/uiuxdx"
                    target="_blank"
                    title="instagram"
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                            d="M12.75 1.5h-7.5A3.75 3.75 0 001.5 5.25v7.5a3.75 3.75 0 003.75 3.75h7.5a3.75 3.75 0 003.75-3.75v-7.5a3.75 3.75 0 00-3.75-3.75z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M12 8.527a3 3 0 11-5.935.88A3 3 0 0112 8.528zM13.125 4.875h.008"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </Link>
                <Link
                    rel="noreferrer"
                    className="rounded p-2 hover:bg-neutral-200/50 hover:text-yellow-500 dark:hover:bg-neutral-800/50"
                    href="mailto:hey@achuth.dev"
                    target="_blank"
                    title="Email"
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                            d="M3 3h12c.825 0 1.5.675 1.5 1.5v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9C1.5 3.675 2.175 3 3 3z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M16.5 4.5L9 9.75 1.5 4.5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
}