// ExploreIf();
// ExploreLoops();
int sum = 0;
for (int i = 1; i <= 20; i++)
{
  if (i % 3 == 0)
  {
    sum = sum + i;
  }
}
Console.WriteLine($"Hello World! The sum is {sum}");


void ExploreLoops()
{
  for (int index = 0; index < 10; index++)
  {
    Console.WriteLine($"Hello World! The index is {index}");
  }


}

void ExploreIf()
{
  int a = 5;
  int b = 3;
  if (a + b > 10)
  {
    Console.WriteLine("The answer is greater than 10");
  }
  else
  {
    Console.WriteLine("The answer is not greater than 10");
  }

  int c = 4;
  if ((a + b + c > 10) && (a > b))
  {
    Console.WriteLine("The answer is greater than 10");
    Console.WriteLine("And the first number is greater than the second");
  }
  else
  {
    Console.WriteLine("The answer is not greater than 10");
    Console.WriteLine("Or the first number is not greater than the second");
  }

  if ((a + b + c > 10) || (a > b))
  {
    Console.WriteLine("The answer is greater than 10");
    Console.WriteLine("Or the first number is greater than the second");
  }
  else
  {
    Console.WriteLine("The answer is not greater than 10");
    Console.WriteLine("And the first number is not greater than the second");
  }
}
