

const LinkCard = ({link}) => {
    console.log("link-->" , link)
  return (
   <div>
       <div className="flex gap-5">
        <h1>{link.title}</h1>
         <a href={link.url}>{link.url}</a>
       </div>
   </div>
  )
}

export default LinkCard