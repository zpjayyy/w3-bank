import {ChevronCircleTopLinearIcon} from "@nextui-org/shared-icons";

export const ItemCounter = ({number}: {number: number}) => {
  return (
    <div className="flex items-center gap-1 text-default-400">
      <span className="text-small">{number}</span>
      <ChevronCircleTopLinearIcon className="text-xl"/>
    </div>
  )
}