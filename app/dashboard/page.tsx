import {Button} from "@nextui-org/button";

export default function Page() {
  return (
    <div className={"p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"}>
      <div className={"shrink-0"}>
        <Button>click</Button>
      </div>
      <div className={"text-xl font-medium text-black"}>hello</div>
      <p className={"text-slate-500"}>you have a message</p>
    </div>
  )
}