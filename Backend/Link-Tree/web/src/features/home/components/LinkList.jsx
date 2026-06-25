import LinkCard from "./LinkCard"


const LinkList = ({links}) => {
    console.log("creator all Links-->" , links)
  return (
     <div>
        <h1>Creator social handles</h1>
        <div>
            {
              links.map((link)=><LinkCard link={link} key={link.id}/>)  
            }
        </div>
    </div>
  )
}

export default LinkList