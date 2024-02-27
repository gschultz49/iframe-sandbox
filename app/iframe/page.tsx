/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { NextRequest } from "next/server";
import FeedCard from "../feed-card";
import { useSearchParams } from "next/navigation";
import { ToastContainer } from "react-toastify";

export default function iFrame(request: NextRequest) {
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
