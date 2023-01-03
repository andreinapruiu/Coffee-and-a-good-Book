import random

# Open the file with quotes
with open('quotes.txt') as f:
    # Read all the lines from the file and store them in a list
    quotes = f.readlines()

# Use the random.choice() function to randomly choose a quote from the list
random_quote = random.choice(quotes)

# with open('random_quote.txt', 'w') as f:
#     # Write the quote to the file
#     f.write(random_quote)

print(random_quote)
