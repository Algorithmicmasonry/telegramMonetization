import { notFound } from "next/navigation";
import PaymentForm from "@/app/site/invite/_components/PaymentForm";
import { getGroupDetails } from "@/actions/queries";

export default async function PaymentPage({ params }) {
  const groupDetails = await getGroupDetails(params.groupid) || "";
  
  // console.log("These are the group details : ", groupDetails);
  const groupName = groupDetails?.groupDetails.groupName.toUpperCase();
  const userId = groupDetails?.groupDetails.admin

  if (!groupDetails) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 h-[100vh] flex items-center justify-center flex-col gap-4 ">
      <h1 className="text-2xl font-bold py-5 mt-5">{groupName} Payment Page</h1>

      <PaymentForm groupId={params.groupid} groupName={groupName} userId={userId} />
    </div>
  );
}
