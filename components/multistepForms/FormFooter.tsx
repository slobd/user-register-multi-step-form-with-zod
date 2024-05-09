import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export type FormFooterProps = {
    type?: "form" | "";
    progress: number;
    handlePrevious: () => void;
    handleNext?: () => void;
};

const FormFooter = ({ type = "", progress, handlePrevious, handleNext }: FormFooterProps) => {
    return (
        <div className="fixed bottom-0 z-40 w-full bg-white">
            <Progress className="h-1.5 rounded-sm" value={progress} />
            <div className="h-20">
                <div className="flex justify-between items-center px-4 h-full">
                    <Button
                        className="rounded-full text-lg pr-7"
                        variant="outline"
                        onClick={handlePrevious}
                    >
                        <ChevronLeftIcon className="mr-1 h-5 w-5" /> Back
                    </Button>
                    {type === "form"
                        ? <Button
                            className="rounded-full text-lg pl-7"
                            type="submit"
                        >
                            Next
                            <ChevronRightIcon className="ml-1 h-5 w-5" />
                        </Button>
                        : <Button
                            className="rounded-full text-lg pl-7"
                            onClick={handleNext}
                        >
                            Next
                            <ChevronRightIcon className="ml-1 h-5 w-5" />
                        </Button>
                    }
                </div>
            </div>

        </div>
    );
}

export default FormFooter;
