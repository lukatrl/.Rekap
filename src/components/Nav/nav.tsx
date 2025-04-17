

import React, { useState } from 'react';
import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/react';
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {user} from "@/app/profile/user"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Nav() {
    const [navPhone, setNavPhone] = useState(false);
    const { setTheme } = useTheme()
    const [isConnected, setIsConnected] = useState(false);
    return (
        <div className='w-full h-[100px] relative'>
            <div className='p-8 absolute flex items-center justify-around w-full'>
                <Link href={"/"}> <p className='text-xl mr-3'>.REKAP</p></Link>
                {navPhone && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                )}
                <div id='navElement' className='ml-3 flex-1 '>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Commencer</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >

                                                    <div className="mb-2 mt-4 text-xl font-medium">
                                                        Bienvenue sur Rekap
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        votre assistant numérique pour la gestion administrative.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <li className='hover:bg-gray-500 hover:bg-opacity-30 rounded p-3 cursor-pointer'>
                                            Introduction
                                            <p className='text-[10px] opacity-30'>Découvrir Rekap...</p>
                                        </li>
                                        <Link href={"/pro"}>
                                        <li className='hover:bg-gray-500 hover:bg-opacity-30 rounded p-3 cursor-pointer'>
                                            Professionnelle
                                            <p className='text-[10px] opacity-30'>Découvrir la partie pro...</p>
                                            </li>
                                        </Link>
                                        <Link href={"signin"}>
                                        <li className='hover:bg-gray-500 hover:bg-opacity-30 rounded p-3 cursor-pointer'>
                                            Inscription
                                            <p className='text-[10px] opacity-30'>Crée un compte Gratuit...</p>
                                        </li>
                                        </Link>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Produits</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <Link href={"/documents"}>
                                        <li className='hover:bg-gray-500 hover:bg-opacity-30 rounded p-3 cursor-pointer'>
                                            Gestion des Documents
                                            <p className='text-[10px] opacity-30'>Centralisez et organisez tous vos documents.</p>
                                        </li>
                                        </Link>
                                        <li className='hover:bg-gray-500 hover:bg-opacity-30 rounded p-3 cursor-pointer'>
                                            Collaboration en Équipe
                                            <p className='text-[10px] opacity-30'>Travaillez ensemble de manière efficace.</p>
                                        </li>
                                        <li className='hover:bg-gray-500 hover:bg-opacity-30 rounded p-3 cursor-pointer'>
                                            Analyse de Données
                                            <p className='text-[10px] opacity-30'>Obtenez des insights précieux.</p>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className='flex-2 mr-5'>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                                        Sombre
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("light")}>
                                        Claire
                                    </DropdownMenuItem>

                                    <DropdownMenuItem onClick={() => setTheme("system")}>
                                        System
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <ul className='flex'>
                                <NavigationMenuItem>
                                    <span className='mr-3'>
                                        <NavigationMenuTrigger> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg></NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className='text-[12px]' >
                                                <Link href="/profile">
                                                    <li className='hover:bg-gray-300 hover:bg-opacity-30 rounded p-1 cursor-pointer flex'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mr-1">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                                        </svg>

                                                        Profile</li> </Link>
                                                <li className='hover:bg-gray-300 hover:bg-opacity-30 rounded p-1 cursor-pointer flex'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mr-1">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg>

                                                    <p> Paramètre </p></li>
                                                {isConnected ? <li className='hover:bg-gray-300 hover:bg-opacity-30 rounded p-1 cursor-pointer flex'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mr-1">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                                    </svg>

                                                    <Link href="/documents"> <p>Documents</p></Link></li> :
                                                    <p></p>
                                                }

                                            </ul>
                                        </NavigationMenuContent>
                                    </span>

                                </NavigationMenuItem>

                            </ul>
                        </NavigationMenuList>
                        {isConnected ? <p></p> :
                            <div className='flex gap-5'>
                                <Link href={"/signup"}>
                                <p className='cursor-pointer '>
                                    Login
                                </p>
                                </Link>
                                <p className='cursor-pointer'>
                                    Logout
                                </p>

                                <div className='flex'>
                                    {user.myMessage.length > 0 && user.myMessage[0].vueStatsUser === true ? <span className={"rounded-full m-0  bg-red-600 p-1 w-1 h-1"}>

                               </span> : null }

                                <svg className="w-6 h-6 cursor-pointer hover:text-gray-500 text-gray-800 dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
                                </svg>
                                </div>
                            </div>

                        }


                    </NavigationMenu>

                </div>
            </div>
        </div>
    );
}

export default Nav;
