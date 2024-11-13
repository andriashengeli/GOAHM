#სიტყვის რიცხვი ტექსტში
#შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და გამოითვლის, რამდენი სიტყვაა ამ ტექსტში.


words= 'andria shengelia'

def count_words(num):
    numbers=num.split()
    return len(numbers)

print(count_words(words))