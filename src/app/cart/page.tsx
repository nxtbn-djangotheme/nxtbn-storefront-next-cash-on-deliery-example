"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCartStore } from "@/lib/store";
import Image from "next/image";
import { useMemo } from "react";
import { toast } from "react-toastify";
import AddressForm from "./address-form";

function Cart() {
  const { items, removeFromCart, addToCart } = useCartStore();

  const totalPrice = useMemo(() => {
    return items.reduce(
      (acc, item) => acc + Number(item.price) * item.quantity,
      0
    );
  }, [items]);

  const shipping = 0;
  const coupon = 0;

  const subTotal = Number(totalPrice + shipping + coupon).toFixed(2);

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-medium">Shopping Cart</h3>
      <div className="flex flex-col lg:flex-row gap-10 items-start mt-10">
        <div className="w-full">
          <Table>
            <TableHeader className="bg-slate-200">
              <TableRow className="lg:text-xl font-semibold">
                <TableHead></TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id} className="lg:text-lg">
                  <TableCell className="w-[5rem] h-[5rem] rounded-md m-2 lg:m-10">
                    {item.image_url != "" ? (
                      <Image
                        height={100}
                        width={100}
                        src={item.image_url}
                        alt={"Image"}
                        className="lg:w-[5rem] lg:h-[5rem] w-[2rem] h-[2rem] rounded-md m-1 cursor-pointer"
                      />
                    ) : (
                      <div className="lg:w-[5rem] lg:h-[5rem] w-[2rem] h-[2rem] rounded-md m-1 bg-slate-600"></div>
                    )}
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="font-semibold lg:text-xl text-nowrap">
                    $ {item.price}
                  </TableCell>
                  <TableCell className="h-full">
                    <div className="flex gap-5 items-center h-full justify-center">
                      <Button
                        variant={"secondary"}
                        className="p-1 aspect-square"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Minus />
                      </Button>
                      <span className="font-semibold text-xl">
                        {item.quantity}
                      </span>
                      <Button
                        className="p-1 aspect-square"
                        onClick={() => addToCart(item)}
                      >
                        <Plus />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold lg:text-lg">
                    $ {Number(item.price * item.quantity).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <hr className="border-slate-200 border lg:h-[30rem]" />
        <div className="w-full px-20">
          <div>
            <h3 className="text-2xl font-medium mb-2">Cart Totals</h3>
            <hr className="border-slate-200 border w-full" />
            <div className="flex justify-between items-center my-5">
              <h3 className="text-xl font-medium mb-2">Sub Totals</h3>
              <h3 className="text-xl font-medium mb-2">
                $ {totalPrice.toFixed(2)}
              </h3>
            </div>
            <div className="flex justify-between items-center my-5">
              <h3 className="text-xl font-medium mb-2">Shipping</h3>
              <h3 className="text-xl font-medium mb-2">$ {shipping}</h3>
            </div>
            <div className="flex justify-between items-center my-5">
              <h3 className="text-xl font-medium mb-2">Coupon</h3>
              <h3 className="text-xl font-medium mb-2">$ {coupon}</h3>
            </div>
            <hr className="border-slate-200 border w-full" />
            <div className="flex justify-between items-center my-5">
              <h3 className="text-xl font-medium mb-2">Total</h3>
              <h3 className="text-xl font-medium mb-2">$ {subTotal}</h3>
            </div>
          </div>
          <AddressForm />
        </div>
      </div>
    </div>
  );
}

export default Cart;
