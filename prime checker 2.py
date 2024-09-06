s = 0
x = int(input("Enter no: "))
if x < 0:
    x = x * -1
print(x)
for i in range(1,x):
    if x % i == 0:
        s = s + i
if s>= x-1:
    print('non Prime')
else:
    print('Prime')

