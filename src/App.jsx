import { useState } from "react";

function App()
{
  const [user, setUser]=useState(null)
  const [loading, setLoading]=useState(false)
  const [username, setUsername]=useState('')
  const [error, setError]=useState(null)
  const fetchUser = () => {
    if(!username) return 
    setLoading(true)
    setError(null)
    fetch(`https://api.github.com/users/${username}`)
    .then(response=> {
      if(!response.ok)
      {
        throw new Error('user not found')
      }
      return response.json()
    })
    .then(data=>{
      setUser(data)
      setLoading(false)
    })
    .catch(err=> {
      setError(err.message)
      setLoading(false)

      console.log(err)
    })
  }
  return(
    <>
    <h1>Github ACCOUNT Finder </h1>
    <input 
    type="text" 
    placeholder="Enter Your Github username" 
    value={username} 
    onChange={(e)=>setUsername(e.target.value)}
    onKeyDown={(e)=> e.key==='Enter' && fetchUser()}
    />

    <button onClick={fetchUser}>search</button>
    {error && <p>error:{error}</p> }
    {loading && <p>still loading......</p>}
    {user && !loading && (
      <>
      <img src={user.avatar_url} alt="file not found"   style={{
    display: "block",
    margin: "auto",
    height: "110px",
    width: "200px"
  }
}/>
      <p>name:{user.name }</p>
      <p>bio:{user.bio}</p>
      <p>followers:{user.followers}</p>
      <p>public_repository:{user.public_repos}</p>
      <p>location:{user.location}</p>
      </>
    )}


    </>
  )

}
export default App;