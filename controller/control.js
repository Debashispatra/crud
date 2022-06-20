const {adddata,getdata, updatedata, deletedata, bulk2, email2}=require('../module/module')

exports.sender=(req,res) => {
    adddata(req).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

exports.email1=(req,res)=>{
    email2(req).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

exports.bulk1=(req,res)=>{
    bulk2(req).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

exports.receiver=(req,res)=>{
    getdata(req).then((result)=>{
        res.status(200).json(result.result.rows)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

exports.updated=(req,res)=>{
    updatedata(req).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

exports.deleted=(req,res)=>{
    deletedata(req).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}