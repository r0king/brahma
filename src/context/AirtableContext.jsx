import {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import Airtable from 'airtable'

const AIRTABLE_API_KEY = 'patghxuYSu69fSwhj.e069155dfcbe114eb86bbf17f2d900edb179e5eb9162472c2a5953c8c66a362b'
const AIRTABLE_BASE_ID = 'app5nQ7caLsCvJwTO'
const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Events`

const AirtableContext = createContext({})
export const AirtableContextProvider = ({children}) => {

    const [Events, setEvents] = useState([])

    const Request_Add_Event = async(payload) => {
        console.log(payload)
        await axios.post(
            AIRTABLE_API_URL, 
                JSON.stringify({
                    "fields": {
                        "Title": payload.title,
                        "Type": payload.type,
                        "Location": payload.location,
                        "Price": payload.price,
                        "Date": payload.date,
                        "Speaker Heading": payload.speaker_heading,
                        "Speaker Description": payload.speaker_description,
                        "About Heading": payload.about_heading,
                        "About Description": payload.about_description,
                        "Image URL": payload.image_url
                    }
            }),{
                headers: {
                    'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                    'Content-type': 'application/json'
                }
            }).then((res) => {
            if (res.status !== 200) {
                alert("Error", res)
                return
            }
            return JSON.parse(res.data)
        })
    }

    const getEventId = (index) => {
        return Events[index].id
    }

    const Request_Edit_Event = async (idx, payload) => {

        const string_id = getEventId(idx)

        await axios.patch(
            AIRTABLE_API_URL, 
                JSON.stringify({
                    "records": [{
                    "id" : string_id,
                    "fields": {
                        "Title": payload.title,
                        "Type": payload.type,
                        "Location": payload.location,
                        "Price": payload.price,
                        "Date": payload.date,
                        "Speaker Heading": payload.speaker_heading,
                        "Speaker Description": payload.speaker_description,
                        "About Heading": payload.about_heading,
                        "About Description": payload.about_description,
                        "Image URL": payload.image_url
                        }
        }]}),{
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if (res.status !== 200) {
                alert("Error", res)
                return
            }
            alert("Event Edited")
        })

    }

    useEffect(() => {
        console.log(Events)
    }, [Events])


    const Request_All_Events = async () => {
        await axios.get(
            AIRTABLE_API_URL, 
            {
                headers: {
                    'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                    'Content-type': 'application/json'
                }
            }
        )
        .then(async (res) => {
            if (res.status !== 200) {
                alert(res)
                return
            }
            setEvents(res.data.records)
        })
    }

    useEffect(() => {
        Request_All_Events()
    }, [])

    return (
        <AirtableContext.Provider value={{
            Request_Add_Event,
            Request_Edit_Event
        }}>
            {children}
        </AirtableContext.Provider>
    )
}

export default AirtableContext