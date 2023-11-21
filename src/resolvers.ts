import pets from "./database";
import {owners} from "./database";
import { randomUUID } from "crypto";

type Pet = typeof pets[0];
type Owner= typeof owners[0];

const getPet = (args: { id: string }): Pet | undefined => {
    return pets.find((pet: Pet) => pet.id === args.id);
};

const getPets = (): Pet[] => {
    return pets;
};

const createPet = (args: Omit<Pet, "id">): Pet => {
    // generate randon uuid for pet object
    const generatedId = randomUUID().toString();
    // create pet object and save
    const pet = { id: generatedId, ...args };
    const owner = getOwner({ id: args.ownerId });
    pet.owner = owner;
    pets.push(pet);
    return pet;
    };

const updatePet = (args: {
    id: string;
    name?: string;
    age?: number;
    pictureUri?: string;
    ownerName?: string;
}): Pet => {
    // loop through pets array and get object of pet
    const index = pets.findIndex((pet: Pet) => pet.id === args.id);
    const pet = pets[index];

    // update field if it is passed as an argument
    if (args.age) pet.age = args.age;
    if (args.name) pet.name = args.name;
    if (args.pictureUri) pet.pictureUri = args.pictureUri;

    return pet;
};

const deletePet = (args: { id: string }): string => {
    // loop through pets array and delete pet with id
    const index = pets.findIndex((pet: Pet) => pet.id === args.id);
    if (index !== -1) {
        pets.splice(index, 1);
    }

    return args.id;
};

const getOwner = (args: { id: string }): Owner | undefined => {
    return owners.find((owner) => owner.id === args.id);
};

const getOwners = () => {
    return owners;
};

const createOwner = (args: Omit<typeof owners[0], "id">) => {
    const generatedId = randomUUID().toString();
    const owner = { id: generatedId, ...args };
    owners.push(owner);
    return owner;
};

const updateOwner = (args: typeof owners[0]) => {
    const index = owners.findIndex((owner) => owner.id === args.id);
    const owner = owners[index];
    if (args.name) owner.name = args.name;
    // Ajoutez d'autres mises à jour pour les champs du propriétaire au
    return owner;
};

const deleteOwner = (args: typeof owners[0]) => {
    const index = owners.findIndex((owner) => owner.id === args.id);
    if (index !== -1) {
    owners.splice(index, 1);
    }
    return args.id;
};



export const root = {
    getPet,
    getPets,
    createPet,
    updatePet,
    deletePet,
    getOwner,
    getOwners,
    createOwner,
    updateOwner,
    deleteOwner,
};
