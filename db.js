const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://Sheetal:sheetalsharma@cluster0.qpk1add.mongodb.net/NXMLastFull?retryWrites=true&w=majority")

module.exports={
    connection
}