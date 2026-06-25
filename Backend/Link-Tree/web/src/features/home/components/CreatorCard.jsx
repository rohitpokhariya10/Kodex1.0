
const ProfilrHeader = ({username , creator}) => {
    console.log("username in profileHeader-->" , username);
    console.log("creator--->" , creator);
  return (
    <div>
        <div>
            <img src={creator.image} alt="creator image" />
            <h2>{creator.name}</h2>
            <h4>{creator.username}</h4>
            <p>{creator.bio}</p>
        </div>
    </div>
  )
}

export default ProfilrHeader