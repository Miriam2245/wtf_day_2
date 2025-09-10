// Advanced Banking Practice - No Functions or Classes
// 1. Create 4 accounts as objects
let account1 = {
    name: "Alice Johnson",
    balance: 1500,
    currency: "USD",
    type: "Savings"
};

let account2 = {
    name: "Bob Smith",
    balance: 800,
    currency: "USD",
    type: "Checking"
};

let account3 = {
    name: "Charlie Brown",
    balance: 2200,
    currency: "USD",
    type: "Savings"
};

let account4 = {
    name: "Diana Prince",
    balance: 1000,
    currency: "EUR",
    type: "Checking"
};

// 2. Simulate deposits
// Deposit to account1
let depositAmount1 = 300;
console.log(`Depositing ${depositAmount1} ${account1.currency} to ${account1.name}...`);
account1.balance = account1.balance + depositAmount1;
console.log(`New balance: ${account1.balance} ${account1.currency}`);

// Deposit to account3
let depositAmount2 = 500;
console.log(`Depositing ${depositAmount2} ${account3.currency} to ${account3.name}...`);
account3.balance = account3.balance + depositAmount2;
console.log(`New balance: ${account3.balance} ${account3.currency}`);

// 3. Simulate withdrawals
// Withdrawal from account2 (sufficient funds)
let withdrawAmount1 = 200;
console.log(`Attempting to withdraw ${withdrawAmount1} ${account2.currency} from ${account2.name}...`);
if (account2.balance >= withdrawAmount1) {
    account2.balance = account2.balance - withdrawAmount1;
    console.log(`Withdrawal successful! New balance: ${account2.balance} ${account2.currency}`);
} else {
    console.log(`Withdrawal denied for ${account2.name}: insufficient funds`);
}

// Withdrawal from account4 (insufficient funds)
let withdrawAmount2 = 1500;
console.log(`Attempting to withdraw ${withdrawAmount2} ${account4.currency} from ${account4.name}...`);
if (account4.balance >= withdrawAmount2) {
    account4.balance = account4.balance - withdrawAmount2;
    console.log(`Withdrawal successful! New balance: ${account4.balance} ${account4.currency}`);
} else {
    console.log(`Withdrawal denied for ${account4.name}: insufficient funds`);
}

// 4. Transfers
// Transfer between same currency accounts (account1 to account2)
let transferAmount1 = 400;
console.log(`Attempting to transfer ${transferAmount1} from ${account1.name} to ${account2.name}...`);
if (account1.currency === account2.currency) {
    if (account1.balance >= transferAmount1) {
        account1.balance = account1.balance - transferAmount1;
        account2.balance = account2.balance + transferAmount1;
        console.log(`Transfer successful!`);
        console.log(`${account1.name} new balance: ${account1.balance} ${account1.currency}`);
        console.log(`${account2.name} new balance: ${account2.balance} ${account2.currency}`);
    } else {
        console.log(`Transfer failed: insufficient funds in ${account1.name}`);
    }
} else {
    console.log("Transfer failed: currency mismatch");
}

// Transfer between different currency accounts (account3 to account4)
let transferAmount2 = 300;
console.log(`\nAttempting to transfer ${transferAmount2} from ${account3.name} to ${account4.name}...`);
if (account3.currency === account4.currency) {
    if (account3.balance >= transferAmount2) {
        account3.balance = account3.balance - transferAmount2;
        account4.balance = account4.balance + transferAmount2;
        console.log(`Transfer successful!`);
        console.log(`${account3.name} new balance: ${account3.balance} ${account3.currency}`);
        console.log(`${account4.name} new balance: ${account4.balance} ${account4.currency}`);
    } else {
        console.log(`Transfer failed: insufficient funds in ${account3.name}`);
    }
} else {
    console.log("Transfer failed: currency mismatch");
}
console.log();

// 5. Monthly maintenance
// Account 1 - Savings (add interest)
if (account1.type === "Savings") {
    let interest = account1.balance * 0.02; // 2% interest
    account1.balance = account1.balance + interest;
    console.log(`${account1.name} (Savings): Added ${interest.toFixed(2)} ${account1.currency} interest`);
    console.log(`New balance: ${account1.balance.toFixed(2)} ${account1.currency}`);
}

// Account 2 - Checking (deduct fees)
if (account2.type === "Checking") {
    let fee = 50;
    account2.balance = account2.balance - fee;
    console.log(`${account2.name} (Checking): Deducted ${fee} ${account2.currency} maintenance fee`);
    console.log(`New balance: ${account2.balance} ${account2.currency}`);
}

// Account 3 - Savings (add interest)
if (account3.type === "Savings") {
    let interest = account3.balance * 0.02; // 2% interest
    account3.balance = account3.balance + interest;
    console.log(`${account3.name} (Savings): Added ${interest.toFixed(2)} ${account3.currency} interest`);
    console.log(`New balance: ${account3.balance.toFixed(2)} ${account3.currency}`);
}

