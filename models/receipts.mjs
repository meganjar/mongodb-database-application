


receiptsSchema.index({ transaction_date: 1 }, { unique: true });
mongoose.set(autoIndex, false);

export default mongoose.model("receipts", receiptsSchema)