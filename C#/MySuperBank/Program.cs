// See https://aka.ms/new-console-template for more information
using mySuperBank;

var account = new BankAccount("Philip", 10000);
Console.WriteLine($"Account {account.Number} was created for {account.Owner} with {account.Balance}.");

account.MakeWithdrawal(50, DateTime.Now, "Xbox Game");
account.MakeWithdrawal(5, DateTime.Now, "Coffee");
account.MakeWithdrawal(5, DateTime.Now, "Diet Coke");
account.MakeWithdrawal(120, DateTime.Now, "Hammock");
account.MakeWithdrawal(7, DateTime.Now, "Tea");
account.MakeWithdrawal(8, DateTime.Now, "Pants");


Console.WriteLine(account.GetAccountHistory());






// // Test that the initial balances must be positive.
// try
// {
//   var invalidAccount = new BankAccount("invalid", -55);
// }
// catch (ArgumentOutOfRangeException e)
// {
//   Console.WriteLine("Exception caught creating account with negative balance");
//   Console.WriteLine(e.ToString());
// }

// // Test for a negative balance.
// try
// {
//   account.MakeWithdrawal(750, DateTime.Now, "Attempt to overdraw");
// }
// catch (InvalidOperationException e)
// {
//   Console.WriteLine("Exception caught trying to overdraw");
//   Console.WriteLine(e.ToString());
// }
