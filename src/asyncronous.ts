const makePromise= () : Promise<string>=>{
    return new Promise<string>((resolve, reject)=>{
        const data: string = "Data is fetched"
        if(data){
            resolve(data)
        }else{
            reject("Failed to fetch")
        }
    })
}
const getPromiseData = async (): Promise<void>=>{
    const data = await makePromise()
    console.log(data)
}
const result1 = makePromise()