'''splitting nos'''
num = int(input("Enter:  "))
x = num
reversed_num = 0
while num > 0:
    digit = num % 10  # Get the last digit
    reversed_num = reversed_num * 10 + digit  # Build the reversed number
    num = num // 10  # Remove the last digit from num
reversed_num = str(reversed_num)
print('\n\nOUTPUT\n\nReversed no: ' + reversed_num)

x = str(x)
sum = 0
for i in x:
    y = i
    y = int(y)
    sum = y + sum
    y = 0
print('Sum of digits: ', sum)

largest = 0
for z in x:
    v= z
    v = int(v)
    if v>largest:
        largest = v
    v = 0
print('Largest digit: ', largest)

smallest = 10
z = 0
v = 0
for z in x:
    v = z
    v = int(v)
    if smallest > v:
        smallest = v
    v=0
print('Smallest digit: ',smallest)
