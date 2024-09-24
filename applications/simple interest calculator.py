def calculate_interest():
    print("Intrest Calculator")
    p = float(input("Enter the principal amount: "))
    i = float(input("Enter the intrest rate: "))
    t = float(input("Enter the time period: "))
    a = (p*i*t)/100
    print("Interest amount: ",a)
    calculate_interest()

calculate_interest()
