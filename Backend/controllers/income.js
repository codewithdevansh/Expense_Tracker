const incomeSchema=require('../models/incomeModels');

exports.addIncome = async (req, res) => {
    const {title, amount,  date, category, description} = req.body;
    
    const income =  incomeSchema({
        title,
        amount,
        date,
        category,
        description,
    });


try {
    if(!title || !category || !date || !category){
        return res.status(400).json({error: "Please fill all the fields"});
    }
    if(amount <= 0 || !amount === 'number'){
        return res.status(400).json({error: "Please enter a valid amount"});
    }
    await income.save();
    res.status(200).json({message: "Income added successfully"});
}
    catch (error){
        res.status(500).json({error: "Internal server error"})
    }


console.log(income)
}

exports.getIncomes = async (req, res) => {

    try{
        const incomes = await incomeSchema.find().sort({createdAt: -1});
        res.status(200).json({incomes});
    }   catch (error){
        res.status(500).json({error: "Internal server error"})
    }
}
exports.deleteIncome = async (req, res) => {

   const{id} = req.params;

   incomeSchema.findByIdAndDelete(id)
                .then((income) => {
                    res.status(200).json({message: "Income deleted successfully"});
                })
                .catch((error) => {
                    res.status(500).json({error: "Internal server error"})
                })
    

}
