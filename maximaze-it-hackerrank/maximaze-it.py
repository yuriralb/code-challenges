from itertools import product
l, Smax = [], []
soma = 0
k, m = map(int, input().split())
for _ in range(k):
    l.append(list(map(int, input().split()[1:])))
for tuples in list(product(*l)):
    for values in tuples:
        soma += values**2
    Smax.append(soma%m)
    soma = 0
print(max(Smax))