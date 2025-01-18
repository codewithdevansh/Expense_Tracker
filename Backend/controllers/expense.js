const ExpenseSchema=require('../models/expenseModels');

exports.addExpense = async (req, res) => {
    const {title, amount,  date, category, description} = req.body;
    
    const Expense =  ExpenseSchema({
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
    await Expense.save();
    res.status(200).json({message: "Expense added successfully"});
}
    catch (error){
        res.status(500).json({error: "Internal server error"})
    }


console.log(Expense)
}

exports.getExpense = async (req, res) => {

    try{
        const Expense = await ExpenseSchema.find().sort({createdAt: -1});
        res.status(200).json({Expense});
    }   catch (error){
        res.status(500).json({error: "Internal server error"})
    }
}
exports.deleteExpense = async (req, res) => {

   const{id} = req.params;

   ExpenseSchema.findByIdAndDelete(id)
                .then((Expense) => {
                    res.status(200).json({message: "Expense deleted successfully"});
                })
                .catch((error) => {
                    res.status(500).json({error: "Internal server error"})
                })
    

}
