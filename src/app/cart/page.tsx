import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

function Cart() {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-medium">Shopping Cart</h3>
      <div className="flex gap-10 items-start mt-10">
        <div className="w-full">
          <Table>
            <TableHeader className="bg-slate-200">
              <TableRow className="text-xl font-semibold">
                <TableHead></TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="text-lg">
                <TableCell className="w-[5rem] h-[5rem] rounded-md m-10">
                  <Image
                    height={100}
                    width={100}
                    src={
                      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80"
                    }
                    alt={"Image"}
                    className="aspect-square object-cover"
                  />
                </TableCell>
                <TableCell>Tshirt 1</TableCell>
                <TableCell className="font-semibold text-xl">$ 300</TableCell>
                <TableCell className="flex items-center gap-5 justify-center w-full h-[5rem]">
                  <Button variant={"secondary"} className="p-1 aspect-square">
                    <Minus />
                  </Button>
                  <span className="font-semibold text-xl">5</span>
                  <Button className="p-1 aspect-square">
                    <Plus />
                  </Button>
                </TableCell>
                <TableCell className="font-semibold text-lg">$ 1500</TableCell>
              </TableRow>
              <TableRow className="text-lg">
                <TableCell className="w-[5rem] h-[5rem] rounded-md m-10">
                  <Image
                    height={100}
                    width={100}
                    src={
                      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80"
                    }
                    alt={"Image"}
                    className="aspect-square object-cover"
                  />
                </TableCell>
                <TableCell>Tshirt 1</TableCell>
                <TableCell className="font-semibold text-xl">$ 300</TableCell>
                <TableCell className="flex items-center gap-5 justify-center w-full h-[5rem]">
                  <Button variant={"secondary"} className="p-1 aspect-square">
                    <Minus />
                  </Button>
                  <span className="font-semibold text-xl">5</span>
                  <Button className="p-1 aspect-square">
                    <Plus />
                  </Button>
                </TableCell>
                <TableCell className="font-semibold text-lg">$ 1500</TableCell>
              </TableRow>
              <TableRow className="text-lg">
                <TableCell className="w-[5rem] h-[5rem] rounded-md m-10">
                  <Image
                    height={100}
                    width={100}
                    src={
                      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80"
                    }
                    alt={"Image"}
                    className="aspect-square object-cover"
                  />
                </TableCell>
                <TableCell>Tshirt 1</TableCell>
                <TableCell className="font-semibold text-xl">$ 300</TableCell>
                <TableCell className="flex items-center gap-5 justify-center w-full h-[5rem]">
                  <Button variant={"secondary"} className="p-1 aspect-square">
                    <Minus />
                  </Button>
                  <span className="font-semibold text-xl">5</span>
                  <Button className="p-1 aspect-square">
                    <Plus />
                  </Button>
                </TableCell>
                <TableCell className="font-semibold text-lg">$ 1500</TableCell>
              </TableRow>
              <TableRow className="text-lg">
                <TableCell className="w-[5rem] h-[5rem] rounded-md m-10">
                  <Image
                    height={100}
                    width={100}
                    src={
                      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80"
                    }
                    alt={"Image"}
                    className="aspect-square object-cover"
                  />
                </TableCell>
                <TableCell>Tshirt 1</TableCell>
                <TableCell className="font-semibold text-xl">$ 300</TableCell>
                <TableCell className="flex items-center gap-5 justify-center w-full h-[5rem]">
                  <Button variant={"secondary"} className="p-1 aspect-square">
                    <Minus />
                  </Button>
                  <span className="font-semibold text-xl">5</span>
                  <Button className="p-1 aspect-square">
                    <Plus />
                  </Button>
                </TableCell>
                <TableCell className="font-semibold text-lg">$ 1500</TableCell>
              </TableRow>
              <TableRow className="text-lg">
                <TableCell className="w-[5rem] h-[5rem] rounded-md m-10">
                  <Image
                    height={100}
                    width={100}
                    src={
                      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80"
                    }
                    alt={"Image"}
                    className="aspect-square object-cover"
                  />
                </TableCell>
                <TableCell>Tshirt 1</TableCell>
                <TableCell className="font-semibold text-xl">$ 300</TableCell>
                <TableCell className="flex items-center gap-5 justify-center w-full h-[5rem]">
                  <Button variant={"secondary"} className="p-1 aspect-square">
                    <Minus />
                  </Button>
                  <span className="font-semibold text-xl">5</span>
                  <Button className="p-1 aspect-square">
                    <Plus />
                  </Button>
                </TableCell>
                <TableCell className="font-semibold text-lg">$ 1500</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <hr className="border-slate-200 border h-[30rem]" />
        <div className="w-full px-20">
          <h3 className="text-2xl font-medium mb-2">Cart Totals</h3>
          <hr className="border-slate-200 border w-full" />
          <div className="flex justify-between items-center my-5">
            <h3 className="text-xl font-medium mb-2">Sub Totals</h3>
            <h3 className="text-xl font-medium mb-2">$ 400</h3>
          </div>
          <div className="flex justify-between items-center my-5">
            <h3 className="text-xl font-medium mb-2">Shipping</h3>
            <h3 className="text-xl font-medium mb-2">$ 400</h3>
          </div>
          <div className="flex justify-between items-center my-5">
            <h3 className="text-xl font-medium mb-2">Coupon</h3>
            <h3 className="text-xl font-medium mb-2">$ 400</h3>
          </div>
          <hr className="border-slate-200 border w-full" />
          <div className="flex justify-between items-center my-5">
            <h3 className="text-xl font-medium mb-2">Total</h3>
            <h3 className="text-xl font-medium mb-2">$ 1200</h3>
          </div>
          <Button className="w-full mt-10">Proceed to checkout</Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