// Account 4 - Checking (deduct fees)
if (account4.type === "Checking") {
    let fee = 50; // Assuming EUR fee is same amount
    account4.balance = account4.balance - fee;
    console.log(`${account4.name} (Checking): Deducted ${fee} ${account4.currency} maintenance fee`);
    console.log(`New balance: ${account4.balance} ${account4.currency}`);
}

// 6. Comparisons - Find highest and lowest balances
// Find highest balance (comparing USD accounts only for fair comparison)
let highestAccount = account1;
if (account2.currency === "USD" && account2.balance > highestAccount.balance) {
    highestAccount = account2;
}
if (account3.currency === "USD" && account3.balance > highestAccount.balance) {
    highestAccount = account3;
}

// Find lowest balance (comparing USD accounts only)
let lowestAccount = account1;
if (account2.currency === "USD" && account2.balance < lowestAccount.balance) {
    lowestAccount = account2;
}
if (account3.currency === "USD" && account3.balance < lowestAccount.balance) {
    lowestAccount = account3;
}

console.log(`Highest balance (USD accounts): ${highestAccount.name} with ${highestAccount.balance.toFixed(2)} ${highestAccount.currency}`);
console.log(`Lowest balance (USD accounts): ${lowestAccount.name} with ${lowestAccount.balance.toFixed(2)} ${lowestAccount.currency}`);


// 7. Account status check
// Check account1 status
let status1;
if (account1.balance > 0) {
    status1 = "Active";
} else if (account1.balance === 0) {
    status1 = "Empty";
} else {
    status1 = "Overdrawn";
}
console.log(`${account1.name}: ${status1}`);

// Check account2 status
let status2;
if (account2.balance > 0) {
    status2 = "Active";
} else if (account2.balance === 0) {
    status2 = "Empty";
} else {
    status2 = "Overdrawn";
}
console.log(`${account2.name}: ${status2}`);

// Check account3 status
let status3;
if (account3.balance > 0) {
    status3 = "Active";
} else if (account3.balance === 0) {
    status3 = "Empty";
} else {
    status3 = "Overdrawn";
}
console.log(`${account3.name}: ${status3}`);

// Check account4 status
let status4;
if (account4.balance > 0) {
    status4 = "Active";
} else if (account4.balance === 0) {
    status4 = "Empty";
} else {
    status4 = "Overdrawn";
}
console.log(`${account4.name}: ${status4}`);

// 8. Transaction summary
console.log(`${account1.name.padEnd(15)} | ${account1.balance.toFixed(2).padStart(10)} ${account1.currency} | ${account1.type.padEnd(8)} | ${status1}`);
console.log(`${account2.name.padEnd(15)} | ${account2.balance.toFixed(2).padStart(10)} ${account2.currency} | ${account2.type.padEnd(8)} | ${status2}`);
console.log(`${account3.name.padEnd(15)} | ${account3.balance.toFixed(2).padStart(10)} ${account3.currency} | ${account3.type.padEnd(8)} | ${status3}`);
console.log(`${account4.name.padEnd(15)} | ${account4.balance.toFixed(2).padStart(10)} ${account4.currency} | ${account4.type.padEnd(8)} | ${status4}`);

// BONUS CHALLENGE - Currency Exchange
// Try transfer from EUR to USD with currency mismatch first
let eurToUsdAmount = 200;
console.log(`Attempting to transfer ${eurToUsdAmount} EUR from ${account4.name} to ${account1.name} (USD account)...`);
if (account4.currency === account1.currency) {
    if (account4.balance >= eurToUsdAmount) {
        account4.balance = account4.balance - eurToUsdAmount;
        account1.balance = account1.balance + eurToUsdAmount;
        console.log("Transfer successful!");
    } else {
        console.log("Transfer failed: insufficient funds");
    }
} else {
    console.log("Transfer failed: currency mismatch");
}

// Now try with exchange rate conversion
let exchangeRate = 1.1; // 1 EUR = 1.1 USD
console.log(`\nRetrying with exchange rate (1 EUR = ${exchangeRate} USD)...`);
if (account4.balance >= eurToUsdAmount) {
    let convertedAmount = eurToUsdAmount * exchangeRate;
    account4.balance = account4.balance - eurToUsdAmount;
    account1.balance = account1.balance + convertedAmount;
    console.log(`Transfer successful with conversion!`);
    console.log(`${eurToUsdAmount} EUR converted to ${convertedAmount} USD`);
    console.log(`${account4.name} new balance: ${account4.balance} ${account4.currency}`);
    console.log(`${account1.name} new balance: ${account1.balance.toFixed(2)} ${account1.currency}`);
} else {
    console.log("Transfer failed: insufficient funds");
}
