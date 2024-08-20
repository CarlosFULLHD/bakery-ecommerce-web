import React from "react";
import { Button } from "@nextui-org/react";
import { ArrowLeftToLine } from "lucide-react";
import ProgressBar from "@/components/common/ProgressBar";

interface BuyBarProps {
  currentStep: number;
  onBackClick: () => void;
}

const BuyBar: React.FC<BuyBarProps> = ({ currentStep, onBackClick }) => {
  return (
    <div className="flex justify-between items-center w-full p-4 bg-white shadow-md">
      <Button
        color="secondary"
        variant="bordered"
        onClick={onBackClick}
        className="flex items-center"
      >
        <ArrowLeftToLine />
      </Button>
      <ProgressBar currentStep={currentStep} />
    </div>
  );
};

export default BuyBar;
