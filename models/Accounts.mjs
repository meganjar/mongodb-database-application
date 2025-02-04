


const accountsSchema = new mongoose.Schema({
_id: String,
acount_id: {
    type: String,
    required: true
},
limit: Number

})

export default mongoose.model("accounts", accountsSchema);