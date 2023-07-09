let userIdsEmpty:boolean = false

const userIds= ['id1','id2','id3','id4','id5','id6','id7','id8','id9','id10','id11','id12']
const pickRandomUser = ()=>{
   const randomUsers = []
   const count = 4

    for(let i= 0; i<count; i++){
        const randomIndex = Math.floor(Math.random() * userIds.length)
        // console.log(randomIndex)   
           
        randomUsers.push(userIds[randomIndex])
        userIds.splice(randomIndex,1)
         if(userIds.length === 0){
            clearInterval(intervalIds)
            console.log('finished')
        }
    }
    return randomUsers
}
let intervalIds:any
const getRandomIds = ()=>{
    const minutes = 1
    const milliSeconds = minutes * 60 * 1000

    const timeInterval = milliSeconds

    let user ;
   console.log(userIdsEmpty)
    intervalIds = setInterval(()=>{
    // console.log(pickRandomUser()) 
     user = pickRandomUser()
     console.log(user)
    userIdsEmpty = true

   },timeInterval)

 return user

}


export default getRandomIds