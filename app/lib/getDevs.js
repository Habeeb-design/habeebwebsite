import {Card} from '../components/cards';

import * as Airtable from 'airtable';

const base = new Airtable({
    apiKey: process.env.NEXT_APP_AUTH_TOKEN,
}).base(process.env.NEXT_APP_BASE_ID); 

const table = base(process.env.NEXT_APP_TABLE_ID);

const getCardedRecords = records => {
    return records.map(record => cardRecords(record)); 
}

const cardRecords = record => {
    console.log(record.fields.Description)
    return <Card Name = {record.fields.Name} Position = {record.fields.Position} Date = {record.fields.Date} Description = {record.fields.Description} srcImage = {record.fields.Image}></Card>
}

export default async function getDevs() {
    const records = await table.select({}).all();
    const allCards = await getCardedRecords(records); 
    console.log(allCards);
    return allCards
}