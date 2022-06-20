const client=require('../db/connection')

exports.adddata=(req,res)=>{
    return new Promise((resolve,reject)=>{
        let {id,age,city,name,phone}=req.body;
        const query=`INSERT INTO aeps.worker(id,age,city,name,phone)VALUES(${id},${age},'${city}','${name}',${phone})`;
        console.log(query);
        client.execute(query).then((success)=>{
            console.log(success);
            resolve({
                status:0,
                statusDesc:"Data inserted successfully"
            })
        }).catch((err)=>{
            console.log(err);
            reject({
                status:-1,
                statusDesc:err.message
            })
        })
    })
}

exports.email2=(req,res)=>{
    return new Promise((resolve,reject)=>{
        // console.log("start")
        let {id,age,city,name,phone,email}=req.body;
        const query1=`SELECT * FROM aeps.worker WHERE email='${email}' ALLOW FILTERING`
        console.log(query1)
        client.execute(query1).then((success)=>{
            console.log(success);
            if(success.rowLength==1){
                console.log('already exist');
                resolve({
                    status:1,
                    statusDesc:"email is exist"
                })
            }else{
                const query =`INSERT INTO aeps.worker(id,age,city,name,phone,email)VALUES(${id},${age},'${city}','${name}',${phone},'${email}')`
                console.log(query);
                client.execute(query).then((result)=>{
                    console.log(result);
                    resolve({
                        status:0,
                        result:result,
                        statusDesc:"inserted successfully"
                    })
                }).catch((err)=>{
                    console.log(err);
                    reject({
                        status:-1,
                        statusDesc:err.message
                    })
                })
            }
        }).catch()
    })
}

exports.bulk2=(req,res)=>{
    return new Promise((resolve,reject)=>{
        
    })
}
exports.getdata=(req,res)=>{
    return new Promise((resolve,reject)=>{
        const query=`SELECT * FROM aeps.worker`
        console.log(query);
        client.execute(query).then((success)=>{
            console.log("Success",success);
            resolve({
                status:0,
                result:success,
                statusDesc:"Data gets successfully"
            })
        }).catch((err)=>{
            console.log(err);
            reject({
                status:-1,
                statusDesc:err.message
            })
        })
    })
}

exports.updatedata=(req,res)=>{
    return new Promise((resolve,reject)=>{
        let id=req.params.id
        const query1=`SELECT * FROM aeps.worker WHERE id=${id}`;
        console.log(query1);
        client.execute(query1).then((success)=>{
            console.log("Success",success);
            if(success.rowLength==1){
                let age=req.body.age;  
                let city=req.body.city;
                let name=req.body.name;
                let phone=req.body.phone;

                const query2=`update worker set age=${age},city='${city}',name='${name}',phone=${phone} WHERE id=${id}`;
                console.log(query2)
                client.execute(query2).then((result)=>{
                    console.log("updated successfully");
                    resolve({
                        status:0,
                        result:result,
                        statusDesc:"Data updated successfully"
                    })
                }).catch()
            }
        }).catch((err)=>{
            console.log(err);
            reject({
                status:-1,
                statusDesc:err.message
            })
        })
    })
}

exports.deletedata=(req,res)=>{
    return new Promise((resolve,reject)=>{
        let id = req.params.id;
        const query=`DELETE FROM aeps.worker WHERE id=${id}`
        console.log(query)
        client.execute(query).then((success)=>{
            console.log('Success',success)
            resolve({
                status:0,
                result:success,
                statusDesc:"Data deleted successfully"
            })
        }).catch((err)=>{
            console.log(err);
            reject({
                status:-1,
                statusDesc:err.message
            })
        })
    })
}