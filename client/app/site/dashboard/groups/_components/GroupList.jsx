"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CreditCard, Edit, MoreHorizontal, Trash, Users } from "lucide-react";
import { handleDeleteGroup } from "@/actions/queries";
import { toast } from "@/hooks/use-toast";
import CopyInviteLink from "./CopyInviteLink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CreateGroupForm from "./CreateGroupForm";
import CreateGroupFormv0 from "./v0CreateGroupForm";

export default function GroupList({ onSelectGroup, data, user }) {
  const router = useRouter();
  const groups = data?.groups;

  const handleDelete = async (groupId) => {
    const result = await handleDeleteGroup(groupId);
    if (result.success) {
      // Refresh the page
      router.refresh();
      toast({
        title: "Group deleted successfully",
        description: "The group has been deleted successfully.",
      });
    } else {
      // Handle error, maybe show a toast notification
      console.error("Failed to delete group:", result.error);
      toast({
        title: "Failed to delete group",
        variant: "destructive",
        description:
          "There was an error while deleting the group. Please try again later.",
      });
    }
  };

  if (groups?.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-center text-muted-foreground">
        oops! Seems you haven&apos;t added the group shepherd bot to any of your
        groups yet
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {groups?.map((group) => (
        <Card
          key={group._id}
          className="hover:bg-accent/50 transition-colors"
          onClick={() => onSelectGroup(group)}
        >
          <CardContent className="flex justify-between items-center p-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${group.groupName}`}
                />
                <AvatarFallback>
                  {group.groupName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{group.groupName}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-1" />
                  {group.membersCount} members
                </div>
                <div className="text-sm text-muted-foreground">
                  {group?.paymentType === "recurring" ? (
                    <>
                      {group?.monthlyPrice ? (
                        <span>
                          {new Intl.NumberFormat("en-NG", {
                            style: "currency",
                            currency: "NGN",
                          }).format(group.monthlyPrice)}{" "}
                          (monthly)
                        </span>
                      ) : (
                        <span>Free / Monthly</span>
                      )}
                      /
                      {group?.yearlyPrice ? (
                        <>
                          {" "}
                          <span>
                            {new Intl.NumberFormat("en-NG", {
                              style: "currency",
                              currency: "NGN",
                            }).format(group.yearlyPrice)}{" "}
                            (yearly)
                          </span>
                        </>
                      ) : null}
                    </>
                  ) : (
                    <span>{group?.paymentType || "Free"}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge
                variant={group.status === "active" ? "default" : "secondary"}
              >
                {group?.status || "active"}
              </Badge>
              <CopyInviteLink groupId={group._id} />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.stopPropagation();
                      // handleEditGroup(group._id)
                    }}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Group
                  </DropdownMenuItem>
                  <Dialog>
                    <DialogTrigger asChild>
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        onSelect={(e) => {
                          // Prevent the dropdown from closing
                          e.preventDefault();
                        }}
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        Set Payment Settings
                      </DropdownMenuItem>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] p-0">
                      <CreateGroupFormv0
                        Groups={{ groups: [group] }}
                        user={user}
                      />
                    </DialogContent>
                  </Dialog>
                  <DropdownMenuItem
                    className="text-red-600 focus:text-destructive hover:text-white hover:bg-red-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(group._id);
                    }}
                  >
                    <Trash className="w-4 h-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
