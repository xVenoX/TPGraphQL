const pets: {
    id: string;
    name: string;
    age: number;
    pictureUri: string;
    ownerName: string;
    ownerId: string;
    owner?: typeof owners[0]
}[] = [];

export const owners: {
    id: string;
    name: string
}[] = [];

export default pets;