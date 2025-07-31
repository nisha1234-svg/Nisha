'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const page=()=>{
    const{slug}=useParams();

    return(
        <>
        <h1> Dynemic Routing </h1>
        <h3> Contact No:</h3>

        </>
    )
}

export default page