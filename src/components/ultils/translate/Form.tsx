"use client";
import React, {MouseEvent} from 'react'
import { Input, FormControl, InputLabel } from "@mui/material";

type listType = {

    name: string,
    value: string

}[]
type formType = {
    loaded: boolean,
    data: {
        text: string,
        source: string,
        target: string,
    }
}
type containType = {
    list: listType,
    contain: formType,
    setContain: React.Dispatch<React.SetStateAction<formType>>,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}
const Form = ({ contain, list, setContain, setShow }: containType) => {
    const [text, setText] = React.useState<string>("");
    const [source, setSource] = React.useState<string | undefined>("");
    const [target, setTarget] = React.useState<string | undefined>("");



    const handleSubmit = (e: MouseEvent<HTMLButtonElement> | undefined) => {
        e?.preventDefault();
        if (source && target) {
            setContain({
                loaded: true,
                data: {
                    text: text,
                    source: source,
                    target: target
                }
            })
            setShow(true);
        }
    }

    return (
        <div className="mx-auto container h-auto bg-[rgba(255,255,255,0.7)] text-black dark:bg-black dark:text-white">
            <form className="flex flex-col justify-center items-center my-8 bg-white text-black dark:bg-black dark:text-white my-2 p-2 rounded-lg " >
                <FormControl className="mx-auto my-2 p-2 bg-white text-black dark:bg-white dark:text-black my-2 p-2 rounded-lg">
                <h4 className="text-lg mb-2 text-center">text to translate</h4>
                    <textarea className=" w-full  p-2 text-black bg-white" id="translate" name="text" value={text} rows={5} cols={100} onChange={(e) => setText(e.target.value)} />
                </FormControl>
                <FormControl className=" p-2 text-black bg-white bg-white text-black dark:bg-white dark:text-black my-2 p-2 rounded-lg" sx={{margin:"4rem auto"}}>
                    <h4 className="text-lg mb-2 text-center">source</h4>
                    <select
                        id="list"
                        // value={source}
                        name="source"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        placeholder="source"
                        className="bg-white text-black dark:bg-white dark:text-black my-2 p-2 rounded-lg"
                    >
                        {list.map((lang, index) => (
                            <option value={lang.value} key={`${lang}-${index}`}>{lang.name}</option>
                        ))}

                    </select>
                </FormControl>
                <FormControl className="mx-auto mb-3 bg-white text-black dark:bg-white dark:text-black my-2 p-2 rounded-lg" sx={{marginBottom:"3rem"}}
                
                >
                    <h4 className="text-lg mb-2 text-center">To translate</h4>
                    <select
                        id="list"
                        // value={target}
                        name="target"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="source"
                        className="bg-white text-black dark:bg-white dark:text-black my-2 p-2 rounded-lg"
                    >
                        {list.map((lang, index) => (
                            <option value={lang.value} key={`${lang}-${index}`}>{lang.name}</option>
                        ))}

                    </select>
                </FormControl>
                <button className={(source && target && text) ? "button my-4 bg-blue text-white shadow-lg shadow-blue dark:shadow-white rounded-lg dark:bg-site_blue_dark" : "hidden"}
                 onClick={(e) => handleSubmit(e)}>submit</button>
            </form>
        </div>
    )
}

export default Form