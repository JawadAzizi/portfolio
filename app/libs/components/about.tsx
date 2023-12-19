import { PageHeader } from "./pageHeader"
export function About(){
    return(
        <>
        <div className="container mx-auto">
        <PageHeader title={"About me"} />
        <h1>Mohammad Jawad Azizi</h1>
         <p>
            I Graduated from Software engineering of Kabul University.I am a professional Full-stack web developer with 2 years of total work experience
            in web developement, on different project, in both environemnts remote and on-site.
         </p>
         <p>
            <ul className="mt-6">
                <li><span className="text-lg text-sky-500">phone:</span> +93777672002</li>
                <li><span className="text-lg text-sky-500">Email:</span> jawad.azizi1398@gmail.com</li>
                <li><span className="text-lg text-sky-500">Address:</span> Kabul, Afghanistan</li>
                <li><span className="text-lg text-sky-500">Linkedin:</span> jawadazizi-23--23</li>
                <li><span className="text-lg text-sky-500">X:</span> @jawadazizi</li>
                <li><span className="text-lg text-sky-500">Github:</span> www.github.com/jawadazizi</li>
            </ul>
         </p>
         </div>
        </>
    )
}