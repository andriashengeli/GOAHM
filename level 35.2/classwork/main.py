#შექმენით პროგრამა რომელშიც გექნებათ ხილის სია კალათა 
# (list), შემდეგ მომხარებელს შემოატანინეთ თავისი საყვარელი ხილი 
# (input), დაადეკლარირეთ ცვლადი რომელიც დაადგენს არის თუ არა 
# ხილი კალათაში (variable) fruit_in_basket რომლის მნიშვნელობა 
# თავიდან იქნება False, for ციკლის საშვალებით (for loop) განიხილეთ
#  კალათა და პირობითი განცხადების საშვალებით (if-else) შეადარეთ მომხარებლის 
# საყვარელ ხილს, თუ ისინი ტოლი იქნება fruit_in_basket ცვლადის მნიშვნელობა 
# შეცვალეთ True boolean-ით, შეამოწმეთ არის თუ არა ეს ხილი სიაში, საბოლოოდ 
# პირობითი განცხადების საშვალებით (if-else) შეამოწმეთ მომხმარებლის საყვარელი 
# ხილი არის თუ არა კალათაში fruit_in_basket, თუ არის დაუბეჭდეთ 'Good choice'
# თუ არ არის 'Fruit not in basket'


fruit_in_basket=['banana','cherry','watermelon','mango']
user_choice_of_fruit=input("enter any fruit you like: ")

if fruit_in_basket ==  user_choice_of_fruit == "cherry" or user_choice_of_fruit == "watermelon" or user_choice_of_fruit =='banana':
    print("fruit_in_basket get it")

else:
    print("fruit not in basket")






