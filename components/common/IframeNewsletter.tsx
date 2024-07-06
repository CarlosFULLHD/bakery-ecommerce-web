"use client";
import React, { useState, useEffect } from "react";

interface IframeNewsletterProps {
  src: string;
  height?: string;
}

const IframeNewsletter: React.FC<IframeNewsletterProps> = ({
  src,
  height = "53px",
}) => {
  return (
    <>
      <iframe
        src={src}
        frameBorder="0"
        scrolling="no"
        className="w-full"
        style={{ height }}
        title="Newsletter Subscription"
      />
    </>
  );
};

export default IframeNewsletter;
