"""ლუწი და კენტ რიცხვთა სიის პოვნა
შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების სიას და დააბრუნებს ორ ცალკე სიას – ერთში იქნებიან ლუწი რიცხვები, ხოლო მეორეში კენტი რიცხვები."""



list1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

list2=[]

list3=[]


def number(num):
    for i in num:
        if i%2==0:
            list2.append(i)
        else:
            list3.append(i)
    return list2, list3

print(number(list1))
        
        

        