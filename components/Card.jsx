'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Image from 'next/image';
import carsData from '../cars.json'; // Assuming your JSON file is in the root folder

export default function Card() {
  const defaultImage = '/carr.jpeg'; // Default image path
  const itemsPerPage = 12; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1); // Current page state

  // Calculate total pages
  const totalPages = Math.ceil(carsData.length / itemsPerPage);

  // Slice the carsData based on the current page
  const displayedCars = carsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className="pb-10" id="pagination">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index + 1}>
                <PaginationLink
                  onClick={() => setCurrentPage(index + 1)}
                  className={currentPage === index + 1 ? 'font-bold' : ''}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {displayedCars.map((car) => (
          <div
            key={car.id}
            className="w-[345px] h-[420px] gap-[28px] flex flex-col rounded-lg items-center justify-center"
          >
            <div className="w-[345px] h-[350px] rounded-lg flex flex-col items-center justify-center">
              <Image
                src={car.image || defaultImage}
                alt={car.brand || 'Car image'}
                className="w-[345px] h-[230px] rounded-xl mb-5 "
                width={300}
                height={354}
              />
              <div className="w-[345px] h-[100px] gap-[163px] px-2">
                <div className="flex justify-between">
                  <h1 className="w-[83px] h-[34px] font-medium text-[16px] leading-3 flex flex-col">
                    {car.brand} <span className="py-2">{car.carModel}</span>
                  </h1>
                  <h1 className="text-[#2970FF] ">
                    ${car.pricePerDay}
                    <span className="text-black"> /day</span>
                  </h1>
                </div>

                <div className="w-[345px] h-[40px] gap-[4px] flex flex-col justify-start items-start pt-3">
                  <p className="font-light leading-2.5 text-[#121417]">
                    {car.city} | {car.country} | {car.rentalCompany}
                  </p>
                  <p className="font-light leading-2.5 text-[#121417]">
                    {car.carType} | {car.carModel} | ID {car.id} | {car.year}
                  </p>
                </div>
              </div>
            </div>

            <AlertDialog>
              <AlertDialogTrigger className="w-[345px] h-[44px] bg-[#2970FF] text-white rounded-xl shadow-md hover:bg-blue-500 hover:text-white duration-300 ease">
                View More
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogDescription>
                    <div className="px-1 py-2">
                      <Carousel>
                        <CarouselContent>
                          <CarouselItem className="flex items-center justify-center">
                            <Image
                              src={car.image || defaultImage}
                              alt={car.brand || 'Car image'}
                              className="w-[374px] h-[268px] rounded-lg drop-shadow-md"
                              width={374}
                              height={268}
                            />
                          </CarouselItem>
                          {/* Add more CarouselItems if needed */}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </div>
                    <AlertDialogTitle>
                      <div className="flex flex-row justify-between">
                        <h1 className="pb-2">
                          {car.brand} {car.carModel}
                        </h1>
                        <h1>{car.year}</h1>
                      </div>
                    </AlertDialogTitle>
                    <div className="w-[345px] h-[35px] gap-[4px] flex flex-col items-center justify-center sm:justify-start sm:items-start duration-300">
                      <p className="font-light leading-2.5 text-[#121417]">
                        {car.city} | {car.country} | {car.carType}
                      </p>
                      <p className="font-light leading-2.5 text-[#121417] flex">
                        Fuel: {car.fuelConsumption} | Engine: {car.engineSize}
                      </p>
                    </div>

                    <div className="flex flex-col justify-between">
                      <h1 className="font-medium text-black text-[1rem] pt-4 pb-1">
                        Accessories and functionalities:
                      </h1>
                      <div className="flex-wrap">
                        <p className="font-light leading-2.5 text-[#121417]">
                          {car.accessories}
                        </p>
                      </div>
                    </div>

                    <div className="pt-5 font-light leading-2.5">
                      <h1 className="font-bold text-[#121417]">About car: </h1>
                      <p className="text-black">{car.description}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h1 className="font-medium text-black text-[1rem] pt-4 pb-1">
                        Rental Conditions:
                      </h1>
                      <div className="flex flex-row flex-wrap gap-2 ">
                        <h1 className="text-xs bg-slate-100 rounded-full w-fit px-5 py-2 text-black shadow-sm">
                          Minimum age:{' '}
                          <span className="text-[#2970FF]">{car.minAge}</span>
                        </h1>
                        <h1 className="text-xs bg-slate-100 rounded-full w-fit px-5 py-2 text-black shadow-sm">
                          Valid driver license
                        </h1>
                        <h1 className="text-xs bg-slate-100 rounded-full w-fit px-5 py-2 text-black shadow-sm">
                          Mileage:{' '}
                          <span className="text-[#2970FF]">{car.mileage}</span>
                        </h1>
                        <h1 className="text-xs bg-slate-100 rounded-full w-fit px-5 py-2 text-black shadow-sm">
                          Price:{' '}
                          <span className="text-[#2970FF]">
                            ${car.pricePerDay}
                          </span>
                          /day
                        </h1>
                      </div>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-red-600 text-white hover:bg-red-700 hover:text-white duration-300 ease">
                    Close
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ))}
      </div>

      <div className="pt-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index + 1}>
                <PaginationLink
                  onClick={() => setCurrentPage(index + 1)}
                  className={currentPage === index + 1 ? 'font-bold' : ''}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
