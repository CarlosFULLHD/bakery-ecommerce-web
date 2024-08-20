import React from "react";
import { Button } from "@nextui-org/react";
import { ArrowLeftToLine } from "lucide-react";
import ProgressBar from "@/components/common/ProgressBar";
import Link from "next/link";

interface BuyBarProps {
  currentStep: number;
  backUrl: string; // Cambié onBackClick a backUrl para especificar el destino
}

const BuyBar: React.FC<BuyBarProps> = ({ currentStep, backUrl }) => {
  return (
    <div className=" justify-between items-center w-full p-4 ">
      <Link href={backUrl} passHref>
        <Button
          color="secondary"
          variant="bordered"
          className="flex items-center"
        >
          <ArrowLeftToLine />
        </Button>
      </Link>
      <ProgressBar currentStep={currentStep} />
    </div>
  );
};

export default BuyBar;
