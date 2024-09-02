import React from "react";
import { Button } from "@nextui-org/react";
import ProgressBar from "@/components/common/ProgressBar";
import Link from "next/link";

interface BuyBarProps {
  currentStep: number;
}

const BuyBar: React.FC<BuyBarProps> = ({ currentStep }) => {
  return (
    <div className="flex justify-between items-center w-full p-4">
      <ProgressBar currentStep={currentStep} />
    </div>
  );
};

export default BuyBar;
