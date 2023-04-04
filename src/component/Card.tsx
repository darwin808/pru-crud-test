/* eslint-disable react/jsx-key */
import React, { useState } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { BasicModal } from "./Modal"
import { FormCompo } from "./Form"

export const BasicCard = ({ data, deleteFam, families, setfamilies }: any) => {
   const [open, setOpen] = React.useState(false)
   const [famName, setfamName] = useState(data.name)
   const [mother, setmother] = useState(data.mother)
   const [father, setfather] = useState(data.father)
   const [child1, setchild1] = useState(data.children[0])
   const [child2, setchild2] = useState(data.children[1])
   const [child3, setchild3] = useState(data.children[2])

   const editFam = (e: any, data: any) => {
      e.preventDefault()
      const res = families.find((e: any) => e.id === data.id)
      res.name = famName
      res.mother = mother
      res.father = father
      res.children[0] = child1
      res.children[1] = child2
      res.children[2] = child3
      setOpen(false)
      console.log(res)
      // setfamilies([
      //    ...families,
      //    {
      //       id: data.id,
      //       name: famName,
      //       mother,
      //       father,
      //       children: [child1, child2, child3],
      //    },
      // ])
      // setfamName("")
      // setmother("")
      // setfather("")
      // setchild1("")
      // setchild2("")
      // setchild3("")
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
      onSubmit: (e: any) => editFam(e, data),
   }
   return (
      <Card sx={{ minWidth: 275 }}>
         <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
               {famName} Family
            </Typography>
            <Typography>mother:{mother}</Typography>
            <Typography>father:{father}</Typography>
            <Typography>
               children:{" "}
               {data?.children?.map((e: any) => {
                  return <Typography>{e}</Typography>
               })}
            </Typography>
         </CardContent>
         <BasicModal open={open} setOpen={setOpen}>
            <FormCompo {...formProps} />
         </BasicModal>
         <CardActions>
            <Button
               size="small"
               variant="contained"
               color="error"
               onClick={() => deleteFam(data)}
            >
               Delete
            </Button>
         </CardActions>
      </Card>
   )
}
