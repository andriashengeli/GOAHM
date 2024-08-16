#შექმენით პროგრამა, რომელიც ასაკის მიხედვით გამოიტანს მის ასაკობრივ ჯგუფს :
#ბავშვი: 0-12
#თინეიჯერი: 13-19
#ზრდასრული: 20-64
#პენსიონერი: 65 და მეტი



age=int(input("enter age: "))
if age  >= 0 and age <= 12:
    print("baby")

elif age  >= 13 and age <= 19:
    print("teenger")

elif age >=20 and age <=64:
    print("an adult")

elif age >=65 and age <=100:
    print("old")

