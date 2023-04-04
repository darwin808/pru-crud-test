import React, { useState } from "react"
import { Button, Container, Stack, TextField, Typography } from "@mui/material"
import { v4 as uuidv4 } from "uuid"

export const FormCompo = ({
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
   onSubmit,
}: any) => {
   return (
      <form
         action="submit"
         onSubmit={onSubmit}
         style={{
            display: "flex",
            flexDirection: "column",
         }}
      >
         <Stack spacing={2}>
            <TextField
               type="text"
               label="Family Name"
               value={famName}
               onChange={(e) => setfamName(e.currentTarget.value)}
            />
            <Stack direction={"row"} width={1} spacing={2}>
               <TextField
                  type="text"
                  label="Mother"
                  fullWidth
                  value={mother}
                  onChange={(e) => setmother(e.currentTarget.value)}
               />
               <TextField
                  fullWidth
                  type="text"
                  label="Father"
                  value={father}
                  onChange={(e) => setfather(e.currentTarget.value)}
               />
            </Stack>
            <TextField
               type="text"
               label="child1"
               value={child1}
               onChange={(e) => setchild1(e.currentTarget.value)}
            />
            <TextField
               type="text"
               label="Child 2"
               value={child2}
               onChange={(e) => setchild2(e.currentTarget.value)}
            />
            <TextField
               type="text"
               label="Child 3"
               value={child3}
               onChange={(e) => setchild3(e.currentTarget.value)}
            />
            <Button variant="contained" type="submit">
               ok
            </Button>
         </Stack>
      </form>
   )
}
