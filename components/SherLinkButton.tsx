'use client';

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function SherLinkButton() {
    const [copied, setCopied] = useState(false);
    function handleClick() {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    return (
        <button
            onClick={handleClick}
            className="flex gap-1 items-center border px-2 py-1 rounded text-white text-sm hover:bg-blue-200"
        >
            <LinkIcon className="h-4 w-4" />
            { copied ? "Link Copied" : "Copy Link" }
        </button>
    );
}