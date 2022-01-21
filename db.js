const {MongoClient} = require('mongodb')



const uri = "mongodb+srv://leonmher:<password>@cluster0.kc6el.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"



const client = new MongoClient(uri)

async function main (){

    try{
    await client.connect();

      await  AllDatabases(client)


    }
    catch {
        if (error){
            console.log(error)
        }
    }finally{
        client.close()
    }
}

main().catch(console.error)

async function AllDatabases(client){
    const databases = await client.db().admin().listDatabases()

    databases.databases.forEach((db)=>{
        console.log(`${db.name}`)
    })
    
}