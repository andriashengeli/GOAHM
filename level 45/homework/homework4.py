"""ფუნქცია: სიის გადაბრუნება
შექმენი ფუნქცია reverse_list(items), რომელიც დააბრუნებს გადაბრუნებულ სიას (სიის ბოლო ელემენტი პირველზე იქნება, პირველი კი ბოლო)."""

list1=[50,'andria','shengelia',True]

def reverse_list(items):
    return items[::-1]

print(reverse_list(list1))