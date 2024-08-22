import * as fs from 'node:fs/promises'
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    const contactList = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    const newcontact = createFakeContact();
    contactList.push(newcontact);
    await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
};

addOneContact();
