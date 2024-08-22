import * as fs from 'node:fs/promises'
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    const allContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    return allContacts.length;
};

console.log(await countContacts());
