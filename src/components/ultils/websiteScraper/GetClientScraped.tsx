"use client";
import React, { MouseEvent } from 'react'
import getscraped, { getScrapType } from './getscraped';
import { FormControl, Input,FormHelperText } from "@mui/material";
import ShowScrapeResults from './ShowScrapeResults';


const GetClientScraped = () => {
    const [domain, setDomain] = React.useState<string | null>(null);
    const [matchEmail, setMatchEmail] = React.useState<boolean>(false);
    const [tempDomain, setTempDomain] = React.useState<string | null>(null);
    const [getResults, setGetResults] = React.useState<getScrapType | undefined>();
    const [msg,setMsg]=React.useState<string | null>(null);
    const REGEX_domain:RegExp=/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/g;
    React.useMemo(async () => {
        if (domain) {
            var convert = '';
            if (matchEmail) { convert = 'true' } else { convert = 'false' }
            const getData = await getscraped(domain, convert);
            setGetResults(getData)
        }
    }, [domain, matchEmail]);

    const handleSubmit = (e: MouseEvent) => {
        e.preventDefault();
        if (tempDomain && REGEX_domain.test(tempDomain)) {
            setDomain(tempDomain);
            setTempDomain(null);
            setMsg(null);
        }else{
            setMsg("not a valid domain")
        }

    }
    const handleReset = (e: MouseEvent) => {
        e.preventDefault();
            let tempReset={} as getScrapType;
            setDomain(null);
            setTempDomain(null);
            setMsg(null);
            setGetResults(tempReset)
        

    }
    return (
        
            <div className="flex flex-col items-center justify-center my-2 p-2">
                <div className=" m-auto flex sm:flex-col lg:flex-row flex-wrap items-center justify-center my-2 gap-2">
                    <FormControl className="m-auto px-2 p-2 m-2 border-2 border-blue shadow-md shadow-blue bg-white dark:bg-white text-blue">
                        <h3 className="text-center text-md">Enter domain</h3>
                        <Input
                            name="getEmail"
                            value={tempDomain ? tempDomain:""}
                            onChange={(e: React.ChangeEvent< HTMLInputElement>) => setTempDomain(e.target.value)}
                        />
                        {!msg ? <FormHelperText className="m-auto p-2 px-3 bg-white text-black" style={{color:"black"}}>example.com</FormHelperText>
                        :
                        <FormHelperText className="m-auto p-2 px-3 bg-black text-white" style={{color:"white"}}>{msg}</FormHelperText>}
                    </FormControl>
                    <FormControl className="m-auto px-2 p-2 m-2   dark:bg-white text-blue">
                        <h3 className="text-center text-md">match email?</h3>
                        <input
                            name="matchEmail"
                            type="checkbox"
                            checked={matchEmail}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMatchEmail(e.target.checked)}
                        
                        />
                    </FormControl>
                    {!domain ?
                    <div className="flex flex-col justify-center items-center">
                        <button className="text-center text-md p-2 px-4 rounded-lg border border-black shadow-lg shadow-blue hover:bg-blue hover:tracking-wide hover:shadow-xl" onClick={(e) => handleSubmit(e)}>Submit</button>
                    </div>
                    :
                    <div className="flex flex-col justify-center items-center">
                        <button className="text-center text-md p-2 px-4 rounded-lg border border-black shadow-lg shadow-blue hover:bg-blue hover:tracking-wide hover:shadow-xl" onClick={(e) => handleReset(e)}>reset</button>
                    </div>
                    }
                </div>
                {getResults && <ShowScrapeResults getResults={getResults} />}
            </div>
       
    )
}

export default GetClientScraped