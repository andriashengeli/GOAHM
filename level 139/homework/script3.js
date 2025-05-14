class BankAccount {
  static totalAccountsCreated = 0;

  constructor(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this._balance = initialBalance;
    BankAccount.totalAccountsCreated++;
  }

  get balance() {
    return this._balance;
  }
}


let account1 = new BankAccount("Alice", 1000);
console.log(account1.balance); 
let account2 = new BankAccount("Bob", 2000);
console.log(account2.balance); 