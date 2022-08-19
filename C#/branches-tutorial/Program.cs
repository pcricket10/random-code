// ExploreIf();
// ExploreLoops();
// ExploreAdvLoops();
// ExploreArrLstColl();
// WorkWithString();

ListOther();

void ListOther()
{
  var fibonacciNumbers = new List<int> { 1, 1 };

  while (fibonacciNumbers.Count < 20)
  {
    var previous = fibonacciNumbers[fibonacciNumbers.Count - 1];
    var previous2 = fibonacciNumbers[fibonacciNumbers.Count - 2];

    fibonacciNumbers.Add(previous + previous2);
  }


  foreach (var item in fibonacciNumbers)
    Console.WriteLine(item);
}

void WorkWithString()
{
  var names = new List<string> { "<name>", "Ana", "Felipe" };
  foreach (var name in names)
  {
    Console.WriteLine($"Hello {name.ToUpper()}!");
  }

  Console.WriteLine();
  names.Add("Maria");
  names.Add("Bill");
  names.Remove("Ana");
  foreach (var name in names)
  {
    Console.WriteLine($"Hello {name.ToUpper()}!");
  }

  Console.WriteLine($"My name is {names[0]}");
  Console.WriteLine($"I've added {names[2]} and {names[3]} to the list");

  Console.WriteLine($"The list has {names.Count} people in it");

  var index = names.IndexOf("Felipe");
  if (index == -1)
  {
    Console.WriteLine($"When an item is not found, IndexOf returns {index}");
  }
  else
  {
    Console.WriteLine($"The name {names[index]} is at index {index}");
  }

  index = names.IndexOf("Not Found");
  if (index == -1)
  {
    Console.WriteLine($"When an item is not found, IndexOf returns {index}");
  }
  else
  {
    Console.WriteLine($"The name {names[index]} is at index {index}");

  }

  names.Sort();
  foreach (var name in names)
  {
    Console.WriteLine($"Hello {name.ToUpper()}!");
  }
}


void ExploreArrLstColl()
{
  var names = new List<string> { "New Friend", "Scott", "Kendra" };
  names.Add("Maria");
  names.Add("Bill");
  names.Sort();
  foreach (var name in names)
  {
    Console.WriteLine(name);
  }


  var index = names.IndexOf("Kendra");

  if (index == -1)
  {
    Console.WriteLine($"When an item is not found, IndexOf returns {index}");
  }
  else
  {
    Console.WriteLine($"The name {names[index]} is at index {index}");
  }

  // Console.WriteLine($"Found Scott at  {index}");

  // foreach (string name in names)
  // {
  //   Console.WriteLine($"Hello {name.ToUpper()}!");
  // }

  // for (int i = 0; i < names.Count; i++)
  // {
  //   Console.WriteLine($"Hello {names[i].ToUpper()}!");
  // }
}


void ExploreAdvLoops()
{
  int sum = 0;
  for (int i = 1; i <= 20; i++)
  {
    if (i % 3 == 0)
    {
      sum = sum + i;
    }
  }
  Console.WriteLine($"Hello World! The sum is {sum}");
}









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
