import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export type AlertModalProps = {
    title: string;
    description: string;
    open: boolean;
    setOpen: (e: boolean) => void;
};

const AlertModal = ({ title, description, open, setOpen }: AlertModalProps) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px] w-[95%] rounded-md">
                <DialogHeader>
                    <DialogTitle className="text-center mb-5">{title}</DialogTitle>
                    <DialogDescription className="text-center">
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={() => setOpen(false)}>OK</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default AlertModal;
