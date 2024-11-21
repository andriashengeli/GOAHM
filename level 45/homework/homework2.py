"""შექმენი ფუნქცია sum_of_list(num_list), რომელიც მიიღებს რიცხვების სიას და დააბრუნებს სიაში არსებული ყველა რიცხვის ჯამს.
ფუნქცია უნდა გამოიყენოს for ციკლი"""


list1=[10,15,20,30,40,50,]


def sum_of_list(num_list):
    num=0
    for i in num_list:
        num += i
    return num

print(sum_of_list(list1))
    
    