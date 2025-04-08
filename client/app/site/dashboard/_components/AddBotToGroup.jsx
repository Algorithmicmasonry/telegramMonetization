"use client";

import { useState } from "react"
import { Plus, PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const AddBotToGroup = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
      
        <PlusCircle className="mr-2 h-4 w-4" /> Add Bot to a Group
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">
              Add GroupShepherd Bot to Your Group
            </DialogTitle>
            <DialogDescription>
              Follow these steps to add the GroupShepherd bot to your Telegram
              group
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <h3 className="font-medium">Step 1</h3>
              <p className="text-sm text-muted-foreground">
                Click the buttton below to open the GroupShepherd bot in
                Telegram.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Step 2</h3>
              <p className="text-sm text-muted-foreground">
                Type the <span className="font-semibold text-white">&quot;/start&quot;</span> commmand .
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Step 3</h3>
              <p className="text-sm text-muted-foreground">
                In the bot's menu, select <span className="font-semibold text-white">&quot;Manage My Groups &quot;</span>
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Step 4</h3>
              <p className="text-sm text-muted-foreground">
               Click on the <span className="text-white font-semibold">&quot;Add me to a group button&quot;</span>
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Step 5</h3>
              <p className="text-sm text-muted-foreground">
                Once added, you can manage and configure your group settings
                through the GroupShepherd dashboard.
              </p>
            </div>
          </div>

          <DialogFooter className="sm:justify-center">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() =>
                window.open("https://t.me/GroupShepherd_bot", "_blank")
              }
            >
              Open GroupShepherd Bot in Telegram
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddBotToGroup;
