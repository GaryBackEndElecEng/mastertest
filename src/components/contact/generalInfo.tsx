import axios,{AxiosError} from 'axios';

type generalInfoType={
    id: number,
    name: string,
    address: string,
    cell: string,
    country: string,
    provState: string,
    city: string,
    postal: string,
    extra: string,
    siteArray:string[]
}

const generalInfo = async ():Promise<generalInfoType | any> => {
const category=`${process.env.NEXT_PUBLIC_serverApi}/category/` 
try {
    const res:any= await axios.get(category);
    const body:generalInfoType = res.data.filter((obj:any)=>(obj.name==="GeneralInfo"))[0].categoryGeneralInfo[0]
    return body
} catch (error) {
    console.error(new Error("did not connect"))
}

}

export default generalInfo