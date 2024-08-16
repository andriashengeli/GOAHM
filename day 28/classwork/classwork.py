#ასაკი - ფასდაკლება
#0-10 - 20$
#11-15 - 10$
#16-18 - 5$
#8+ - 0$
#string - Invalid input


age=int(input("enter numbers: "))
if age  >= 0 and age <= 10:
    print("20$")
elif age >= 11 and age <=15:
    print("10$")

elif age >= 16 and age <= 18:
    print("5$")

else:
    print("invalid")








