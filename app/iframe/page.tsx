/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import FeedCard from "../feed-card";
import { useSearchParams } from "next/navigation";
import { ToastContainer } from "react-toastify";

export default function iFrame() {
  const searchParams = useSearchParams();
  const width = searchParams?.get("width") || "";
  return (
    <html lang="en">
      <body>
        <FeedCard width={width} />
        <ToastContainer />
      </body>
    </html>
  );
}
