"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { setGroupRules } from "@/actions/queries";
import { Loader2 } from "lucide-react";

// Currency Options
const currencies = [
  { code: "NGN", name: "Nigerian Naira" },
  { code: "KES", name: "Kenyan Shilling" },
  { code: "ZAR", name: "South African Rand" },
  { code: "GHS", name: "Ghanaian Cedi" },
  { code: "EGP", name: "Egyptian Pound" },
  { code: "MAD", name: "Moroccan Dirham" },
  { code: "XOF", name: "West African CFA Franc" },
  { code: "USD", name: "United States Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound Sterling" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CNY", name: "Chinese Yuan" },
];

// Form Validation Schema
const CreateGroupFormSchema = z.object({
  name: z.string().min(1, "Required"),
  isPaidGroup: z.boolean(),
  pricingType: z.string().optional(),
  oneTimePrice: z.string().optional(),
  monthlyPrice: z.string().optional(),
  yearlyPrice: z.string().optional(),
  currency: z.string().min(1, "Required"),
});

const CreateGroupFormv0 = ({ Groups, user }) => {
  const userId = user?._id;
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [itIsPaidGroup, setItIsPaidGroup] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(CreateGroupFormSchema),
    defaultValues: {
      name: Groups?.groups?.[0]?.groupName || "",
      isPaidGroup: true,
      pricingType: "one-time",
      oneTimePrice: "",
      monthlyPrice: "",
      yearlyPrice: "",
      currency: "NGN",
    },
  });

  // Set the form value when the component mounts
  useEffect(() => {
    if (Groups?.groups?.[0]?.groupName) {
      form.setValue("name", Groups.groups[0].groupName);
      setSelectedGroup(Groups.groups[0]);
    }
  }, [Groups, form]);

  const isPaidGroup = form.watch("isPaidGroup");
  const pricingType = form.watch("pricingType");

  const handleGroupSubmit = async (data) => {
    try {
      setIsLoading(true);
      if (data && userId) {
        console.log("Sending group data: ", data);
        console.log("User ID: ", userId);

        // Placeholder for the actual API call
        const response = await setGroupRules(data, userId);
        console.log("This is the enforce payment rules response: ", response);

        if (response) {
          setIsLoading(false);
          toast({
            title: "Payment rules enforced",
            description: `The payment rules have been enforced successfully for ${data.name}.`,
          });
        }

        // Simulate a successful response

        console.log("Submit button clicked");
        console.log(
          "This is the data when the group rules have been set and submitted: ",
          data
        );
      }
    } catch (error) {
      console.error(
        "This is the error from setting group rules:",
        error.message
      );
      toast({
        title: "Error",
        variant: "destructive",
        description:
          error.message || "An error occurred while setting payment rules.",
      });
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Group Payment Settings</DialogTitle>
        <DialogDescription>
          Configure payment settings for this group.
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleGroupSubmit)}
          className="flex flex-col gap-4"
        >
          {/* Group Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Group Name</FormLabel>
                <FormControl>
                  <Input value={field.value} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Paid Group Toggle */}
          <FormField
            control={form.control}
            name="isPaidGroup"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Paid Group</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="paid-group"
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked);
                        setItIsPaidGroup(checked);
                      }}
                    />
                    <Label htmlFor="paid-group">This is a paid group</Label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Pricing Options */}
          {itIsPaidGroup && (
            <>
              {/* Pricing Type */}
              <FormField
                control={form.control}
                name="pricingType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Do you want your community to accept recurring payments or
                      one-time payments?
                    </FormLabel>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3">
                        <RadioGroupItem value="one-time" />
                        <FormLabel>One-time Payment</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3">
                        <RadioGroupItem value="recurring" />
                        <FormLabel>Recurring Payment</FormLabel>
                      </FormItem>
                    </RadioGroup>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* One-time Price */}
              {pricingType === "one-time" && (
                <FormField
                  control={form.control}
                  name="oneTimePrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>One-time Price (Amount)</FormLabel>
                      <FormControl>
                        <Input placeholder="0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {/* Recurring Prices */}
              {pricingType === "recurring" && (
                <>
                  <FormField
                    control={form.control}
                    name="monthlyPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Price</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="yearlyPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Yearly Price</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {/* Currency Selector */}
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currency</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {currencies.map((currency) => (
                          <SelectItem key={currency.code} value={currency.code}>
                            {currency.code} - {currency.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {/* Submit Button */}
          <Button type="submit" className="mt-4" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Enforce Payment Rules"
            )}
          </Button>
        </form>
      </Form>
    </DialogContent>
  );
};

export default CreateGroupFormv0;
