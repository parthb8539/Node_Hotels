const express = require('express');
const router =express.Router();

const MenuItem=require('./../models/MenuItem');



router.get('/',async (req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'No data'})
    }
})

router.post('/',async (req,res)=>{
    try{
        const data = req.body
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log('data saved');
        res.status(200).json(response);
    }

    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }

})

// router.put('/:id',async (res,req)=>{
//     try{
//         const menuItemId=req.params.id;
//         const updateMenuItem = req.body;

//         const response = await MenuItem.findByIdAndUpdate(menuId,updateMenuItem,{
//             new: true,
//             runValidators:true
//         })

//         if(!response) {
//             return res.status(404).json({error:'not in menu'});
//         }
//         console.log('Menu Updated');
//         res.status(200).json(response);

//     }catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal Server error'});
//     }
// })
module.exports=router