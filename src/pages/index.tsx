/* eslint-disable react/jsx-key */
import React from "react"
import { BasicCard } from "@/component/Card"
import { FormCompo } from "@/component/Form"
import { Button, Container, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function Home() {
   const [famName, setfamName] = useState("")
   const [families, setfamilies] = useState<any[]>([])
   const [mother, setmother] = useState("")
   const [father, setfather] = useState("")
   const [child1, setchild1] = useState("")
   const [child2, setchild2] = useState("")
   const [child3, setchild3] = useState("")

   const addFamily = (e: any) => {
      e.preventDefault()
      if (famName && mother && father) {
         setfamilies([
            ...families,
            {
               id: uuidv4(),
               name: famName,
               mother,
               father,
               children: [child1, child2, child3],
            },
         ])
         setfamName("")
         setmother("")
         setfather("")
         setchild1("")
         setchild2("")
         setchild3("")
      }
   }

   const deleteFam = (family: any) => {
      const res = families.filter((e) => e.id !== family.id)

      setfamilies(res)
   }
   const formProps = {
      famName,
      setfamName,
      mother,
      setmother,
      father,
      setfather,
      child1,
      setchild1,
      child2,
      setchild2,
      child3,
      setchild3,
      onSubmit: addFamily,
   }
   React.useEffect(() => {
      console.log(families, 44)
   }, [families])

   return (
      <Stack>
         <Container>
            <Typography variant="h1">Family tree</Typography>
            <FormCompo {...formProps} />
            <div>
               {families.map((e) => {
                  return (
                     <BasicCard
                        data={e}
                        deleteFam={deleteFam}
                        families={families}
                        setfamilies={setfamilies}
                     />
                  )
               })}
            </div>
         </Container>
      </Stack>
   )
}
