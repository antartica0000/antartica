'''                                                                             CALCULATING HOURS, MINUTES AND SECONDS
DATE: 11/7/2024
AIM: TO FIND HOURS, MINUTES AND SECONDS FROM TIME GIVEN IN SECONDS.

PROGRAM:
'''
def abc(): #FUNCTION USED HERE
    #METHOD 1
    seconds = int(input("Enter: "))
    h = seconds // 3600
    m = seconds % 3600 // 60
    s = seconds % 3600 % 60
    print("\n\t\tOUTPUT\n")
    print("Method 1: ",h," Hours ",m," Minutes ",s," Seconds ")
    #METHOD 2
    x = seconds//3600
    y = seconds//60

    a = x * 60
    b = y
    y = a - b
    if y < 0:
        y = y * -1
    a = y*60
    b = x * 3600
    c = a+b
    z = seconds - c
    print("Method 2: ",x," Hours ",y," Minutes ",z," Seconds \n")
    abc()
    

abc()
'''
		OUTPUT

Method 1:  2  Hours  0  Minutes  0  Seconds 
Method 2:  2  Hours  0  Minutes  0  Seconds 

'''
