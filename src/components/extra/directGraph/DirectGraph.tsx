"use client";
import React,{MouseEvent} from 'react';
import {Grid,Container} from "@mui/material";
import { attribute as _,Node,Edge } from 'ts-graphviz';
import GenGraph from './GenGraph';
import FormGen from './FormGen';
import toDotFunc2 from './toDot';
import Image from "next/image";
import Explain from "./Explain";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

type nodeType={
  name:string,
  addNode:Node,
  nodeName:string
}

type edgeType={
  name:string,
  edge:Edge,
  nodeArray:string[],
  label:string
  
}

 const DirectGraph=()=>{ 
  
  const eleRef=React.useRef(null);
  const staticImage = process.env.NEXT_PUBLIC_aws;  
  const [subGraphLabelArr,setSubGraphLabelArr]=React.useState<string[] | []>(["select"]);
  const [nodeArr,setNodeArr]=React.useState<nodeType[] >([]);
  const [edgeArr,setEdgeArr]=React.useState<edgeType[] | []>([]);
  const isDefined=toDotFunc2(nodeArr,edgeArr,subGraphLabelArr)? true:false;
  const toThisDot=isDefined ? toDotFunc2(nodeArr,edgeArr,subGraphLabelArr) : null;
  const directGraph=`${staticImage}/directGraph.png`
  const [addExplain,setAddExplain]=React.useState<boolean>(false);
 
const handleonMouseOver=(e:MouseEvent<HTMLDivElement> | undefined)=>{
  e?.preventDefault();
  setAddExplain(true);
}
const handleonMouseOut=(e:MouseEvent<HTMLDivElement> | undefined)=>{
  e?.preventDefault();
  setAddExplain(false);
}
  return (
    <Container maxWidth="xl">
      <h3 className="text-center text-5xl mx-auto container my-3">make your own flow chart</h3>
        <Grid container spacing={{xs:2,md:3}} className="lg:min-h-[60vh]">
            <Grid item xs={12} md={4} className="w-full ">
            <FormGen
            subGraphLabelArr={subGraphLabelArr}
            setSubGraphLabelArr={setSubGraphLabelArr}
            nodeArr={nodeArr}
            setNodeArr={setNodeArr}
            edgeArr={edgeArr}
            setEdgeArr={setEdgeArr}
            />
            </Grid>
            {(nodeArr.length>0 && edgeArr.length>0 && subGraphLabelArr.length>0) ? 
            <Grid item xs={12} md={8} className="w-full ">
                <GenGraph dot={toThisDot} nodeArr={nodeArr} edgeArr={edgeArr}/>
            </Grid>
            :
            <Grid item xs={12} md={6} className="w-full relative cursor-pointer h-[50vh] lg:h-auto  " onMouseOver={(e)=>handleonMouseOver(e)} onMouseOut={(e)=>handleonMouseOut(e)}>
              {!addExplain && <h3 className="text-xl text-center font-bold my-2">hover/touch below for instructions <ArrowDownwardIcon sx={{ml:1}}/></h3>}
              <Image src={directGraph} alt="www.masterconnect.ca"
              width={700} height={700}
              className="z-0"
              />
              <div className={addExplain ? "flex flex-col items-start justify-start  overflow-y-scroll  absolute inset-[2rem] z-1 opacity-100 bg-white":"hidden opacity-0"}>
                <Explain/>
              </div>
              </Grid>
            }
        </Grid>
    </Container>
  )
}

export default DirectGraph