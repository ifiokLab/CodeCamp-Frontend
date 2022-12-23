income = float(input('enter your salary:'))

tax_rate = 0.1
result = tax_rate * income
print(f'hi, your monthly tax is: {result} Naira')

income_after_tax = income - result
print(f'your monthly income after tax is {income_after_tax}')