export function PageHeader({title = "",children = undefined}: {title: string, children?: any }){
    return (
        <>
        <div>
         <PageTitle title={title}/>
        {children}
        </div>
        </>
    )
}

export function PageTitle({title}: {title: string}){
    return(
        <>
        <h1 className="text-4xl text-sky-500 font-bold">
        {title}
        </h1>
        </>
    )
}