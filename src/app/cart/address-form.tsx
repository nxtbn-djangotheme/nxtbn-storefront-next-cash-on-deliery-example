"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/lib/store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import useApiHelper from "@/lib/api";

const addressSchema = z.object({
  first_name: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  phone_number: z.string().min(8, {
    message: "Phone number must be at least 8 characters.",
  }),
  email_address: z.string().min(2, {
    message: "Email address must be at least 2 characters.",
  }),
  is_default_delivery_address: z.boolean(),
  street_address: z.string().min(6, {
    message: "Street address must be at least 6 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
  postal_code: z.string().min(4, {
    message: "Postal code must be at least 4 characters.",
  }),
  country: z.string().min(4, {
    message: "Country must be at least 4 characters.",
  }),
});

const formSchema = z.object({
  addresses: z.array(addressSchema).min(2),
  gateway: z.string({
    required_error: "Please select a delivery method.",
  }),
});

const defaultValues = {
  addresses: [
    {
      first_name: "",
      last_name: "",
      phone_number: "",
      email_address: "",
      is_default_delivery_address: true,
      street_address: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
    },
    {
      first_name: "",
      last_name: "",
      phone_number: "",
      email_address: "",
      is_default_delivery_address: true,
      street_address: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
    },
  ],
  gateway: "cod",
};

function AddressForm() {
  const { createOrderAnonymous } = useApiHelper();

  const { items, emptyCart } = useCartStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const shipping_address = values.addresses[0];
    shipping_address.is_default_delivery_address =
      isBillShipSame && shipping_address.is_default_delivery_address;

    const billing_address = values.addresses[1];
    billing_address.is_default_delivery_address =
      !isBillShipSame && billing_address.is_default_delivery_address;

    const payload = {
      total_price: items
        .reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)
        .toFixed(2),
      shipping_address,
      billing_address,
      cart_data: items.map((item) => {
        return {
          quantity: item.quantity,
          price_per_unit: item.price,
          total_price: item.price * item.quantity,
          variant: item.id,
        };
      }),
      special_data: {},
      payment_method: values.gateway,
    };

    const response = await createOrderAnonymous(payload);
    if(response.status === 201){
      // empty the cart
      emptyCart() 
    }
    console.log("payload===>", payload);
    console.log("============================================");
    console.log("============================================");
    console.log("============================================");
    console.log("response===>", response);
    console.log("response===>", response.status);
  }

  const [isBillShipSame, setIsBillShipSame] = useState(true);

  useEffect(() => {
    if (isBillShipSame) {
      const updatedAddresses = [...form.getValues("addresses")];

      updatedAddresses[1] = { ...updatedAddresses[0] };
      form.setValue("addresses", updatedAddresses);
    }
  }, [form.getValues()]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-10">
        <div className="space-y-5">
          <h3 className="bg-slate-200 text-xl font-semibold px-5 py-2 rounded-sm text-slate-600">
            Shipping Address
          </h3>
          <div className="flex gap-5">
            <FormField
              control={form.control}
              name={
                `addresses[0].first_name` as `addresses.${number}.first_name`
              }
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`addresses[0].last_name` as `addresses.${number}.last_name`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={
                `addresses[0].email_address` as `addresses.${number}.email_address`
              }
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-5">
            <FormField
              control={form.control}
              name={
                `addresses[0].phone_number` as `addresses.${number}.phone_number`
              }
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={
                `addresses[0].street_address` as `addresses.${number}.street_address`
              }
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Street Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter street address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`addresses[0].city` as `addresses.${number}.city`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-5">
            <FormField
              control={form.control}
              name={`addresses[0].state` as `addresses.${number}.state`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter state" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={
                `addresses[0].postal_code` as `addresses.${number}.postal_code`
              }
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter postal code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`addresses[0].country` as `addresses.${number}.country`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter country name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name={
              `addresses[0].is_default_delivery_address` as `addresses.${number}.is_default_delivery_address`
            }
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow mt-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Use this address as default address</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>

        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow mt-2">
          <FormControl>
            <input
              id="isSame"
              type="checkbox"
              checked={isBillShipSame}
              onChange={(e) => setIsBillShipSame(e.target.checked)}
              className="bg-gray-200  accent-black dark:accent-slate-100 h-4 w-4 border-transparent rounded-md"
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>Shipping Address and Billing Address are Same</FormLabel>
          </div>
        </FormItem>

        {!isBillShipSame && (
          <div className="space-y-5">
            <h3 className="bg-slate-200 text-xl font-semibold px-5 py-2 rounded-sm text-slate-600">
              Billing Address
            </h3>
            <div className="flex gap-5">
              <FormField
                control={form.control}
                name={
                  `addresses[1].first_name` as `addresses.${number}.first_name`
                }
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={
                  `addresses[1].last_name` as `addresses.${number}.last_name`
                }
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={
                  `addresses[1].email_address` as `addresses.${number}.email_address`
                }
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-5">
              <FormField
                control={form.control}
                name={
                  `addresses[1].phone_number` as `addresses.${number}.phone_number`
                }
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={
                  `addresses[1].street_address` as `addresses.${number}.street_address`
                }
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter street address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`addresses[1].city` as `addresses.${number}.city`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter city" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-5">
              <FormField
                control={form.control}
                name={`addresses[1].state` as `addresses.${number}.state`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter state" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={
                  `addresses[1].postal_code` as `addresses.${number}.postal_code`
                }
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter postal code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`addresses[1].country` as `addresses.${number}.country`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter country name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name={
                `addresses[1].is_default_delivery_address` as `addresses.${number}.is_default_delivery_address`
              }
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow mt-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Use this address as default address</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        )}

        <FormField
          control={form.control}
          name="gateway"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a payment method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="cod">Cash on Delivery</SelectItem>
                  <SelectItem value="stripe">Stripe</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-10" onClick={() => {}}>
          Proceed to checkout
        </Button>
      </form>
    </Form>
  );
}

export default AddressForm;
