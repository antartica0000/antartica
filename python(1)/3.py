''' TO CALCULATE DISCOUNT'''
from modulea import *
def start_function():
    print("")
    print("-----------------------------------------")
    print("Discount Calculator")
    time()
    print("-----------------------------------------")
    print("")
    amt = float(input("Amount: "))
    discount = float(input("Discount %: "))
    dvalue = discount/100 * amt
    tamt = amt - dvalue
    print("Discount Amount: ",dvalue)
    print("Total Amount: ",tamt)
    print("")
    # take input from the user
    termination = input("Do you want to continue (Yes/No): ")

    # check if choice is one of the four options
    if termination == 'no':
        import home
        a_function()
    else:
        start_function()
    

start_function()
