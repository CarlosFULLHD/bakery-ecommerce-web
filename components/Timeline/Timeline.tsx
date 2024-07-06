import clsx from "clsx";
import { ReactElement, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

function Timeline({ className, children }: Props): ReactElement {
  const timelineStyle = clsx(
    "relative mx-auto my-0 w-11/12 max-w-6xl px-0 py-8",
    "after:clear-both after:table",
    "before:absolute before:left-4 before:top-0 before:h-full before:w-1 before:bg-gray-400",
    "sm:w-11/12 sm:before:left-1/2 sm:before:-ml-1.5",
    className
  );

  return <div className={timelineStyle}>{children}</div>;
}

export default Timeline;
