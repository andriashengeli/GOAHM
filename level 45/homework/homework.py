"""ფუნქცია: რაოდენობის დათვლა
    შექმენი ფუნქცია count_items(item_list, item), რომელიც მიიღებს ორ პარამეტრს:
    item_list - ელემენტების სია.
    item - ელემენტი, რომლის დათვლაც გსურს სიაში.
    ფუნქციამ უნდა დააბრუნოს, რამდენჯერ გვხვდება ეს ელემენტი სიაში."""


list1=[4,7,10,15,20, "a"]
def count_items(item_list, item):
    return item_list.count(item)

print(count_items(list1,10))