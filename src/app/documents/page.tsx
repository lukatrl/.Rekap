"use client"

import React, { useEffect, useState } from 'react';
import Cardoc, { AddCard, CardocPro } from '@/components/docs/Cardoc';
import Nav from '@/components/Nav/nav';
import { user } from '../profile/user';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';

function Documents() {







    const docData = [
        { id: 1, title: "CONTRAT N°54646541 Carist", transmitter: "addecco", users: user.name },
        { id: 2, title: "CONTRAT N°546541 - Preparateur de Commande", transmitter: "Partnaire" },
        { id: 3, title: "CONTRAT N°54674646541 Carist caces - 6", transmitter: "Crit" },
    ];



    const proData = ["Envoyés", "Recus"]

    return (
        <div>
            <Nav />

            <div className={user.professionalAccount === false ? 'bg-blue-200 bg-opacity-30 w-[90%] justify-center m-auto mt-12 rounded p-5' : 'bg-gray-200 hover:bg-opacity-30 text-black border-purple-400 border-2 bg-opacity-30 w-[90%] justify-center m-auto mt-12 rounded p-5'}>
                {user.professionalAccount === false ?
                    <>
                        <h1 className='uppercase mb-2 '>Mes documents : </h1>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Tout" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">Tout</SelectItem> 
                                {user.professionalAccount === false ? docData.map((data) => (
                                    <SelectItem key={data.id} value={data.transmitter}>
                                        {data.transmitter}
                                    </SelectItem>

                                )) : <p>Erreur</p>}
                            </SelectContent>
                        </Select>
                        <div className='mt-5'>
                            <ul className='flex flex-wrap justify-around'>
                                {user.professionalAccount === false ? docData.map((data) => (
                                    <Cardoc key={data.id} title={data.title} transmitter={data.transmitter} />
                                )) : user.professionalAccount === true ? docData.map((data) => (
                                    <CardocPro key={data.id} title={data.title} transmitter={data.transmitter} />
                                )) : <p>Error</p>}
                                <AddCard />
                            </ul>
                        </div>
                    </>
                    : user.professionalAccount === true ? <>
                        <h1 className='uppercase mb-2 dark:text-white'>Mes documents
                            <span className="bg-purple-100  text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 m-2 dark:text-white">PRO</span> </h1>
                        <div className='flex'>
                            <Select>
                                <SelectTrigger className="w-[180px] mr-2">
                                    <SelectValue placeholder={proData[1]} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">Tout</SelectItem>
                                    {proData.map((data) => (
                                        <SelectItem key={data} value={data}>
                                            {data}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue className='placeholder:dark:text-white' placeholder="Mes Employés" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="employés">Tout</SelectItem>
                                    {user.employe.map((data) => (
                                        <SelectItem key={data.id} className='dark:text-white' value={data.fistName + " " + data.name}>
                                            {data.fistName + " " + data.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Drawer>
                                <DrawerTrigger className='ml-3'>Gestion des dossiers</DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle>Gestion dossiers</DrawerTitle>
                                        <DrawerDescription>Les actions ci-dessous peuvent changer les données utilisateurs </DrawerDescription>
                                    </DrawerHeader>
                                    <DrawerFooter>
                                        <Button>Enregistré</Button>
                                        <DrawerClose>
                                            <Button variant="outline">Annulé</Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </div>
                        <div className='mt-5'>
                            <ul className='flex flex-wrap justify-around'>
                                {docData.map((data) => (
                                    <CardocPro key={data.id} title={data.title} transmitter={data.transmitter} />
                                ))}
                                <AddCard />
                            </ul>
                        </div>
                    </> : <p>Erreur</p>}

            </div>
        </div>
    );
}

export default Documents;