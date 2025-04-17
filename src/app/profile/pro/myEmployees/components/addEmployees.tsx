import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Checkbox } from "@/components/ui/checkbox"



export function AddEmployee({ name, closeModal }: { name: string, closeModal : () => void }) {
    const roles = [
       {id : 1, name : 'first Role '},
       {id : 2, name : 'second Role '},
       {id : 3, name : 'thirty Role '}
    ]
    return (
        <Card className="w-[350px] absolute z-50 m-auto">
            <CardHeader>
                <CardTitle>Ajout d'un employer</CardTitle>
{/*                 <CardDescription>Deploy your new project in one-click.</CardDescription>
 */}            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id={name} placeholder="Nom complet de l'employée " />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Post </Label>
                            <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    {roles.map((role) => (
                                        <SelectItem key={role.id} value={role.name}>
                                            {role.name}
                                        </SelectItem>
                                    ))}                             
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex">
                            <Checkbox />
                            <p className="text-sm hover:underline ml-3 cursor-pointer">Utilisateur Admin ? </p>
                        </div>


                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={closeModal} variant="outline">annulé</Button>
                <Button>Ajouter</Button>
            </CardFooter>
        </Card>
    )
}
