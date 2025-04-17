"use client"
//@ts-ignore
import Nav from '@/components/Nav/nav'
import React, { useState } from 'react'
import Link from 'next/link';
import { AddEmployee } from "../profile/pro/myEmployees/components/addEmployees"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { user } from './user';

function Profil() {
    ;
    const [position, setPosition] = React.useState("bottom");
    const [currentObjContract, setCurrentObjContract] = useState(55);
    const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);

    console.log("status Modal ", showAddEmployeeModal);


    const modalIsOpen = () => {
        console.log("click");

        if (!showAddEmployeeModal) {
            setShowAddEmployeeModal(true);
        } else {
            setShowAddEmployeeModal(false);
        }
    }

    return (
        <div>
            <Nav />
            <div className="light:bg-white light:text-white overflow-hidden shadow rounded-lg border">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        {user.professionalAccount ? <p>Profile
                            <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 m-2 dark:text-purple-300">PRO</span>
                        </p> : <p>Profile<br />
                                <Link href={"/pro"}>
                                    <span className='hover:underline cursor-pointer text-[15px] '> passer en compte pro</span>
                                </Link>
                        </p>}
                    </h3>


                </div>


                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200 dark:text-white">
                        <div className="py-3 sm:py-5 sm:grid  sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-white">
                                Prénom
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                {user.name}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-white">
                                Email 
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                {user.email}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium dark:text-white text-gray-500">
                                Numéro
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                {user.phone}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium dark:text-white text-gray-500">
                                Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                {user.adresse}
                            </dd>
                        </div>



                        {user.professionalAccount &&
                            <>

                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 dark:text-white">
                                    Votre Society
                                    </dt>
                                <dd className="mt-1 text-sm flex text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                        <p> {user.society}</p>

                                        <AlertDialog>
                                            <AlertDialogTrigger><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                                            </svg>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Etes vous sur de quitté la societé <span className='underline'>{user.society}</span> ?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        Cette action ne peut pas être annulée. Cela supprimera définitivement votre Société actuelle.

                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                                                    <AlertDialogAction>Supprimer quand même</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 dark:text-white">
                                        Employée
                                    </dt>
                                <dd className="mt-1 text-sm flex text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                    {user.employe.length}
                                    <Sheet>


                                        <SheetTrigger>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-2 cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg></SheetTrigger>
                                        <SheetContent>
                                            {showAddEmployeeModal ? <AddEmployee name="Employee Name" closeModal={() => setShowAddEmployeeModal(false)} /> : null}
                                            {showAddEmployeeModal === false ? 
                                                <SheetHeader>
                                                    <div className='flex'>
                                                        <SheetTitle>Liste de mes employées </SheetTitle>
                                                        <svg onClick={() => modalIsOpen()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2 cursor-pointer">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                                        </svg>

                                                    </div>

                                                    <SheetDescription>
                                                        Certaines actions peuvent modifier le status de vos employées..
                                                    </SheetDescription>
                                                    {user.employe.map((group) => (
                                                        <ul className='flex' key={group.id}>
                                                            <li className='border-b-2 text-center'>{group.fistName} {group.name} / {group.email}</li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 m-1 cursor-pointer">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                                            </svg>

                                                        </ul>
                                                    ))}
                                                </SheetHeader>
                                                : null}

                                        </SheetContent>
                                    </Sheet>
                                </dd>

                            </div>




                            <div className='flex w-full flex-wrap justify-around'>
                                <Card className='w-[200px] m-5'>
                                    <CardHeader className="pb-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-[120px] cursor-pointer">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.499 8.248h15m-15 7.501h15" />
                                                </svg>
                                            </DropdownMenuTrigger>

                                            <DropdownMenuContent>


                                                <DropdownMenuItem>Modifier l'objectif</DropdownMenuItem>
                                                <DropdownMenuItem>Modifier la valeur</DropdownMenuItem>
                                                <DropdownMenuItem>Gestion de l'objectif</DropdownMenuItem>

                                            </DropdownMenuContent>
                                        </DropdownMenu>

                                        <CardDescription>Contrat Signé </CardDescription>
                                        <CardTitle className="text-4xl">{currentObjContract}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">Total de contrat signé par la société {user.society}</div>
                                    </CardContent>
                                    <CardFooter>
                                        <Progress value={25} aria-label="25% increase" />
                                    </CardFooter>
                                </Card>

                                <Card className='w-[200px] m-5'>
                                    <CardHeader className="pb-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-[120px] cursor-pointer">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.499 8.248h15m-15 7.501h15" />
                                                </svg>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-56">
                                                <DropdownMenuLabel>Panel objectif</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                                    <DropdownMenuRadioItem value="top">Modifier l'objectif</DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="bottom">Modifier la valeur</DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="right">Gestion de l'objectif</DropdownMenuRadioItem>
                                                </DropdownMenuRadioGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        <CardDescription>Facture </CardDescription>
                                        <CardTitle className="text-4xl">99</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">la socitété {user.society} à 99 facture </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Progress value={50} aria-label="25% increase" />
                                        <p>20 000€</p>
                                    </CardFooter>
                                </Card>

                                <Card className='w-[200px] m-5'>
                                    <CardHeader className="pb-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-[120px] cursor-pointer">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.499 8.248h15m-15 7.501h15" />
                                                </svg>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-56">
                                                <DropdownMenuLabel>Panel objectif</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                                    <DropdownMenuRadioItem value="top">Modifier l'objectif</DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="bottom">Modifier la valeur</DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="right">Gestion de l'objectif</DropdownMenuRadioItem>
                                                </DropdownMenuRadioGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                        <CardDescription>Total Facture </CardDescription>
                                        <CardTitle className="text-4xl">18 658 €</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">Vous avez généré 18 658 € avec vote société</div>
                                    </CardContent>
                                    <CardFooter>
                                        <Progress value={80} aria-label="25% increase" />

                                    </CardFooter>

                                </Card>
                            </div>
                            </>
                        }


                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Profil
