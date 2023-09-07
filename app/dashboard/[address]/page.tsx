export default function Page({ params }: { params: { address: string } }) {
    return (
        <div className={"flex align-middle"}>
            <p className={"flex:1 text-2xl align-middle"}>{params.address}</p>
        </div>
    )
}