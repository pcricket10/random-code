# # length
# print(len("Spaghetti"))    # => 9

# # indexing a string
# print("Spaghetti"[0])    # => S
# print("Spaghetti"[4])    # => h


# print("Spaghetti"[-1])    # => i
# print("Spaghetti"[-4])    # => e


# print("Spaghetti"[1:4])  # => pag
# print("Spaghetti"[4:-1])    # => hett
# print("Spaghetti"[4:4])  # => (empty string)


# print("Spaghetti"[:4])  # => Spag
# print("Spaghetti"[:-1])    # => Spaghett


# print("Spaghetti"[1:])  # => paghetti
# print("Spaghetti"[-4:])    # => etti


# print("Spaghetti"[15])    # => IndexError: string index out of range
# print("Spaghetti"[-15])    # => IndexError: string index out of range

# print("Spaghetti"[:15])    # => Spaghetti
# print("Spaghetti"[15:])    # => (empty string)
# print("Spaghetti"[-15:])    # => Spaghetti
# print("Spaghetti"[:-15])    # => (empty string)
# print("Spaghetti"[15:20])    # => (empty string)

# # using string functions

# print("Spaghetti".index("h"))    # => 4
# print("Spaghetti".index("t"))    # => 6

# print("Spaghetti".index("s"))    # => ValueError: substring not found

# print("Spaghetti".count("h"))    # => 1
# print("Spaghetti".count("t"))    # => 2
# print("Spaghetti".count("s"))    # => 0
# print('''We choose to go to the moon in this decade and do the other things,
# not because they are easy, but because they are hard, because that goal will
# serve to organize and measure the best of our energies and skills, because that
# challenge is one that we are willing to accept, one we are unwilling to
# postpone, and one which we intend to win, and the others, too.
# '''.count('the '))                # => 4

# # concatenation
# print("gold" + "fish")    # => goldfish
# print("s"*5)              # => sssss
# print("$1" + ",000"*3)     # => $1,000,000,000

# # formatting
# first_name = "Billy"
# last_name = "Bob"
# # => Your name is Billy Bob
# print('Your name is {0} {1}'.format(first_name, last_name))

# print(f'Your name is {first_name} {last_name}')

# s = "--".join(["it", "is", "kind"])
# print(s)

# # Prints it--is--kind
