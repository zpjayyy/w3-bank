import {BankIcon} from "@/app/icons/BankIcon"
import {IconWrapper} from "./IconWrapper"
import {Listbox, ListboxItem} from "@nextui-org/listbox";
import {ItemCounter} from "./ItemCounter"
import {HomeIcon} from "@/app/icons/HomeIcon";
import {ChatIcon} from "@/app/icons/ChatIcon";
import {CogIcon} from "@/app/icons/CogIcon";
import {MenuIcon} from "@/app/icons/MenuIcon";

export const mainListItems = (
  <div className="flex flex-col items-center">
    <div className="flex flex-row items-center text-xl">
      <IconWrapper className="bg-orange-500 text-white m-2">
        <BankIcon className="text-lg"/>
      </IconWrapper>
      w3-bank
    </div>
    <Listbox aria-label="User Menu" onAction={(key) => alert(key)}
             className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
             itemClasses={{base: "px-3 first:round-t-medium last:round-b-medium round-none gap-3 h-12 data-[hover=true]:bg-default-100/80"}}>
      <ListboxItem key="home"
                   endContent={<ItemCounter number={13}/>}
                   startContent={
                     <IconWrapper className="bg-orange-500 text-white">
                       <HomeIcon className="text-lg"/>
                     </IconWrapper>
                   }>
        Home
      </ListboxItem>
      <ListboxItem key="chat"
                   endContent={<ItemCounter number={13}/>}
                   startContent={
                     <IconWrapper className="bg-orange-500 text-white">
                       <ChatIcon className="text-lg"/>
                     </IconWrapper>
                   }>
        Chat
      </ListboxItem>
      <ListboxItem key="Cog"
                   endContent={<ItemCounter number={13}/>}
                   startContent={
                     <IconWrapper className="bg-orange-500 text-white">
                       <CogIcon className="text-lg"/>
                     </IconWrapper>
                   }>
        Cog
      </ListboxItem>
      <ListboxItem key="Menu"
                   endContent={<ItemCounter number={13}/>}
                   startContent={
                     <IconWrapper className="bg-orange-500 text-white">
                       <MenuIcon className="text-lg"/>
                     </IconWrapper>
                   }>
        Menu
      </ListboxItem>
    </Listbox>
  </div>
)