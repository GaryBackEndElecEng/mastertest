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
        <div className="mx-auto container h-auto">
            <form className="flex flex-col justify-center items-center my-8 " >
                <FormControl className="mx-auto my-2">
                    <InputLabel shrink={true} htmlFor="list">Text to translate</InputLabel>
                    <textarea className=" w-full  p-2" id="translate" name="text" value={text} rows={5} cols={100} onChange={(e) => setText(e.target.value)} />
                </FormControl>
                <FormControl className="" sx={{margin:"4rem auto"}}>
                    <InputLabel htmlFor="list">source</InputLabel>
                    <select
                        id="list"
                        // value={source}
                        name="source"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        placeholder="source"
                    >
                        {list.map((lang, index) => (
                            <option value={lang.value} key={`${lang}-${index}`}>{lang.name}</option>
                        ))}

                    </select>
                </FormControl>
                <FormControl className="mx-auto mb-3"sx={{marginBottom:"3rem"}}>
                    <InputLabel htmlFor="list">to translate</InputLabel>
                    <select
                        id="list"
                        // value={target}
                        name="target"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="source"
                    >
                        {list.map((lang, index) => (
                            <option value={lang.value} key={`${lang}-${index}`}>{lang.name}</option>
                        ))}

                    </select>
                </FormControl>
                <button className={(source && target) ? "button my-4" : "hidden"} onClick={(e) => handleSubmit(e)}>submit</button>
            </form>
        </div>
    )
}

export default Form