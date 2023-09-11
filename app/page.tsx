'use client'

import {Avatar} from "@nextui-org/avatar";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {ChangeEvent, useState} from 'react'
import {mainListItems} from "./components/listItems"

export default function Home() {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginUser(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }

  const handleSign = () => {
    console.log(JSON.stringify(loginUser))
  }

  return (
    <main className="h-screen grid grid-cols-5 gap-0">
      <div className="col-span-1">
        {mainListItems}
      </div>
      <div className="bg-white col-span-4 flex flex-col items-center">
        <Avatar className="m-4 mt-32" size="lg" name="Jay"/>
        <Input className={"px-4"} onChange={handleChange} type="email" name="email" label="Email" isRequired/>
        <Input className={"px-4 my-4"} onChange={handleChange} type="password" name="password" label="password" isRequired/>
        <Button onClick={handleSign}>sign</Button>
      </div>
    </main>
  )
}
