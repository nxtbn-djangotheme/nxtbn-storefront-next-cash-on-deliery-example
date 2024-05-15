"use client";
import React, { Suspense, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useApiHelper from "@/lib/api";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CategoryType } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

function Category() {
  const { getCategories } = useApiHelper();
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setIsloading] = useState(false)

  const getAllCategories = async () => {
    setIsloading(true)
    try {
      const response: any = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }finally{
      setIsloading(false)
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="w-[20rem] h-[25rem]">
      {isLoading ? (
        <CategoryLoader />
      ) : (
        <ScrollArea className="h-full w-full rounded-md border bg-slate-50 dark:bg-black dark:text-white text-black">
          {categories.map((category) => (
            <Accordion
              key={category.id}
              type="single"
              collapsible
              className="w-full px-5"
            >
              <AccordionItem value={`item-${category.id}`}>
                <AccordionTrigger>{category.name}</AccordionTrigger>
                <AccordionContent>
                  {category.subcategories.map((subcategory) => (
                    <Accordion
                      key={subcategory.id}
                      type="single"
                      collapsible
                      className="w-full"
                    >
                      <AccordionItem value={`item-${subcategory.id}`}>
                        <AccordionTrigger>{subcategory.name}</AccordionTrigger>
                        <AccordionContent>
                          {subcategory.subcategories.map((subsubcategory) => (
                            <Accordion
                              key={subsubcategory.id}
                              type="single"
                              collapsible
                              className="w-full"
                            >
                              <AccordionItem
                                value={`item-${subsubcategory.id}`}
                              >
                                <AccordionTrigger>
                                  {subsubcategory.name}
                                </AccordionTrigger>
                              </AccordionItem>
                            </Accordion>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </ScrollArea>
      )}
    </div>
  );
}

export default Category;


function CategoryLoader() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-[3.1rem] w-full" />
      <Skeleton className="h-[3.1rem] w-full" />
      <Skeleton className="h-[3.1rem] w-full" />
      <Skeleton className="h-[3.1rem] w-full" />
      <Skeleton className="h-[3.1rem] w-full" />
      <Skeleton className="h-[3.1rem] w-full" />
      <Skeleton className="h-[3.1rem] w-full" />
    </div>
  );
}
